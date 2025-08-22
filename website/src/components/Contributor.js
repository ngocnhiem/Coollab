import React from "react"
import style from "./Contributor.module.css"
import ExternalLink from "./ExternalLink"

export default function Contributor({ name, github_name, link, roles }) {
  return (
    <ExternalLink to={link}>
      <div className={style.contributorCard}>
        <img
          className={style.contributorAvatar}
          src={`https://avatars.githubusercontent.com/${github_name}`}
          alt={name}
        />
        <div>
          <div className={style.contributorName}>{name}</div>
          <div className={style.contributorRoles}>{roles.join(", ")}</div>
        </div>
      </div>
    </ExternalLink>
  )
}
