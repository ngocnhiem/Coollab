import React from "react"

export default function Contributor({ name, github_name, link, roles }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="contributor-card">
        <img
          className="contributor-avatar"
          src={`https://avatars.githubusercontent.com/${github_name}`}
          alt={name}
        />
        <div>
          <div className="contributor-name">{name}</div>
          <div className="contributor-roles">{roles.join(", ")}</div>
        </div>
      </div>
    </a>
  )
}
