import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import IntroductionShowcase from '../components/IntroductionShowcase';
import Timeline from '../components/Timeline';
import GalleryPreview from '../components/GalleryPreview';
import { FaWindows, FaApple, FaLinux, FaInstagram, FaDiscord, FaMastodon } from 'react-icons/fa';

export default function Home() {
  return (
    <Layout
      title="Coollab"
      description="Logiciel open-source d'art génératif">
      <main className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Coollab</h1>
          <p className={styles.heroSubtitle}>
            The coolest open-source generative art software
          </p>
          <a className={styles.secondaryBtn} href="/Tutorials/Discovery/Intro">
            Get started
          </a>
        </div>
      </main>
      <IntroductionShowcase />
      <Timeline />
      <div className={styles.osSection}>
        <h2 className={styles.sectionTitle}>
          Get Coollab now
        </h2>
        <p className={styles.sectionSubtitle}>
          Select the OS of your choice.
        </p>
        <div className={styles.osButtons}>
          <a className={`${styles.secondaryBtn} ${styles.osButton}`} href="/assets/files/Coollab-Launcher-Windows-bdfc737ac333348eecae86fc5f7b8ec0.exe">
            <FaWindows className={styles.icon} />
            Windows
          </a>
          <a className={`${styles.secondaryBtn} ${styles.osButton}`} href="/assets/files/Coollab-Launcher-MacOS-c215423212151e41283d80f80bb6a83a.zip">
            <FaApple className={styles.icon} />
            MacOS
          </a>
          <a className="secondaryBtn osButton tooltip" href="/assets/files/Coollab-Launcher-0debf2d7308f1dabc95d9fdbc5e8101a.AppImage">
            <FaLinux className="icon" /> Linux
            <span className="tooltipText">
              If you need help running the AppImage,<br />
              check out <a href="https://appimage.org/" target="_blank" rel="noopener noreferrer">the official AppImage website</a>.
            </span>
          </a>
        </div>
        <p className={`${styles.osSubtitle} ${styles.mobileAppImageNote}`}>
          For Linux : if you need help running the AppImage, check out the official&nbsp;
          <a href="https://appimage.org/" target="_blank" rel="noopener noreferrer">
            AppImage website
          </a>.
        </p>
        <p className={styles.osSubtitle}>
          This software uses code of <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer">FFmpeg</a> licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener noreferrer">GPLv3.0</a> and its source can be downloaded <a href="https://github.com/Coollab-Art/Coollab" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
      </div>
      <GalleryPreview />
      <div className={styles.followSection}>
        <h2 className={styles.sectionTitle}>Follow us</h2>
        <div className={styles.followButtons}>
          <a
            className={`${styles.thirdBtn} ${styles.osButton}`}
            href="https://www.instagram.com/coollab_art"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.icon} /> Instagram
          </a>
          <a
            className={`${styles.thirdBtn} ${styles.osButton}`}
            href="https://discord.com/invite/QEjqnEy4aT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className={styles.icon} /> Discord
          </a>
          <a
            className={`${styles.thirdBtn} ${styles.osButton}`}
            href="https://mastodon.social/@Coollab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMastodon className={styles.icon} /> Mastodon
          </a>
        </div>
      </div>

    </Layout>
  );
}
