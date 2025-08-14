// src/components/FeaturesList.js
import React from "react"
import styles from "./Contribute.module.css"
import {
  FaExchangeAlt,
  FaVideo,
  FaMusic,
  FaCode,
  FaWifi,
  FaKeyboard,
} from "react-icons/fa"

const accentColors = ["#F4AD7F", "#8656D7", "#30A7F5"]

const features = [
  {
    icon: <FaExchangeAlt />,
    text: (
      <>
        <span style={{ fontWeight: "bold" }}>Spout</span> IN & OUT
      </>
    ),
  },
  {
    icon: <FaVideo />,
    text: (
      <>
        <span style={{ fontWeight: "bold" }}>Webcam</span> integration
      </>
    ),
  },
  {
    icon: <FaMusic />,
    text: (
      <>
        <span style={{ fontWeight: "bold" }}>Audio</span> reactive visuals
      </>
    ),
  },
  {
    icon: <FaCode />,
    text: (
      <>
        Custom <span style={{ fontWeight: "bold" }}>Scripting</span>
      </>
    ),
  },
  {
    icon: <FaWifi />,
    text: (
      <>
        <span style={{ fontWeight: "bold" }}>OSC</span> support
      </>
    ),
  },
  {
    icon: <FaKeyboard />,
    text: (
      <>
        <span style={{ fontWeight: "bold" }}>MIDI</span> control
      </>
    ),
  },
  {
    icon: <FaKeyboard />,
    text: (
      <>
        <span style={{ fontWeight: "bold" }}>Particles</span>
      </>
    ),
  },
]

export default function FeaturesList() {
  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.sectionTitle}>Our Features</h2>
      <div className={styles.cardList}>
        {features.map((item, i) => {
          const accentColor = accentColors[i % 3]

          return (
            <div
              key={i}
              className={styles.card}
              style={{ borderColor: accentColor }}
            >
              <div className={styles.cardIcon}>{item.icon}</div>
              <div className={styles.cardText}>
                {React.cloneElement(
                  item.text,
                  {},
                  React.Children.map(item.text.props.children, (child) =>
                    typeof child === "string"
                      ? child
                      : React.cloneElement(child, {
                          style: { ...child.props.style, color: accentColor },
                        })
                  )
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
