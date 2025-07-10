import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import IntroductionShowcase from '../components/IntroductionShowcase';
import Timeline from '../components/Timeline';

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
    </Layout>
  );
}
