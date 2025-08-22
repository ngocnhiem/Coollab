import React from "react"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"
import { FaDiscord, FaInstagram, FaMastodon, FaGithub } from "react-icons/fa"
import ExternalLink from "../../components/ExternalLink"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {}
        <div className={styles.top}>
          {}
          <div className={styles.brand}>
            <img
              src="/img/logo.png"
              alt="Coollab Logo"
              className={styles.logo}
            />
            <p className={styles.tagline}>
              A free, open-source generative art software
            </p>
            <div className={styles.socials}>
              <ExternalLink
                to="https://discord.com/invite/QEjqnEy4aT"
                className={styles.iconBtn}
              >
                <FaDiscord />
              </ExternalLink>
              <ExternalLink
                to="https://www.instagram.com/coollab_art"
                className={styles.iconBtn}
              >
                <FaInstagram />
              </ExternalLink>
              <ExternalLink
                to="https://mastodon.social/@Coollab"
                className={styles.iconBtn}
              >
                <FaMastodon />
              </ExternalLink>
              <ExternalLink
                to="https://github.com/Coollab-Art/Coollab"
                className={styles.iconBtn}
              >
                <FaGithub />
              </ExternalLink>
            </div>
          </div>

          {/* Liens */}
          <nav className={styles.links}>
            <div className={styles.col}>
              <h4>Explore</h4>
              <Link to="/Tutorials/Discovery/Intro">Tutorials</Link>
              <Link to="/Gallery">Gallery</Link>
              <Link to="/Contribute">Contribute</Link>
            </div>
            <div className={styles.col}>
              <h4>Community</h4>
              <ExternalLink to="https://linktr.ee/coollab_art">
                Linktree
              </ExternalLink>
              <ExternalLink to="https://github.com/Coollab-Art/Coollab/issues/new/choose">
                Report an issue
              </ExternalLink>
              <ExternalLink to="https://www.etsy.com/shop/CoollabArt">
                Merch
              </ExternalLink>
              <ExternalLink to="https://utip.io/coollab/">Donate</ExternalLink>
            </div>
          </nav>
        </div>

        {/* Ligne séparateur */}
        <div className={styles.hr} />

        {/* Bas de page */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} Coollab. Built with{" "}
            <ExternalLink to="https://docusaurus.io/">Docusaurus</ExternalLink>
          </p>
        </div>
      </div>
    </footer>
  )
}
