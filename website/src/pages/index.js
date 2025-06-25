import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import IntroductionShowcase from '../components/IntroductionShowcase';

export default function Home() {
  return (
    <Layout
      title="Coollab"
      description="Logiciel open-source d'art génératif">
      <main className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Coollab</h1>
        </div>
      </main>
      <IntroductionShowcase />
    </Layout>
  );
}
