import React from "react"
import style from "./BigButton.module.css"

export default function ({ icon, children, noCapsLock }) {
  return (
    <div className={`${style.button} ${!noCapsLock && style.capsLock}`}>
      {React.cloneElement(icon, { className: style.icon })} {children}
    </div>
  )
}
