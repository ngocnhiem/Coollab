import React from "react"
import Layout from "@theme/Layout"
import styles from "../css/custom.css"
import DownloadButtons from "../components/DownloadButtons"

export default function DownloadPage() {
  return (
    <Layout
      title="Download Coollab"
      description="Download Coollab for your platform."
    >
      <main className="downloadWrapper">
        {/* Left: Background video */}
        <div className="downloadVideo">
          <img src="/img/demo-vertical.png"></img>
        </div>

        {/* Right: OS Section */}
        <div className="downloadContent">
          <h1 className="sectionTitle">Install Coollab</h1>
          <p></p>
          <DownloadButtons />
          <p className="osSubtitle">
            This software uses code of{" "}
            <a
              href="https://ffmpeg.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FFmpeg
            </a>{" "}
            licensed under the{" "}
            <a
              href="https://www.gnu.org/licenses/gpl-3.0.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              GPLv3.0
            </a>{" "}
            and its source can be downloaded{" "}
            <a
              href="https://github.com/Coollab-Art/Coollab"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>
      </main>
    </Layout>
  )
}
