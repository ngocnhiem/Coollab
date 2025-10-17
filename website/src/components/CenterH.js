import React from "react"

export default function ({ children }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>{children}</div>
  )
}

export function CenterText({ children, style }) {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        ...style,
      }}
    >
      {children}
    </div>
  )
}
