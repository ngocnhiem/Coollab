#version 410

uniform sampler2D prev_step;

out vec4 out_Color;
layout(location = 0) in vec2 _uv;

void main()
{
    float dist = distance(_uv, texture(prev_step, _uv).xy);

    float t = pow(max(dist / 0.1, 0.) + 1., -1. / 0.200000002980232);

    out_Color = vec4(t, t, t, 1.);
}