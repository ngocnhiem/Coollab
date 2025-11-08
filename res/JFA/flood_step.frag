#version 410

uniform sampler2D prev_step;

uniform int  jump_size;
uniform uint resolution;

out vec4 out_Color;
layout(location = 0) in vec2 _uv;

// xy stores the wip distance to the inside of the shape
// and zw for the outside of the shape (so we also compute the interior distance)

void main()
{
    vec2 min_pos1 = vec2(-9999, -9999);
    vec2 min_pos2 = vec2(-9999, -9999);
    {
        float min_dist1 = -9999;
        float min_dist2 = -9999;
        ivec2 my_pos    = ivec2(floor(gl_FragCoord.xy));
        for (int x = -1; x <= 1; ++x)
        {
            for (int y = -1; y <= 1; ++y)
            {
                ivec2 pos = my_pos + ivec2(x, y) * jump_size;
                if (pos.x < 0 || pos.x >= resolution || pos.y < 0 || pos.y >= resolution)
                    continue;

                vec4 val = texelFetch(prev_step, pos, 0);
                if (val.x != -9999)
                {
                    float closest_pos_dist = distance(val.xy, _uv);
                    if (min_dist1 == -9999 || min_dist1 > closest_pos_dist)
                    {
                        min_dist1 = closest_pos_dist;
                        min_pos1  = val.xy;
                    }
                }
                if (val.z != -9999)
                {
                    float closest_pos_dist = distance(val.zw, _uv);
                    if (min_dist2 == -9999 || min_dist2 > closest_pos_dist)
                    {
                        min_dist2 = closest_pos_dist;
                        min_pos2  = val.zw;
                    }
                }
            }
        }
    }

    out_Color = vec4(min_pos1, min_pos2);
}