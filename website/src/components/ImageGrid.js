import React, { useState } from "react"
import styles from "./ImageGrid.module.css"

const loadImages = (req) => req.keys().map((key) => req(key).default)

let shape2DImages = loadImages(
  require.context("./ImageGrid/Shape 2D", false, /\.png$/)
)
let shape3DImages = loadImages(
  require.context("./ImageGrid/Shape 3D", false, /\.png$/)
)
let modifierImages = loadImages(
  require.context("./ImageGrid/2D Transform", false, /\.png$/)
)
let postProcessImages = loadImages(
  require.context("./ImageGrid/Post-Process", false, /\.png$/)
)

// TODO name of the effect under the image

function SwitchingImage({ images }) {
  const [currentIdx, setCurrentIdx] = useState(
    Math.floor(Math.random() * images.length)
  )
  const [prevIdx, setPrevIdx] = useState(null)

  const handleClick = () => {
    if (images.length < 2) return

    let next
    do {
      next = Math.floor(Math.random() * images.length)
    } while (next === currentIdx)

    setPrevIdx(currentIdx)
    setCurrentIdx(next)

    // cleanup previous image after fade duration
    setTimeout(() => setPrevIdx(null), 300)
  }

  return (
    <div className={styles.wrapper} /* onClick */ onMouseEnter={handleClick}>
      {prevIdx !== null && (
        <img
          key={currentIdx}
          src={images[currentIdx]}
          alt=""
          className={`${styles.img}`}
        />
      )}
      <img
        key={prevIdx !== null ? prevIdx : currentIdx}
        src={images[prevIdx !== null ? prevIdx : currentIdx]}
        alt=""
        className={`${styles.img} ${prevIdx !== null && styles.fadeOut}`}
      />
    </div>
  )
}

// TODO needs to be a bit bigger (match the size of the images on the main page)
// TODO give black background to transparent images
// TODO make sure no two same images show up at the same time on a row
// TODO preload images
// TODO show name of effect
// TODO shape 3D with the same color ramp as shape 2D?
// Images 2D transform avec une grille un peu plus grosse?
// TODO also switch image on click, for the mobile version where we can't hover

export default function () {
  return (
    <div className={styles.grid}>
      {/* Row 1 */}
      <SwitchingImage images={shape2DImages} />
      <SwitchingImage images={shape2DImages} />
      <SwitchingImage images={shape2DImages} />
      <SwitchingImage images={shape2DImages} />
      <SwitchingImage images={shape2DImages} />
      <SwitchingImage images={shape2DImages} />
      <SwitchingImage images={shape2DImages} />
      {/* Row 2 */}
      <SwitchingImage images={shape3DImages} />
      <SwitchingImage images={shape3DImages} />
      <SwitchingImage images={shape3DImages} />
      <SwitchingImage images={shape3DImages} />
      <SwitchingImage images={shape3DImages} />
      <SwitchingImage images={shape3DImages} />
      <SwitchingImage images={shape3DImages} />
      {/* Row 4 */}
      <SwitchingImage images={postProcessImages} />
      <SwitchingImage images={postProcessImages} />
      <SwitchingImage images={postProcessImages} />
      <SwitchingImage images={postProcessImages} />
      <SwitchingImage images={postProcessImages} />
      <SwitchingImage images={postProcessImages} />
      <SwitchingImage images={postProcessImages} />
      {/* Row 3 */}
      <SwitchingImage images={modifierImages} />
      <SwitchingImage images={modifierImages} />
      <SwitchingImage images={modifierImages} />
      <SwitchingImage images={modifierImages} />
      <SwitchingImage images={modifierImages} />
      <SwitchingImage images={modifierImages} />
      <SwitchingImage images={modifierImages} />
      {/* Row 5 */}
      <SwitchingImage images={shape2DImages} />
      <SwitchingImage images={shape2DImages} />
      <SwitchingImage images={shape2DImages} />
      <SwitchingImage images={shape2DImages} />
      <SwitchingImage images={shape2DImages} />
      <SwitchingImage images={shape2DImages} />
      <SwitchingImage images={shape2DImages} />
    </div>
  )
}
