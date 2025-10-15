import React from "react"
import style from "./ArgumentsCards.module.css"
import Image from "./Image"

function Card({ image, color, children }) {
  return (
    <div className={style.card} style={{ borderColor: color }}>
      <Image
        src={image}
        noSmall
        style={{ height: "200px", width: "255px" }}
        className={style.cardImage}
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

// TODO(Website) rename as "LiveVisualsCards"
// TODO(Website) maybe make these cards a bit bigger?
// TODO(Website) these cards should link to relevant tutorials

export default function () {
  return (
    <CardsContainer>
      <Card image="/img/webcam2.jpg">
        <b>AUDIO</b>-reactive
        {/* <br />
        Volume, Waveform, Spectrum */}
      </Card>
      {/* TODO(Website) nicer / cleaner image of Within the Signal? */}
      <Card image="/img/Webcam.jpg">
        <b>WEBCAM</b> integration
      </Card>
      {/* TODO(Website) use the official Spout logo ? put in white ? */}
      <Card image="/img/spout.png">
        <b>SPOUT</b> in & out
      </Card>
      <Card image="/img/computer.jpg">
        <b>MIDI</b> controllers
      </Card>
      <Card image="/img/osc2.jpg">
        <b>OSC</b> protocol
      </Card>
      <Card image="/img/vj-fest2.jpg">
        <b>HTTP</b> requests
      </Card>
    </CardsContainer>
  )
}
