import React from "react"
import Layout from "@theme/Layout"
import ContributeCards from "../components/ContributeCards"
import ContributorsList from "../components/ContributorsList"
import style from "./Contribute.module.css"
import LinkExternal from "../components/LinkExternal"
import SectionTitle from "../components/SectionTitle"
import Spacer from "../components/Spacer"

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
          <div className={style.contributeSection}>
            <SectionTitle fontSize="3.5rem">How to contribute:</SectionTitle>
            <Spacer height="2rem"></Spacer>
            <ContributeCards />
          </div>
        </div>
      </main>
      <div className="contributorsSection">
        <SectionTitle fontSize="3rem">Contributors</SectionTitle>
        <Spacer height="2rem"></Spacer>
        <p>
          This project was initiated by{" "}
          <LinkExternal to="https://julesfouchy.github.io/">
            Jules Fouchy
          </LinkExternal>{" "}
          and made possible by all our lovely contributors:
        </p>
        <ContributorsList />
      </div>
    </Layout>
  )
}
