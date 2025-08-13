import React from "react"
import styles from "./GalleryPreview.module.css"

const images = [
  "/img/lab/5.png",
  "/img/lab/6.png",
  "/img/lab/10.png",
  "/img/lab/11.png",
  "/img/lab/7.png",
  "/img/lab/9.png",
]

export default function GalleryPreview() {
  const rows = []
  for (let i = 0; i < images.length; i += 2) {
    rows.push(images.slice(i, i + 2))
  }

  return (
    <>
      <section className={styles.gallerySection}>
        {rows.map((pair, rowIndex) => {
          const isEven = rowIndex % 2 === 0
          const firstImage = isEven ? pair[0] : pair[1]
          const secondImage = isEven ? pair[1] : pair[0]

          return (
            <div key={rowIndex} className={styles.row}>
              <div
                className={`${styles.imageTile} ${
                  isEven ? styles.narrow : styles.wide
                }`}
                style={{ backgroundImage: `url(${firstImage})` }}
              />
              <div
                className={`${styles.imageTile} ${
                  isEven ? styles.wide : styles.narrow
                }`}
                style={{ backgroundImage: `url(${secondImage})` }}
              />
            </div>
          )
        })}
      </section>
      <div className={styles.buttonWrapper}>
        <a
          href="https://www.instagram.com/coollab_art/"
          className={styles.secondaryBtn}
        >
          See more
        </a>
      </div>
    </>
  )
}
