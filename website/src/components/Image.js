import React, { useState } from "react"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

export default function ({ src, style, ...props }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <img
        src={src}
        style={{ cursor: "pointer", ...style }}
        onClick={() => setIsOpen(true)}
        {...props}
      />
      {isOpen && (
        <Lightbox
          mainSrc={src}
          onCloseRequest={() => setIsOpen(false)}
          animationOnKeyInput={true}
          enableZoom={false}
          imagePadding={50}
          closeLabel="Close Image"
        />
      )}
    </>
  )
}
