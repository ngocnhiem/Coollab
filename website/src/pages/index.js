import React from "react"
import Layout from "@theme/Layout"
import Head from "@docusaurus/Head"
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
import style from "./index.module.css"
import { DesktopOnly } from "../components/Responsive"

export default function Home() {
  return (
    <Layout title="" description="Generative visuals for everyone">
      <Head>
        <link rel="preload" as="image" href="/img/hero.jpg" />
      </Head>
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
        <DesktopOnly>
          <CenterText className={style.wideText}>
            We spend (way too much) time on fixing all the small bugs, and
            making the experience as comfortable and intuitive as possible
          </CenterText>
        </DesktopOnly>
        <Spacer height="2.4rem" />
        <CenterH>
          <Image
            src="img/demo.webp"
            style={{ borderRadius: "var(--radius-mid)" }}
            className={style.wideImage}
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
        <DesktopOnly>
          <CenterText className={style.wideText}>
            High-level presets or low-level tools, for you to combine
          </CenterText>
        </DesktopOnly>
        <Spacer height="2.4rem" />
        <CenterH>
          <ImageGrid
            style={{
              borderRadius: "var(--radius-mid)",
            }}
            className={style.wideImage}
          />
        </CenterH>
        {/*  */}
        <Spacer height="5rem" />{" "}
        <CenterH>
          <SectionTitle fontSize="2.5rem" mobileFontSize="1.7rem">
            Create stunning animations
          </SectionTitle>
        </CenterH>
        <Spacer height="2.4rem"></Spacer>
        <CenterH>
          <div
            style={{
              borderRadius: "var(--radius-mid)",
              overflow: "hidden",
            }}
            className={style.wideImage}
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
        <DesktopOnly>
          <CenterText className={style.wideText}>
            VJ, interactive installations, <i>etc.</i>
          </CenterText>
        </DesktopOnly>
        <Spacer height="2.4rem" />
        <LiveVisualsCards />
        {/*  */}
        <Spacer height="5rem" />
        <CenterH>
          <SectionTitle fontSize="2.5rem" mobileFontSize="1.7rem">
            Free and open-source
          </SectionTitle>
        </CenterH>
        <DesktopOnly>
          <CenterText className={style.wideTextSmaller}>
            You own the software, forever
          </CenterText>
        </DesktopOnly>
        <Spacer height="2.4rem" />
        <CenterH>
          <Image
            src="img/team.jpg"
            style={{ borderRadius: "var(--radius-mid)" }}
            className={style.wideImageSmaller}
            noSmall
          ></Image>
        </CenterH>
        <DesktopOnly>
          <CenterText className={style.wideTextSmaller}>
            <i style={{ fontSize: "12px" }}>
              NB: No, the core team isn't that big. There is only one
              "full-time" developer, the others did punctual missions that
              lasted a couple of months
            </i>
          </CenterText>
        </DesktopOnly>
        <Spacer height="5rem" />
        <CenterH>
          <SectionTitle fontSize="2.5rem" mobileFontSize="1.7rem">
            Create custom nodes
          </SectionTitle>
        </CenterH>
        <DesktopOnly>
          <CenterText className={style.wideText}>
            Write just a few lines of GLSL, and enjoy Coollab's implicit
            conversions and default renderers!
          </CenterText>
        </DesktopOnly>
        <CenterH>
          <LinkInternal to="/Tutorials/Writing%20Nodes/Intro">
            Here is the tutorial
          </LinkInternal>
        </CenterH>
        <Spacer height="2.4rem" />
        <CenterH>
          <Image
            src="img/custom-nodes.webp"
            style={{ borderRadius: "var(--radius-mid)" }}
            className={style.wideImage}
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
        <Spacer height="5rem" />
        <CenterH>
          <div
            style={{
              borderRadius: "var(--radius-mid)",
              overflow: "hidden",
            }}
            className={style.wideImage}
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
