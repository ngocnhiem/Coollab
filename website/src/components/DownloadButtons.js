import React from "react"
import { FaWindows, FaApple, FaLinux } from "react-icons/fa"
import styles from "../pages/index.module.css"

export default function DownloadButtons() {
  return (
    <>
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
      </div>{" "}
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
    </>
  )
}
