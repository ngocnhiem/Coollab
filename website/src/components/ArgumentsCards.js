import React from "react"
import styles from "./IntroductionShowcase.module.css"

export default function ArgumentsCards() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card} style={{ borderColor: "#8656D7" }}>
        <div className={styles.cardImage}>
          <img src="/img/demo-horizontal.png"></img>
        </div>
        <p className={styles.cardText}>
          Designed to be <span style={{ color: "#8656D7" }}>simple</span> and{" "}
          <span style={{ color: "#8656D7" }}>intuitive</span>
        </p>
      </div>
      <div className={styles.card} style={{ borderColor: "#F4AD7F" }}>
        <div className={styles.cardImage}>
          <img src="/img/demo-horizontal.png"></img>
        </div>
        <p className={styles.cardText}>
          <span style={{ color: "#F4AD7F" }}>Free</span> and{" "}
          <span style={{ color: "#F4AD7F" }}>Open-source</span> software
        </p>
      </div>
      <div className={styles.card} style={{ borderColor: "#30A7F5" }}>
        <div className={styles.cardImage}>
          <img src="/img/vj.jpg"></img>
        </div>
        <p className={styles.cardText}>
          A powerful tool for <span style={{ color: "#30A7F5" }}>Vjing</span>{" "}
          and so much more!
        </p>
      </div>
    </div>
  )
}
