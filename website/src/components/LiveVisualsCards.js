import React from "react"
import style from "./LiveVisualsCards.module.css"
import Image from "./Image"
import LinkInternal from "./LinkInternal"

function Card({ image, color, linkInternal, children }) {
  const content = (
    <div className={style.card} style={{ borderColor: color }}>
      <Image
        src={image}
        className={style.cardImage}
        onClick={(e) => {
          // Prevent clicking on the link when we click on the image
          e.preventDefault()
          e.stopPropagation()
        }}
      ></Image>
      <p className={style.cardText}>
        {/* Colorize all <b> tags */}
        {React.Children.map(children, (child) => {
          if (child.type === "b") {
            return React.cloneElement(child, {
              style: { ...child.props.style, color: color },
            })
          }
          return child
        })}
      </p>
    </div>
  )
  return linkInternal ? (
    <LinkInternal to={linkInternal}>{content}</LinkInternal>
  ) : (
    content
  )
}

function CardsContainer({ children }) {
  const colors = ["#F4AD7F", "#8656D7", "#30A7F5"]
  return (
    <div className={style.cardContainer}>
      {React.Children.map(children, (child, i) => {
        const color = child.props.color || colors[i % 3]
        return React.cloneElement(child, { color })
      })}
    </div>
  )
}

export default function () {
  return (
    <CardsContainer>
      <Card image="/img/audio.jpg" linkInternal="/Tutorials/VJ/Audio">
        <b>AUDIO</b>-reactive
      </Card>
      <Card image="/img/webcam.jpg" linkInternal="/Tutorials/VJ/Webcam">
        <b>WEBCAM</b> integration
      </Card>
      <Card image="/img/spout.webp" linkInternal="/Tutorials/VJ/Spout">
        <b>SPOUT</b> in & out
      </Card>
      <Card image="/img/midi.webp" linkInternal="/Tutorials/VJ/MIDI">
        <b>MIDI</b> controllers
      </Card>
      {/* TODO(Website2) replace this image */}
      <Card image="/img/osc.jpg" linkInternal="/Tutorials/VJ/OSC">
        <b>OSC</b> protocol
      </Card>
      <Card image="/img/osc2.jpg" linkInternal="/Tutorials/VJ/HTTP">
        <b>HTTP</b> requests
      </Card>
    </CardsContainer>
  )
}
