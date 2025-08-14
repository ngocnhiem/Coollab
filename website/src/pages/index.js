import React from "react"
import Layout from "@theme/Layout"
import styles from "./index.module.css"
import styles2 from "../components/IntroductionShowcase.module.css"
import FeaturesList from "../components/FeaturesList"
import Timeline from "../components/Timeline"
import GalleryPreview from "../components/GalleryPreview"
import { FaInstagram, FaDiscord, FaMastodon } from "react-icons/fa"
import Link from "@docusaurus/Link"
import YoutubeVideo from "../components/YoutubeVideo"
import ArgumentsCards from "../components/ArgumentsCards"
import DownloadButton from "../components/DownloadButton"
import DownloadButtons from "../components/DownloadButtons"

export default function Home() {
  return (
    <Layout title="Coollab" description="Open-source generative-art software">
      <main className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Coollab</h1>
          <p className={styles.heroSubtitle}>
            The coolest open-source generative art software
          </p>
          <Link className={styles.secondaryBtn} to="/Tutorials/Discovery/Intro">
            Get started
          </Link>
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

        <div className={styles2.content}>
          <h2 className={styles2.sectionTitle}>
            The friendly and powerful alternative to TouchDesigner
          </h2>
          <p className={styles2.sectionSubtitle}>
            One shape and your creativity is all you need.
          </p>

          {/* Trailer */}
          <YoutubeVideo id="jsjkjCQCPno" />

          <div className={styles2.cardSection}>
            <h2 className={styles2.sectionTitle}>
              Coollab, the software you’ve been looking for
            </h2>

            <ArgumentsCards />
            <DownloadButton />
          </div>

          <YoutubeVideo id="jsjkjCQCPno" />
        </div>
      </section>
      <div className={styles.followSection}>
        <h2 className={styles.sectionTitle}>Follow us</h2>
        <div className={styles.followButtons}>
          <a
            className={`${styles.secondaryBtn} ${styles.osButton}`}
            href="https://www.instagram.com/coollab_art"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.icon} /> Instagram
          </a>
          <a
            className={`${styles.secondaryBtn} ${styles.osButton}`}
            href="https://discord.com/invite/QEjqnEy4aT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className={styles.icon} /> Discord
          </a>
          <a
            className={`${styles.secondaryBtn} ${styles.osButton}`}
            href="https://mastodon.social/@Coollab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMastodon className={styles.icon} /> Mastodon
          </a>
        </div>
      </div>
      <FeaturesList />
      <Timeline />
      <div className={styles.osSection}>
        <h2 className={styles.sectionTitle}>Get Coollab now</h2>
        <DownloadButtons />
      </div>
      <GalleryPreview />
    </Layout>
  )
}
