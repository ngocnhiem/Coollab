import React from "react"
import style from "./Download.module.css"
import Layout from "@theme/Layout"
import DownloadButtons from "../components/DownloadButtons"
import SectionTitle from "../components/SectionTitle"
import Spacer from "../components/Spacer"
import DonateButton from "../components/DonateButton"
import JoinDiscordButton from "../components/JoinDiscordButton"

export default function DownloadPage() {
  return (
    <Layout
      title="Download"
      description="Install Coollab for Windows, Linux or MacOS"
    >
      <div className={style.downloadWrapper}>
        {/* Left: Background image */}
        <div className={style.downloadImage}>
          <img src="/img/download.png"></img>
        </div>

        {/* Right: Download Section */}
        <main className={style.downloadContent}>
          <SectionTitle fontSize="3.5rem" mobileFontSize="2.5rem">
            Install Coollab
          </SectionTitle>
          <Spacer height="2.4rem" />
          <DownloadButtons />
          <Spacer height="0.8rem" />
          <div style={{ width: "fit-content" }}>
            <DonateButton />
            <Spacer height="1.2rem" />
            <JoinDiscordButton />
          </div>
        </main>
      </div>
    </Layout>
  )
}
