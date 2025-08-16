import React from "react"
import styles from "./FFmpegLegalNotice.module.css"

export default function FFmpegLegalNotice() {
  return (
    <p className={styles.ffmpegLegalNotice}>
      This software uses code of{" "}
      <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer">
        FFmpeg
      </a>{" "}
      licensed under the{" "}
      <a
        href="https://www.gnu.org/licenses/gpl-3.0.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        GPLv3.0
      </a>{" "}
      and its source can be downloaded{" "}
      <a
        href="https://github.com/Coollab-Art/Coollab"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
    </p>
  )
}
