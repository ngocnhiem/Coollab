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
          viewBox="0 0 1440 265"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M 928.556,199.183 C 1132.9505,249.503 1389.58,122.585 1448,0.314806 L 1443.4211,283.63395 -37.545886,284.77868 -37.3233,237.364 C -19.8954,220.33 39.584228,186.0194 152.55515,224.80587 265.52607,263.59235 349.0985,287.775 485.829,232.773 c 136.7305,-55.002 238.3325,-83.91 442.727,-33.59 z"
            fill="#27272A"
          />
        </svg>
      </div>
    </main>
  )
}
