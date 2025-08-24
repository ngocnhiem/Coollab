import React from "react"
import style from "./ArgumentsCards.module.css"

export default function ArgumentsCards() {
  return (
    <div className={style.cardContainer}>
      <div className={style.card} style={{ borderColor: "#8656D7" }}>
        <div className={style.cardImage}>
          <img src="/img/demo-horizontal.png"></img>
        </div>
        <p className={style.cardText}>
          DESIGNED TO BE <span style={{ color: "#8656D7" }}>SIMPLE</span> AND{" "}
          <span style={{ color: "#8656D7" }}>INTUITIVE</span>
        </p>
      </div>
      <div className={style.card} style={{ borderColor: "#F4AD7F" }}>
        <div className={style.cardImage}>
          <img src="/img/demo-horizontal.png"></img>
        </div>
        <p className={style.cardText}>
          <span style={{ color: "#F4AD7F" }}>FREE</span> AND{" "}
          <span style={{ color: "#F4AD7F" }}>OPEN-SOURCE</span> FOREVER
        </p>
      </div>
      <div className={style.card} style={{ borderColor: "#30A7F5" }}>
        <div className={style.cardImage}>
          <img src="/img/vj.jpg"></img>
        </div>
        <p className={style.cardText}>
          {/* A powerful tool for <span style={{ color: "#30A7F5" }}>Vjing</span>{" "}
          and so much more! */}
          <span style={{ color: "#30A7F5" }}>100s</span> OF EFFECTS
          <br /> <span style={{ color: "#30A7F5" }}>∞</span> COMBINATIONS
        </p>
      </div>
    </div>
  )
}
