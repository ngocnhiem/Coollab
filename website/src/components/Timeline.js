import React from "react"
import styles from "./Timeline.module.css"
import Link from "@docusaurus/Link"

const steps = [
  {
    number: 1,
    label: "Install Coollab",
    accent: "#F4AD7F",
    img: "/img/install-coollab.png",
    link: "/Download",
  },
  {
    number: 2,
    label: "Learn with the Tutorials",
    accent: "#8656D7",
    img: "/img/tutorials.png",
    link: "/Tutorials/Discovery/Intro",
  },
  {
    number: 3,
    label: "Make your own incredible stuff!",
    accent: "#30A7F5",
    img: "/img/demo-horizontal.png",
  },
]

export default function Timeline() {
  return (
    <div className={styles.timeline}>
      {steps.map((step, index) => (
        <Link to={step.link}>
          <div key={index} className={styles.step}>
            <div className={styles.stepImageWrapper}>
              <img
                src={step.img}
                alt=""
                className={styles.stepImage}
                style={{ borderColor: step.accent }}
              />
            </div>

            <div
              className={styles.stepDot}
              style={{ backgroundColor: step.accent }}
            />

            <div className={styles.stepContent}>
              <div className={styles.stepNumber} style={{ color: step.accent }}>
                {step.number}
              </div>
              <div className={styles.stepLabel}>{step.label}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
