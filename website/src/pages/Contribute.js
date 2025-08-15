import React from "react"
import Layout from "@theme/Layout"
import Contribute from "../components/Contribute"
import Contributors from "../components/Contributors"
import styles from "../components/Contribute.module.css"

export default function ContributePage() {
  return (
    <Layout
      title="Contribute to Coollab"
      description="How to help Coollab grow."
    >
      <main className="contributeWrapper">
        {/* Left: Background video */}
        <div className="contributeVideo">
          <img src="/img/demo-vertical.png"></img>
        </div>
        {/* Right: Contribute Section */}
        <div className="contributeContent">
          <div className={styles.contributeSection}>
            <h2 className={styles.title}>How to contribute:</h2>
            <Contribute />
          </div>
        </div>
      </main>
      <div className="contributorsSection">
        <h2 className="title">Contributors</h2>
        <p>
          This project was initiated by{" "}
          <a
            href="https://julesfouchy.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jules Fouchy
          </a>{" "}
          and made possible by all our lovely contributors:
        </p>
        <Contributors />
      </div>
    </Layout>
  )
}
