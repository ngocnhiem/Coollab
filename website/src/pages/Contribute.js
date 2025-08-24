import React from "react"
import Layout from "@theme/Layout"
import ContributeCards from "../components/ContributeCards"
import ContributorsList from "../components/ContributorsList"
import styles from "../components/ContributeCards.module.css"
import ExternalLink from "../components/ExternalLink"

export default function ContributePage() {
  return (
    <Layout
      title="Contribute"
      description="Want to join the adventure? Here is how you can contribute to Coollab"
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
            <ContributeCards />
          </div>
        </div>
      </main>
      <div className="contributorsSection">
        <h2 className="title">Contributors</h2>
        <p>
          This project was initiated by{" "}
          <ExternalLink to="https://julesfouchy.github.io/">
            Jules Fouchy
          </ExternalLink>{" "}
          and made possible by all our lovely contributors:
        </p>
        <ContributorsList />
      </div>
    </Layout>
  )
}
