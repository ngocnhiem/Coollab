#version 410

uniform sampler2D prev_step;

uniform int jump_size;
uniform int resolution;
// uniform float jump_size_float;

out vec4 out_Color;
layout(location = 0) in vec2 _uv;

void main()
{
    float min_dist = -1;
    vec2  min_pos  = vec2(-1, -1);
    ivec2 my_pos   = ivec2(floor(gl_FragCoord.xy));
    for (int x = -1; x <= 1; ++x)
    {
        for (int y = -1; y <= 1; ++y)
        {
            ivec2 pos = my_pos + ivec2(x, y) * jump_size;
            if (pos.x < 0 || pos.x >= resolution || pos.y < 0 || pos.y >= resolution)
                continue;

            vec4 val = texelFetch(prev_step, pos, 0);
            if (val.x < 0)
                continue;

            float closest_pos_dist = distance(val.xy, _uv);
            if (min_dist == -1 || min_dist > closest_pos_dist)
            {
                min_dist = closest_pos_dist;
                min_pos  = val.xy;
            }
        }
    }

    out_Color = vec4(min_pos, 0., 1.);
}