#include "Module_JFA.hpp"
#include <imgui.h>
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

Module_JFA::Module_JFA(std::string texture_name_in_shader, std::shared_ptr<Module> module_that_we_depend_on)
    : Module{
          fmt::format("Mask to Shape {}", module_id()),
          texture_format,
          std::move(texture_name_in_shader),
          {std::move(module_that_we_depend_on)},
          {} // We don't depend on any node
      }
    , _render_target{texture_format}

{
    reload_shaders();
}

void Module_JFA::reload_shaders() const
{
    _init_shader.compile(*Cool::File::to_string(Cool::Path::root() / "res/JFA/init.frag"));                 // TODO(JFA) handle error
    _one_flood_step_shader.compile(*Cool::File::to_string(Cool::Path::root() / "res/JFA/flood_step.frag")); // TODO(JFA) handle error
    _test_sdf.compile(*Cool::File::to_string(Cool::Path::root() / "res/JFA/test_sdf.frag"));                // TODO(JFA) handle error
}

auto Module_JFA::desired_size(img::Size /* render_target_size */) const -> img::Size
{
    return {resolution, resolution}; // TODO(JFA) find the biggest power of 2 that can contain the render target size?
}

// auto Module_JFA::texture() const -> Cool::TextureRef
// {
//     auto const b = _renders_count < 2 ? !_render_target_ping_pong : _render_target_ping_pong; // During the first frame, the previous frame texture is not init, so use the current frame texture instead
//     return (b ? _render_target : render_target()).texture_ref();
// }

void Module_JFA::imgui_windows(Ui_Ref) const
{
    ImGui::Begin("JFA");
    if (ImGui::Button("Reload shaders"))
        reload_shaders();

    ImGui::InputScalar("Resolution", ImGuiDataType_U32, &resolution);
    ImGui::InputInt("steps_count", &steps_count);
    ImGui::Checkbox("Apply sdf", &apply_test_sdf);
    ImGui::End();
}

void Module_JFA::render(DataToPassToShader const& data)
{
    render_target().set_size({resolution, resolution});
    _render_target.set_size({resolution, resolution});
    // TODO(JFA) when JFA is main output node it's interpreted as an image not a shape
    // TODO(JFA) seems to be a scale difference in the distance when compared to regular shapes (visible when using "Rings" effect)
    render_target().render([&]() {
        _init_shader.shader()->bind();
        _init_shader.shader()->set_uniform_texture("input_mask", modules_that_we_depend_on()[0]->texture().id);
        _init_shader.draw();
        _read_on_default_rt = true;
    });
    // TODO(JFA) export an "offset from right number of steps" param, because it's fun to see the duplicated images
    // TODO(JFA) expose params on the node, and rerender when they change
    int   jump_size       = resolution / 2;
    float jump_size_float = 0.5f;
    // while (jump_size > 0) //TODO(JFA)
    for (int i = 0; i < steps_count; ++i)
    {
        auto& read_rt  = _read_on_default_rt ? render_target() : _render_target;
        auto& write_rt = _read_on_default_rt ? _render_target : render_target();

        write_rt.render([&]() {
            _one_flood_step_shader.shader()->bind();
            _one_flood_step_shader.shader()->set_uniform_texture("prev_step", read_rt.texture_ref().id, Cool::TextureSamplerDescriptor{.repeat_mode = Cool::TextureRepeatMode::Clamp, .interpolation_mode = glpp::Interpolation::NearestNeighbour});
            _one_flood_step_shader.shader()->set_uniform("resolution", (int)resolution);
            _one_flood_step_shader.shader()->set_uniform("jump_size", jump_size);
            // _one_flood_step_shader.shader()->set_uniform("jump_size_float", jump_size_float);
            _one_flood_step_shader.draw();
        });

        jump_size /= 2;
        jump_size_float /= 2.f;
        _read_on_default_rt = !_read_on_default_rt;
    }

    // Test
    if (apply_test_sdf)
    {
        auto& read_rt  = _read_on_default_rt ? render_target() : _render_target;
        auto& write_rt = _read_on_default_rt ? _render_target : render_target();

        write_rt.render([&]() {
            _test_sdf.shader()->bind();
            _test_sdf.shader()->set_uniform_texture("prev_step", read_rt.texture_ref().id, Cool::TextureSamplerDescriptor{.interpolation_mode = glpp::Interpolation::NearestNeighbour});
            _test_sdf.draw();
        });

        _read_on_default_rt = !_read_on_default_rt;
    }
}

auto Module_JFA::texture() const -> Cool::TextureRef
{
    return (_read_on_default_rt ? render_target() : _render_target).texture_ref();
}

// void Module_JFA::before_module_graph_renders()
// {
//     _rerender_this_frame = _rerender_next_frame;
//     _rerender_next_frame = Module::needs_to_rerender(); // Make sure we will also render one frame after our dependencies rendered
// }

// auto Module_JFA::needs_to_rerender() const -> bool
// {
// return Module::needs_to_rerender() || _rerender_this_frame;
// }

} // namespace Lab
