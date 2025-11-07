#pragma once
#include "Module/ShaderBased/DataToGenerateShaderCode.hpp"
#include "Nodes/MaybeGenerateModule.h"

namespace Lab {

auto generate_simulation_shader_code(
    Cool::NodeId const& root_node_id,
    Cool::NodeId&       id_of_node_storing_particles_count,
    int                 dimension,
    DataToGenerateShaderCode const&,
    MaybeGenerateModule const&,
    std::function<std::vector<std::string>()> const& get_module_textures_names
) -> tl::expected<std::string, std::string>;

} // namespace Lab
