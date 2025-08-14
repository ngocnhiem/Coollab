import React from "react"
import Layout from "@theme/Layout"
import Contribute from "../components/Contribute"
import Contributors from "../components/Contributors"

export default function ContributePage() {
  return (
    <Layout
      title="Contribute to Coollab"
      description="How to help Coollab grow."
    >
      <Contribute />
      <p>
        This project was initiated by{" "}
        <a href="https://julesfouchy.github.io/" target="_blank">
          Jules Fouchy
        </a>{" "}
        and made possible by all our lovely contributors:
      </p>
      <Contributors />
    </Layout>
  )
}
