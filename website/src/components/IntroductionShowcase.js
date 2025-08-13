import React from 'react';
import styles from './IntroductionShowcase.module.css';
import YoutubeVideo from './YoutubeVideo';

export default function IntroductionShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.svgTop}>
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 1440 401"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M928.556 199.183C1105.36 242.709 1389.58 122.585 1448 0.314806L1448 400.396L-24.9539 400.396L-37.3233 237.364C-19.8954 220.33 52.2068 157.038 123.937 195.043C231.559 252.064 349.098 287.775 485.829 232.773C622.559 177.771 696.571 142.069 928.556 199.183Z" fill="#27272A" />
        </svg>
      </div>

      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>
          The friendly and powerful alternative to TouchDesigner
        </h2>
        <p className={styles.sectionSubtitle}>
          One shape and your creativity is all you need.
        </p>

        <YoutubeVideo id="jsjkjCQCPno" />

        <div className={styles.cardSection}>
          <h2 className={styles.sectionTitle}>
            Coollab, the software you’ve been looking for
          </h2>

          <div className={styles.cardContainer}>
            <div className={styles.card} style={{ borderColor: '#8656D7' }}>
              <div className={styles.cardImage}></div>
              <p className={styles.cardText}><span style={{color:'#8656D7'}}>Simple</span> and <span style={{color:'#8656D7'}}>intuitive</span><br/>node-based effects</p>
            </div>
            <div className={styles.card} style={{ borderColor: '#F4AD7F' }}>
              <div className={styles.cardImage}></div>
              <p className={styles.cardText}>Free and <span style={{color:'#F4AD7F'}}>Open-source</span> software</p>
            </div>
            <div className={styles.card} style={{ borderColor: '#30A7F5' }}>
              <div className={styles.cardImage}></div>
              <p className={styles.cardText}>A powerful tool for <span style={{color:'#30A7F5'}}>Vjing</span> and so much more!</p>
            </div>
          </div>
          <a className={styles.primaryBtn} href="/Download">Download</a>
        </div>

        <YoutubeVideo id="jsjkjCQCPno" />
      </div>
    </section>
  );
}
