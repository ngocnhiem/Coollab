#version 410

uniform sampler2D input_mask;

out vec4 out_Color;
layout(location = 0) in vec2 _uv;

uniform mat3 _camera2D_transform;

uniform float _aspect_ratio;

vec2 normalize_uv_with_aspect_ratio(vec2 uv, float aspect_ratio)
{
    uv -= 0.5;
    uv.x *= aspect_ratio;
    return uv * 2.;
}

vec2 normalize_uv(vec2 uv)
{
    return normalize_uv_with_aspect_ratio(uv, _aspect_ratio);
}

vec2 apply_cam2D(vec2 uv)
{
    vec3 p = _camera2D_transform * vec3(uv, 1.);
    return p.xy / p.z;
}

void main()
{
    float val           = texture(input_mask, _uv).r;
    vec2  uv_normalized = apply_cam2D(normalize_uv(_uv));
    // out_Color = val < 0.5
    //                 ? vec4(-1)
    //                 : vec4(_uv, 0., 1.);
    if (val < 0.5)
        out_Color = vec4(-9999, -9999, uv_normalized); // Don't use -1 because it's the coordinate of the bottom-lef corner when we normalize uvs
    else
        out_Color = vec4(uv_normalized, -9999, -9999);
}