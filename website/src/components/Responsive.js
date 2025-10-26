import React from "react"
import style from "./Responsive.module.css"

export function MobileOnly({ children }) {
  return <span className={style.mobile}>{children}</span>
}

export function DesktopOnly({ children }) {
  return <span className={style.desktop}>{children}</span>
}
