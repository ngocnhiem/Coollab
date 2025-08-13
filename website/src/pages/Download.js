import React from "react"
import Layout from "@theme/Layout"
import styles from "../css/custom.css"
import { FaWindows, FaApple, FaLinux } from "react-icons/fa"

export default function DownloadPage() {
  return (
    <Layout
      title="Download Coollab"
      description="Download Coollab for your platform."
    >
      <main className="downloadWrapper">
        {/* Left: Background video */}
        <div className="downloadVideo">
          <img src="/img/demo-vertical.png"></img>
        </div>

        {/* Right: OS Section */}
        <div className="downloadContent">
          <h1 className="sectionTitle">Install Coollab</h1>
          <p></p>
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
            <a
              className="secondaryBtn osButton"
              href="/Coollab-Launcher-MacOS.zip"
            >
              <FaApple className="icon" /> MacOS
            </a>
          </div>
          <p className="mobileAppImageNote osSubtitle">
            For Linux: if you need help running the AppImage, check out the
            official&nbsp;
            <a
              href="https://appimage.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AppImage website
            </a>
            .
          </p>
          <p className="osSubtitle">
            This software uses code of{" "}
            <a
              href="https://ffmpeg.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            .
          </p>
        </div>
      </main>
    </Layout>
  )
}
