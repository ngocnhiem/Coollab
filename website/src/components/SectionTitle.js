import React from "react"
import style from "./SectionTitle.module.css"

export default function ({ fontSize, children }) {
  return (
    <h2 className={style.sectionTitle} style={{ fontSize }}>
      {children}
    </h2>
  )
}
