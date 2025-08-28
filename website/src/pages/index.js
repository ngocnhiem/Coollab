import React from "react"
import Layout from "@theme/Layout"
import Spacer from "../components/Spacer"
import FeaturesList from "../components/FeaturesList"
import Timeline from "../components/Timeline"
import GalleryPreview from "../components/GalleryPreview"
import YoutubeVideo from "../components/YoutubeVideo"
import ArgumentsCards from "../components/ArgumentsCards"
import Hero from "../components/Hero"
import SocialsBigButtons from "../components/SocialsBigButtons"
import SectionTitle from "../components/SectionTitle"

export default function Home() {
  return (
    <Layout title="" description="Node-based creation for everyone">
      <Hero />
      <Spacer height="5rem" />
      <ArgumentsCards />
      <Spacer height="5rem" />
      <FeaturesList />
      <Spacer height="5rem" />
      <YoutubeVideo /* Trailer */ id="jsjkjCQCPno" />
      <Spacer height="5rem" />
      <Timeline />
      <Spacer height="5rem" />
      <div style={{ textAlign: "center" }}>
        <SectionTitle fontSize="2.5rem">Follow us</SectionTitle>
        <Spacer height="2.4rem"></Spacer>
        <SocialsBigButtons />
      </div>
      <Spacer height="5rem" />
      <GalleryPreview />
      <Spacer height="5rem" />
      <YoutubeVideo /* What is Coollab? */ id="nkKj_MTBBRI" />
      <Spacer height="5rem" />
    </Layout>
  )
}
