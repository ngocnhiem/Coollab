import React from "react"
import style from "./Hero.module.css"

export default function () {
  return (
    <main className={style.heroSection}>
      <div className={style.heroBackground}></div>
      <div className={style.heroContent2}>
        <div className={style.heroContent}>
          <h1 className={style.heroTitle}>COOLLAB</h1>
          <p className={style.heroSubtitle}>
            Node-based creation for everyone
            <br />
            VJs, Coders, Artists, and the like
          </p>
        </div>
      </div>
      <div /* SVG Wave */ className={style.svgTop}>
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 1440 261"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M928.556 199.183C1105.36 242.709 1389.58 122.585 1448 0.314806L1448 400.396L-24.9539 400.396L-37.3233 237.364C-19.8954 220.33 52.2068 157.038 123.937 195.043C231.559 252.064 349.098 287.775 485.829 232.773C622.559 177.771 696.571 142.069 928.556 199.183Z"
            fill="#27272A"
          />
        </svg>
      </div>
    </main>
  )
}
