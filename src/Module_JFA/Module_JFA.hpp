#pragma once
#include "Cool/Dependencies/SharedVariable.h"
#include "Cool/Gpu/FullscreenPipeline.h"
#include "Module/Module.h"
#include "Module/ModuleDependencies.h"

namespace Lab {
class Module_JFA : public Module {
public:
    Module_JFA() = default;
    Module_JFA(
        std::string               texture_name_in_shader,
        std::shared_ptr<Module>   module_that_we_depend_on,
        Cool::SharedVariable<int> glitch,
        Cool::SharedVariable<int> custom_resolution
    );

    auto texture() const -> Cool::TextureRef override;
    auto desired_size(img::Size render_target_size) const -> img::Size override;

    void set_is_main_module() { _is_main_module = true; }

private:
    void render(DataToPassToShader const&) override;
    auto desired_intermediate_size(img::Size render_target_size) const -> img::Size;

private:
    Cool::RenderTarget        _render_target{{}}; // NB: this format is not used anyways, it's only for the default constructor for serialization, but it will be overwritten by the proper constructor
    bool                      _read_on_default_rt{false};
    Cool::SharedVariable<int> _glitch;
    Cool::SharedVariable<int> _custom_resolution;
    bool                      _is_main_module{false}; // HACK to show a proper image and not the uv map when this is the main module of the graph

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
