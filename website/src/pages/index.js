import React from "react"
import Layout from "@theme/Layout"
import Spacer from "../components/Spacer"
import Timeline from "../components/Timeline"
import GalleryPreview from "../components/GalleryPreview"
import YoutubeVideo from "../components/YoutubeVideo"
import LiveVisualsCards from "../components/LiveVisualsCards"
import Hero from "../components/Hero"
import SocialsBigButtons from "../components/SocialsBigButtons"
import SectionTitle from "../components/SectionTitle"
import CenterH from "../components/CenterH"
import ImageGrid from "../components/ImageGrid"
import Image from "../components/Image"
import LinkInternal from "../components/LinkInternal"

export default function Home() {
  return (
    <Layout title="" description="Generative visuals for everyone">
      <main>
        <Hero />
        <Spacer height="5rem" />
        <CenterH>
          <SectionTitle fontSize="2.5rem" mobileFontSize="1.7rem">
            Intuitive and Easy to learn
          </SectionTitle>
        </CenterH>
        <Spacer height="2.4rem" />
        <CenterH>
          <Timeline />
        </CenterH>
        {/*  */}
        <Spacer height="5rem" />
        <CenterH>
          <SectionTitle fontSize="2.5rem" mobileFontSize="1.7rem">
            Polished user experience, Modern UI
          </SectionTitle>
        </CenterH>
        <CenterH>
          We spend (way too much) time on fixing all the small bugs, and making
          the experience as comfortable and intuitive as possible
        </CenterH>
        <Spacer height="2.4rem" />
        <CenterH>
          <Image
            src="img/demo3.png"
            noSmall
            style={{ width: "70%", borderRadius: "var(--radius-mid)" }}
          ></Image>
        </CenterH>
        {/*  */}
        <Spacer height="5rem" />
        <CenterH>
          <SectionTitle fontSize="2.5rem" mobileFontSize="1.7rem">
            Tons of effects
          </SectionTitle>
        </CenterH>
        <CenterH>
          High-level presets or low-level tools, for you to combine
        </CenterH>
        <Spacer height="2.4rem" />
        <CenterH>
          <ImageGrid
            style={{
              width: "70%",
              borderRadius: "var(--radius-mid)",
            }}
          />
        </CenterH>
        {/*  */}
        <Spacer height="5rem" />{" "}
        <CenterH>
          <SectionTitle fontSize="2.5rem" mobileFontSize="1.7rem">
            Create stunning animations{" "}
          </SectionTitle>
        </CenterH>
        <Spacer height="2.4rem"></Spacer>
        <CenterH>
          <div
            style={{
              width: "70%",
              borderRadius: "var(--radius-mid)",
              overflow: "hidden",
            }}
          >
        <YoutubeVideo /* Trailer */ id="jsjkjCQCPno" />
          </div>
        </CenterH>
        {/*  */}
        <Spacer height="5rem" />
        <CenterH>
          <SectionTitle fontSize="2.5rem" mobileFontSize="1.7rem">
            Or live visuals
          </SectionTitle>
        </CenterH>
        {/* <CenterH>Webcam, audio-reaction, midi, osc</CenterH> */}
        <Spacer height="2.4rem" />
        <LiveVisualsCards />
        {/*  */}
        <Spacer height="5rem" />
        {/* <SectionTitle fontSize="2.5rem" mobileFontSize="1.7rem">
          Interactivity, Protocols
        </SectionTitle>
        <Spacer height="2.4rem"/>
        OSC, Midi,Spout */}
        <CenterH>
          <SectionTitle fontSize="2.5rem" mobileFontSize="1.7rem">
            Free and open-source
          </SectionTitle>
        </CenterH>
        <Spacer height="2.4rem" />
        <CenterH>
          <Image
            src="img/team.jpg"
            noSmall
            style={{
              width: "65%" /* "60%" */,
              borderRadius: "var(--radius-mid)",
            }}
          ></Image>
        </CenterH>
        <CenterH>
          <caption>
            ⬆ This is a ✨<span class="gradient-text">HAPPY</span>✨ picture of
            some of the contributors ⬆
          </caption>
        </CenterH>
        <Spacer height="5rem" />
        <CenterH>
          <SectionTitle fontSize="2.5rem" mobileFontSize="1.7rem">
            Create custom nodes
          </SectionTitle>
        </CenterH>
        <CenterH>
          Write just a few lines of GLSL, and enjoy Coollab's implicit
          conversions and default renderers
        </CenterH>
        <CenterH>
          <LinkInternal to="/Tutorials/Writing%20Nodes/Intro">
            Here is the complete tutorial
          </LinkInternal>
        </CenterH>
        <Spacer height="2.4rem" />
        <CenterH>
          <Image
            src="img/custom-nodes.png"
            noSmall
            style={{
              width: "65%" /* "60%" */,
              borderRadius: "var(--radius-mid)",
            }}
          ></Image>
        </CenterH>
        <Spacer height="5rem" />
        <CenterH>
          <SectionTitle fontSize="2.5rem" mobileFontSize="1.7rem">
            Follow us
          </SectionTitle>
        </CenterH>
        <Spacer height="2.4rem" />
        <SocialsBigButtons />
        {/*  */}
        <Spacer height="5rem" />
        {/* TODO(Website) showing only 3D images is bad because this is not our focus */}
        {/* Maybe do a section "Focused on 2D, but with some 3D effects?" */}
        <GalleryPreview />
        {/*  */}
        <Spacer height="5rem" />{" "}
        <CenterH>
          <div
            style={{
              width: "70%",
              borderRadius: "var(--radius-mid)",
              overflow: "hidden",
            }}
          >
        <YoutubeVideo /* What is Coollab? */ id="nkKj_MTBBRI" />
          </div>
        </CenterH>
        {/*  */}
        <Spacer height="5rem" />
      </main>
    </Layout>
  )
}
