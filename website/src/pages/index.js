import React from "react"
import Layout from "@theme/Layout"
import styles from "./index.module.css"
import FeaturesList from "../components/FeaturesList"
import Timeline from "../components/Timeline"
import GalleryPreview from "../components/GalleryPreview"
import YoutubeVideo from "../components/YoutubeVideo"
import ArgumentsCards from "../components/ArgumentsCards"
import Hero from "../components/Hero"
import SocialNetworksBigButtons from "../components/SocialNetworksBigButtons"

export default function Home() {
  return (
    <Layout title="" description="Node-based creation for everyone">
      <Hero />
      <section className={styles.section}>
        <div className={styles.cardSection}>
          <ArgumentsCards />
          <FeaturesList />
        </div>
        {/* Trailer */}
        <YoutubeVideo id="jsjkjCQCPno" />
      </section>
      <Timeline />
      <div className={styles.followSection}>
        <h2 className={styles.sectionTitle}>Follow us</h2>
        <SocialNetworksBigButtons />
      </div>
      <GalleryPreview />
    </Layout>
  )
}
