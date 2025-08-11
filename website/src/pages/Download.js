import React from 'react';
import Layout from '@theme/Layout';
import styles from '../css/custom.css';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';

export default function DownloadPage() {
    return (
        <Layout title="Download Coollab" description="Download Coollab for your platform.">
            <main className="downloadWrapper">
                {/* Left: Background video */}
                <div className="downloadVideo">
                    <video autoPlay muted loop playsInline>
                        <source src="/video/coollab-preview.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Right: OS Section */}
                <div className="downloadContent">
                    <h1 className="sectionTitle">Download Coollab</h1>
                    <p className="sectionSubtitle">Select the OS of your choice.</p>
                    <div className="osButtons">
                        <a className="secondaryBtn osButton" href="/assets/files/Coollab-Launcher-Windows-bdfc737ac333348eecae86fc5f7b8ec0.exe">
                            <FaWindows className="icon" /> Windows
                        </a>
                        <a className="secondaryBtn osButton" href="/assets/files/Coollab-Launcher-MacOS-c215423212151e41283d80f80bb6a83a.zip">
                            <FaApple className="icon" /> MacOS
                        </a>
                        <a className="secondaryBtn osButton tooltip" href="/assets/files/Coollab-Launcher-0debf2d7308f1dabc95d9fdbc5e8101a.AppImage">
                            <FaLinux className="icon" /> Linux
                            <span className="tooltipText">
                                If you need help running the AppImage,<br />
                                check out <a href="https://appimage.org/" target="_blank" rel="noopener noreferrer">the official AppImage website</a>.
                            </span>
                        </a>
                    </div>
                    <p className="mobileAppImageNote osSubtitle">
                        For Linux : if you need help running the AppImage, check out the official&nbsp;
                        <a href="https://appimage.org/" target="_blank" rel="noopener noreferrer">
                            AppImage website
                        </a>.
                    </p>
                    <p className="osSubtitle">
                        This software uses code of <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer">FFmpeg</a> licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener noreferrer">GPLv3.0</a> and its source can be downloaded <a href="https://github.com/Coollab-Art/Coollab" target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
                </div>
            </main>
        </Layout>
    );
}
