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
import CenterH, { CenterText } from "../components/CenterH"
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
            Polished user experience
          </SectionTitle>
        </CenterH>
        <CenterH>
          We spend (way too much) time on fixing all the small bugs, and making
          the experience as comfortable and intuitive as possible
        </CenterH>
        <Spacer height="2.4rem" />
        <CenterH>
          <Image
            src="img/demo.webp"
            style={{ width: "70%", borderRadius: "var(--radius-mid)" }}
            noSmall
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
        <CenterH>
          VJ, interactive installations, <i>etc.</i>
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
        <CenterText style={{ maxWidth: "60%" }}>
          You own the software, forever
        </CenterText>
        <Spacer height="2.4rem" />
        <CenterH>
          <Image
            src="img/team.jpg"
            style={{
              width: "65%",
              borderRadius: "var(--radius-mid)",
            }}
            noSmall
          ></Image>
        </CenterH>
        <CenterText style={{ maxWidth: "60%" }}>
          <i style={{ fontSize: "12px" }}>
            NB: No, the core team isn't that big. There is only one "full-time"
            developer, the others did punctual missions that lasted a couple of
            months
          </i>
        </CenterText>
        <Spacer height="5rem" />
        <CenterH>
          <SectionTitle fontSize="2.5rem" mobileFontSize="1.7rem">
            Create custom nodes
          </SectionTitle>
        </CenterH>
        <CenterH>
          Write just a few lines of GLSL, and enjoy Coollab's implicit
          conversions and default renderers!
        </CenterH>
        <CenterH>
          <LinkInternal to="/Tutorials/Writing%20Nodes/Intro">
            Here is the complete tutorial
          </LinkInternal>
        </CenterH>
        <Spacer height="2.4rem" />
        <CenterH>
          <Image
            src="img/custom-nodes.webp"
            style={{
              width: "70%",
              borderRadius: "var(--radius-mid)",
            }}
            noSmall
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
        <Spacer height="2.4rem" />
      </main>
    </Layout>
  )
}
