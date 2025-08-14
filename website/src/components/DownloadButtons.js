import React from "react"
import { FaWindows, FaApple, FaLinux } from "react-icons/fa"

export default function DownloadButtons() {
  return (
    <span>
      <div className="osButtons">
        <a
          className="secondaryBtn osButton"
          href="/Coollab-Launcher-Windows.exe"
        >
          <FaWindows className="icon" /> Windows
        </a>
        <a
          className="secondaryBtn osButton tooltip"
          href="/Coollab-Launcher.AppImage"
        >
          <FaLinux className="icon" /> Linux
          <span className="tooltipText">
            If you need help running the AppImage,
            <br />
            check out{" "}
            <a
              href="https://appimage.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              the official AppImage website
            </a>
            .
          </span>
        </a>
        <a className="secondaryBtn osButton" href="/Coollab-Launcher-MacOS.zip">
          <FaApple className="icon" /> MacOS
        </a>
      </div>
    </span>
  )
}
