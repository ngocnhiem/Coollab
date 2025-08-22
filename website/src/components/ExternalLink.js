import React from "react"

export default function ExternalLink({ to, children, ...props }) {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}
