import React from "react"

export default function ({ children }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>{children}</div>
  )
}

export function CenterText({ children, style, className }) {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  )
}
