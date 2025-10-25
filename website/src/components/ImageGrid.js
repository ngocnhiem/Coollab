import React, { useState, useEffect } from "react"
import styles from "./ImageGrid.module.css"

const extractImage = (images) => {
  const image = images[0]
  images.splice(0, 1)
  return image
}

function SwitchingImage({ images, initialImage }) {
  const [currentImage, setCurrentImage] = useState(initialImage)
  const [previousImage, setPreviousImage] = useState(null)

  const switchImage = () => {
    if (images.length === 0) return

    const newImage = extractImage(images)
    if (currentImage !== null) {
      images.push(currentImage) // Must put back after extracting, to make sure we don't extract what we have just put back
    }

    setPreviousImage(currentImage)
    setCurrentImage(newImage)

    // Cleanup previous image after fade duration
    setTimeout(() => setPreviousImage(null), 300)
  }

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={switchImage}
      onClick={switchImage}
    >
      {previousImage && (
        <img
          key={currentImage}
          src={currentImage}
          alt=""
          className={`${styles.img}`}
        />
      )}
      <img
        key={previousImage || currentImage}
        src={previousImage || currentImage}
        alt=""
        className={`${styles.img} ${previousImage && styles.fadeOut}`}
      />
    </div>
  )
}

function Row({ images }) {
  const initialImages = []
  for (let i = 0; i < 7; ++i) {
    initialImages.push(extractImage(images))
  }
  return (
    <>
      {initialImages.map((initialImage) => (
        <SwitchingImage images={images} initialImage={initialImage} />
      ))}
    </>
  )
}

export default function ({ style }) {
  const loadImages = (req) => {
    const shuffle = (array) => {
      return array
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1])
    }
    return shuffle(req.keys().map((key) => req(key).default))
  }

  const images = {
    shape2D: loadImages(
      require.context("./ImageGrid/Shape 2D", false, /\.webp$/)
    ),
    shape3D: loadImages(
      require.context("./ImageGrid/Shape 3D", false, /\.webp$/)
    ),
    modifier: loadImages(
      require.context("./ImageGrid/2D Transform", false, /\.webp$/)
    ),
    postProcess: loadImages(
      require.context("./ImageGrid/Post-Process", false, /\.webp$/)
    ),
  }

  // Preload images
  useEffect(() => {
    for (let category of Object.values(images)) {
      for (let image of category) {
        const img = new Image()
        img.loading = "lazy"
        img.src = image
      }
    }
  }, [images])

  return (
    <div className={styles.grid} style={style}>
      <Row images={images.shape2D} />
      <Row images={images.postProcess} />
      <Row images={images.modifier} />
      <Row images={images.shape3D} />
    </div>
  )
}
