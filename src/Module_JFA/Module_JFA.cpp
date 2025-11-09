#include "Module_JFA.hpp"
#include <imgui.h>
#include <cstdint>
#include <smart/smart.hpp>
#include "Cool/File/File.h"
#include "Cool/Gpu/OpenGL/copy_tex_pipeline.hpp"
#include "Cool/TextureSource/TextureLibrary_Image.h"
#include "Cool/TextureSource/TextureSamplerDescriptor.h"

namespace Lab {

static auto module_id()
{
    static auto i{0};
    return i++;
}

static constexpr auto texture_format = Cool::TextureFormat{.num_components = 4, .type = Cool::PixelType::Float16};

Module_JFA::Module_JFA(
    std::string               texture_name_in_shader,
    std::shared_ptr<Module>   module_that_we_depend_on,
    Cool::SharedVariable<int> glitch,
    Cool::SharedVariable<int> reduce_resolution
)
    : Module{
          fmt::format("Mask to Shape {}", module_id()),
          texture_format,
          std::move(texture_name_in_shader),
          {std::move(module_that_we_depend_on)},
          {} // We don't depend on any node
      }
    , _render_target{texture_format}
    , _glitch{std::move(glitch)}
    , _reduce_resolution{std::move(reduce_resolution)}

{
    reload_shaders(); // TODO(JFA) only load shader in constructor (and make them static to share between instances of JFA?)
}

void Module_JFA::reload_shaders() const
{
    _init_shader.compile(*Cool::File::to_string(Cool::Path::root() / "res/JFA/init.frag"));
    _one_flood_step_shader.compile(*Cool::File::to_string(Cool::Path::root() / "res/JFA/flood_step.frag"));
}

static auto find_smallest_power_of_2_greater_or_equal_to(uint32_t n) -> uint32_t
{
    if (n == 0)
        return 1;
    n--;
    n |= n >> 1;
    n |= n >> 2;
    n |= n >> 4;
    n |= n >> 8;
    n |= n >> 16;
    return n + 1;
}

static auto div2(uint32_t x, uint32_t n) -> uint32_t
{
    if (n >= 32)
        return 0; // safe guard
    return x >> n;
}

auto Module_JFA::desired_size(img::Size render_target_size) const -> img::Size
{
    // JFA needs a square texture with a size that is a power of 2
    auto size = find_smallest_power_of_2_greater_or_equal_to(std::max(render_target_size.width(), render_target_size.height()));
    size      = div2(size, _reduce_resolution.value());
    size      = smart::keep_above(1u, size);
    return {size, size};
}

void Module_JFA::imgui_windows(Ui_Ref) const
{
    ImGui::Begin("JFA");
    if (ImGui::Button("Reload shaders"))
        reload_shaders();
    ImGui::End();
}

static auto pow2(int n) -> int
{
    if (n < 0)
        return 1;
    return 1 << n;
}

void Module_JFA::render(DataToPassToShader const& data)
{
    auto const size = desired_size(data.system_values.render_target_size);
    render_target().set_size(size);
    _render_target.set_size(size);
    // TODO(JFA) when JFA is main output node it's interpreted as an image not a shape
    // TODO(JFA) seems to be a scale difference in the distance when compared to regular shapes (visible when using "Rings" effect)
    render_target().render([&]() {
        _init_shader.shader()->bind();
        _init_shader.shader()->set_uniform_texture("input_mask", modules_that_we_depend_on()[0]->texture().id);
        _init_shader.draw();
        _read_on_default_rt = true;
    });
    int jump_size = size.width() / 2;
    while (jump_size >= pow2(_glitch.value()))
    {
        auto& read_rt  = _read_on_default_rt ? render_target() : _render_target;
        auto& write_rt = _read_on_default_rt ? _render_target : render_target();

        write_rt.render([&]() {
            _one_flood_step_shader.shader()->bind();
            _one_flood_step_shader.shader()->set_uniform_texture("prev_step", read_rt.texture_ref().id, Cool::TextureSamplerDescriptor{.repeat_mode = Cool::TextureRepeatMode::Clamp, .interpolation_mode = glpp::Interpolation::NearestNeighbour});
            _one_flood_step_shader.shader()->set_uniform("resolution", size.width());
            _one_flood_step_shader.shader()->set_uniform("jump_size", jump_size);
            _one_flood_step_shader.draw();
        });

        jump_size /= 2;
        _read_on_default_rt = !_read_on_default_rt;
    }
}

auto Module_JFA::texture() const -> Cool::TextureRef
{
    return (_read_on_default_rt ? render_target() : _render_target).texture_ref();
}

} // namespace Lab
