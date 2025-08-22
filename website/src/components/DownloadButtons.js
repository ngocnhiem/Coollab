import React from "react"
import { FaWindows, FaApple, FaLinux } from "react-icons/fa"
import FFmpegLegalNotice from "./FFmpegLegalNotice"
import ExternalLink from "./ExternalLink"

export default function DownloadButtons() {
  return (
    <>
      <div className="osButtons">
        {/* Windows */}
        <a
          className="secondaryBtn osButton"
          href="/Coollab-Launcher-Windows.exe"
        >
          <FaWindows className="icon" /> Windows
        </a>
        {/* Linux */}
        <div className="osButton tooltip">
          <a
            className="secondaryBtn osButton"
            href="/Coollab-Launcher.AppImage"
          >
            <FaLinux className="icon" /> Linux
          </a>
          <span className="tooltipText">
            If you need help running the AppImage,
            <br />
            check out{" "}
            <ExternalLink to="https://appimage.org/">
              the official AppImage website
            </ExternalLink>
          </span>
        </div>
        {/* MacOS */}
        <a className="secondaryBtn osButton" href="/Coollab-Launcher-MacOS.zip">
          <FaApple className="icon" /> MacOS
        </a>
      </div>{" "}
      <FFmpegLegalNotice />
    </>
  )
}
