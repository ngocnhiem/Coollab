import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import IntroductionShowcase from '../components/IntroductionShowcase';
import Timeline from '../components/Timeline';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';

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
  <a className={`${styles.secondaryBtn} ${styles.osButton}`}  href="#">
    <FaWindows className={styles.osIcon} />
    Windows
  </a>
  <a className={`${styles.secondaryBtn} ${styles.osButton}`} href="#">
    <FaApple className={styles.osIcon} />
    macOS
  </a>
  <a className={`${styles.secondaryBtn} ${styles.osButton}`} href="#">
    <FaLinux className={styles.osIcon} />
    Linux
  </a>
</div>
<p className={styles.osSubtitle}>
  This software uses code of <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer">FFmpeg</a> licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener noreferrer">GPLv3.0</a> and its source can be downloaded <a href="https://github.com/Coollab-Art/Coollab" target="_blank" rel="noopener noreferrer">here</a>.
</p>
      </div>
    </Layout>
  );
}
