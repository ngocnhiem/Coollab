#pragma once
#include <Nodes/NodeDefinition.h>
#include <optional>
#include "Cool/Nodes/NodeId.h"

namespace Lab {

struct ImageTextureName {
    std::string name;
};
struct ShapeTextureName {
    std::string name;
};
struct None {};

using MaybeTextureName = std::variant<ImageTextureName, ShapeTextureName, None>;

/// Called for each node.
/// Returns a string iff a new module has been generated and gen_desired_function() should stop traversing the graph and instead read the image resulting from the new module from a texture
/// (the name of the texture is the name returned by the function).
using MaybeGenerateModule = std::function<MaybeTextureName(Cool::NodeId const&, NodeDefinition const&)>;

} // namespace Lab