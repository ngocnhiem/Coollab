#version 410

uniform sampler2D closest_uv_tex;

out vec4 out_Color;
layout(location = 0) in vec2 _uv;

uniform mat3  _camera2D_transform;
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

float antialiased_step(float x)
{
    float m = 0.75 * fwidth(x);
    return smoothstep(m, -m, x);
}

void main()
{
    vec4 tex = texture(closest_uv_tex, _uv);

    vec2 uv_normalized = apply_cam2D(normalize_uv(_uv));

    float dist1 = distance(uv_normalized, tex.xy);
    float dist2 = distance(uv_normalized, tex.zw);
    // One of either dist1 or dist2 is 0
    float dist = dist1 < dist2 ? -dist2 : dist1;

    float t   = antialiased_step(dist);
    out_Color = vec4(t, t, t, t);
}