#pragma once
#include "Cool/Gpu/FullscreenPipeline.h"
#include "Module/Module.h"
#include "Module/ModuleDependencies.h"

namespace Lab {
class Module_JFA : public Module {
public:
    Module_JFA() = default;
    Module_JFA(std::string texture_name_in_shader, std::shared_ptr<Module> module_that_we_depend_on);

    // void               on_time_reset() override;
    // auto               texture() const -> Cool::TextureRef override;
    // [[nodiscard]] auto needs_to_rerender() const -> bool override;
    // void               before_module_graph_renders() override;

    void imgui_windows(Ui_Ref) const override;
    auto texture() const -> Cool::TextureRef override;

private:
    void render(DataToPassToShader const&) override;

    void reload_shaders() const;

private:
    // Cool::RenderTarget _render_target{};
    // bool               _render_target_ping_pong{false};
    // int                _renders_count{0};
    // bool               _rerender_next_frame{false};
    // bool               _rerender_this_frame{false};

    mutable Cool::FullscreenPipeline _init_shader;
    mutable Cool::FullscreenPipeline _one_flood_step_shader;
    mutable Cool::FullscreenPipeline _test_sdf;
    Cool::RenderTarget               _render_target{};
    bool                             _read_on_default_rt{false};

    mutable uint32_t resolution{1024};
    mutable int      steps_count{10};
    mutable bool     apply_test_sdf{false};

private:
    // Serialization
    friend class ser20::access;
    template<class Archive>
    void serialize(Archive& archive)
    {
        archive(
            ser20::make_nvp("Base Module", ser20::base_class<Module>(this))
        );
    }
};

} // namespace Lab
