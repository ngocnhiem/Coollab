import React from "react"
import Layout from "@theme/Layout"
import styles from "./index.module.css"
import styles2 from "../components/IntroductionShowcase.module.css"
import styles3 from "../components/GalleryPreview.module.css"
import FeaturesList from "../components/FeaturesList"
import Timeline from "../components/Timeline"
import GalleryPreview from "../components/GalleryPreview"
import Link from "@docusaurus/Link"
import YoutubeVideo from "../components/YoutubeVideo"
import ArgumentsCards from "../components/ArgumentsCards"
import DownloadButton from "../components/DownloadButton"
import DownloadButtons from "../components/DownloadButtons"
import SocialNetworksBigButtons from "../components/SocialNetworksBigButtons"

export default function Home() {
  return (
    <Layout title="Coollab" description="Open-source generative-art software">
      <main className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Coollab</h1>
          <p className={styles.heroSubtitle}>
            A node-based software to create visual effects and generative-art
          </p>
        </div>
      </main>
      <section className={styles2.section}>
        <div className={styles2.svgTop}>
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 1440 401"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M928.556 199.183C1105.36 242.709 1389.58 122.585 1448 0.314806L1448 400.396L-24.9539 400.396L-37.3233 237.364C-19.8954 220.33 52.2068 157.038 123.937 195.043C231.559 252.064 349.098 287.775 485.829 232.773C622.559 177.771 696.571 142.069 928.556 199.183Z"
              fill="#27272A"
            />
          </svg>
        </div>

        <div className={styles2.cardSection}>
          <ArgumentsCards />
          <FeaturesList />
          {/* <DownloadButton /> */}
        </div>
        {/* Trailer */}
        <YoutubeVideo id="jsjkjCQCPno" />
      </section>
      <Timeline />
      <div className={styles.followSection}>
        <h2 className={styles.sectionTitle}>Follow us</h2>
        <SocialNetworksBigButtons />
      </div>
      {/* <Timeline /> */}
      {/* <div className={styles.osSection}>
        <h2 className={styles.sectionTitle}>Get Coollab now</h2>
        <p></p>
        <DownloadButton />
      </div> */}
      <GalleryPreview />
      {/* <div className={styles3.buttonWrapper}>
        <a
          href="https://www.instagram.com/coollab_art/"
          target="_blank"
          className={styles3.secondaryBtn}
        >
          See more
        </a>
      </div> */}
    </Layout>
  )
}
