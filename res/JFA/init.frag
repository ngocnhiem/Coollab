#version 410

uniform sampler2D input_mask;

out vec4 out_Color;
layout(location = 0) in vec2 _uv;

void main()
{
    float val = texture(input_mask, _uv).r;
    out_Color = val < 0.5
                    ? vec4(-1)
                    : vec4(_uv, 0., 1.);
}