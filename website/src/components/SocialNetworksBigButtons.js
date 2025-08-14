import React from "react"
import styles from "../pages/index.module.css"
import Link from "@docusaurus/Link"
import { FaInstagram, FaDiscord, FaMastodon } from "react-icons/fa"

export default function SocialNetworksBigButtons() {
  return (
    <div className={styles.followButtons}>
      <a
        className={`${styles.secondaryBtn} ${styles.osButton}`}
        href="https://www.instagram.com/coollab_art"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className={styles.icon} /> Instagram
      </a>
      <a
        className={`${styles.secondaryBtn} ${styles.osButton}`}
        href="https://discord.com/invite/QEjqnEy4aT"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDiscord className={styles.icon} /> Discord
      </a>
      <a
        className={`${styles.secondaryBtn} ${styles.osButton}`}
        href="https://mastodon.social/@Coollab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMastodon className={styles.icon} /> Mastodon
      </a>
    </div>
  )
}
