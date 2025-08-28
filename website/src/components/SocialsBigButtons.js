import React from "react"
import style from "./SocialsBigButtons.module.css"
import { FaInstagram, FaDiscord, FaMastodon } from "react-icons/fa"
import ExternalLink from "./ExternalLink"
import BigButton from "./BigButton"

export default function () {
  return (
    <div className={style.buttonsRow}>
      <ExternalLink to="https://www.instagram.com/coollab_art" noDecoration>
        <BigButton icon={<FaInstagram />}>Instagram</BigButton>
      </ExternalLink>
      <ExternalLink to="https://discord.com/invite/QEjqnEy4aT" noDecoration>
        <BigButton icon={<FaDiscord />}>Discord</BigButton>
      </ExternalLink>
      <ExternalLink to="https://mastodon.social/@Coollab" noDecoration>
        <BigButton icon={<FaMastodon />}>Mastodon</BigButton>
      </ExternalLink>
    </div>
  )
}
