import React from "react"
import style from "./GradientDownloadButton.module.css"
import Link from "@docusaurus/Link"

export default function () {
  return (
    <Link className={style.gradientDownloadButton} to="/Download">
      Download
    </Link>
  )
}
