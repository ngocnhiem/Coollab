import React from "react"
import style from "./Download.module.css"
import Layout from "@theme/Layout"
import DownloadButtons from "../components/DownloadButtons"
import SectionTitle from "../components/SectionTitle"
import Spacer from "../components/Spacer"
import DonateButton from "../components/DonateButton"
import JoinDiscordButton from "../components/JoinDiscordButton"
import { MobileOnly } from "../components/Responsive"

export default function DownloadPage() {
  return (
    <Layout
      title="Download"
      description="Install Coollab for Windows, Linux or MacOS"
      image="/img/page-download.webp"
    >
      <div className={style.downloadWrapper}>
        {/* Left: Background image */}
        <div className={style.downloadImage}>
          <img src="/img/download.jpg"></img>
        </div>

        {/* Right: Download Section */}
        <main className={style.downloadContent}>
          <MobileOnly>
            <Spacer height="1.2rem" />
          </MobileOnly>
          <SectionTitle fontSize="3.5rem" mobileFontSize="2.5rem">
            Install Coollab
          </SectionTitle>
          <Spacer height="2.4rem" />
          <DownloadButtons />
          <Spacer height="0.8rem" />
          <div style={{ width: "fit-content" }} className={style.extraButtons}>
            <DonateButton />
            <JoinDiscordButton />
          </div>
        </main>
      </div>
    </Layout>
  )
}
