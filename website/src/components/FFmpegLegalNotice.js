import React from "react"
import styles from "./FFmpegLegalNotice.module.css"
import ExternalLink from "./ExternalLink"

export default function FFmpegLegalNotice() {
  return (
    <p className={styles.ffmpegLegalNotice}>
      This software uses code of{" "}
      <ExternalLink to="https://ffmpeg.org/">FFmpeg</ExternalLink> licensed
      under the{" "}
      <ExternalLink to="https://www.gnu.org/licenses/gpl-3.0.html">
        GPLv3.0
      </ExternalLink>{" "}
      and its source can be downloaded{" "}
      <ExternalLink to="https://github.com/Coollab-Art/Coollab">
        here
      </ExternalLink>
    </p>
  )
}
