import React from "react"
import style from "./index.module.css"
import Layout from "@theme/Layout"
import FeaturesList from "../components/FeaturesList"
import Timeline from "../components/Timeline"
import GalleryPreview from "../components/GalleryPreview"
import YoutubeVideo from "../components/YoutubeVideo"
import ArgumentsCards from "../components/ArgumentsCards"
import Hero from "../components/Hero"
import SocialNetworksBigButtons from "../components/SocialNetworksBigButtons"
import Spacer from "../components/Spacer"

export default function Home() {
  return (
    <Layout title="" description="Node-based creation for everyone">
      <Hero />
      <Spacer height="4rem" />
      <ArgumentsCards />
      <Spacer height="4rem" />
      <FeaturesList />
      <Spacer height="4rem" />
      <YoutubeVideo /* Trailer */ id="jsjkjCQCPno" />
      <Spacer height="4rem" />
      <Timeline />
      <Spacer height="4rem" />
      <div className={style.followSection}>
        <h2 className={style.sectionTitle}>Follow us</h2>
        <SocialNetworksBigButtons />
      </div>
      <Spacer height="4rem" />
      <GalleryPreview />
      <Spacer height="4rem" />
      <YoutubeVideo /* What is Coollab? */ id="nkKj_MTBBRI" />
      <Spacer height="4rem" />
    </Layout>
  )
}
