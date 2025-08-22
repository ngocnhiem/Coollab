import React from "react"
import styles from "../pages/index.module.css"
import Link from "@docusaurus/Link"
import { FaInstagram, FaDiscord, FaMastodon } from "react-icons/fa"
import ExternalLink from "./ExternalLink"

export default function SocialNetworksBigButtons() {
  return (
    <div className={styles.followButtons}>
      <ExternalLink
        className={`${styles.secondaryBtn} ${styles.osButton}`}
        to="https://www.instagram.com/coollab_art"
      >
        <FaInstagram className={styles.icon} /> Instagram
      </ExternalLink>
      <ExternalLink
        className={`${styles.secondaryBtn} ${styles.osButton}`}
        to="https://discord.com/invite/QEjqnEy4aT"
      >
        <FaDiscord className={styles.icon} /> Discord
      </ExternalLink>
      <ExternalLink
        className={`${styles.secondaryBtn} ${styles.osButton}`}
        to="https://mastodon.social/@Coollab"
      >
        <FaMastodon className={styles.icon} /> Mastodon
      </ExternalLink>
    </div>
  )
}
