import React from "react"
import Layout from "@theme/Layout"
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
        </div>
      </main>
    </Layout>
  )
}
