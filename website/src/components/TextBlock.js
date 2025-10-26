import React from "react"
import style from "./TextBlock.module.css"

export default function ({ imgSrc, caption, children, alignRight }) {
  return (
    <div className={`${style.block} ${alignRight && style.alignRight}`}>
      <div
        style={{
          fontStyle: "italic",
          fontSize: "12px",
        }}
        className={style.imageAndCaption}
      >
        <img
          src={imgSrc}
          style={{ height: "150px", width: "auto", flexShrink: "0" }}
        />
        <br />
        {caption}
      </div>
      <div
        style={{ marginTop: "5px" }}
        className={alignRight ? style.alignTextRight : style.alignTextLeft}
      >
        {children}
      </div>
    </div>
  )
}
