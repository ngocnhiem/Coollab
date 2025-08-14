import React from "react"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"
import { FaDiscord, FaInstagram, FaMastodon, FaGithub } from "react-icons/fa"

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
              <a
                href="https://discord.com/invite/QEjqnEy4aT"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconBtn}
              >
                <FaDiscord />
              </a>
              <a
                href="https://www.instagram.com/coollab_art"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconBtn}
              >
                <FaInstagram />
              </a>
              <a
                href="https://mastodon.social/@Coollab"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconBtn}
              >
                <FaMastodon />
              </a>
              <a
                href="https://github.com/Coollab-Art/Coollab"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconBtn}
              >
                <FaGithub />
              </a>
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
              <a
                href="https://linktr.ee/coollab_art"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linktree
              </a>
              <a
                href="https://github.com/Coollab-Art/Coollab/issues/new/choose"
                target="_blank"
                rel="noopener noreferrer"
              >
                Report an issue
              </a>
              <a
                href="https://www.etsy.com/shop/CoollabArt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Merch
              </a>
              <a
                href="https://utip.io/coollab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </div>
          </nav>
        </div>

        {/* Ligne séparateur */}
        <div className={styles.hr} />

        {/* Bas de page */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} Coollab. Built with{" "}
            <a
              href="https://docusaurus.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docusaurus
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
