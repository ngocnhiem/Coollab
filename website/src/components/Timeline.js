import React from "react"
import styles from "./Timeline.module.css"
import LinkInternal from "./LinkInternal"
import Spacer from "./Spacer"

// export default function () {
//   return (
//     <Timeline>
//       <Step img="/img/tuto1.png">
//         Start with a <b>Shape</b>
//       </Step>
//       <Step img="/img/tuto2.png">
//         Add some <b>Modifiers</b>
//       </Step>
//       <Step img="/img/tuto3.png">
//         <b>Colorize</b>!{/* Or "<b>Post-Process</b> the result"? */}
//       </Step>
//     </Timeline>
//   )
// }

const steps = [
  {
    number: 1, // TODO deduce this from order in the list
    label: (
      <>
        Start with a <b style={{ color: "#F4AD7F" }}>Shape</b>{" "}
        {/* TODO colorize automatically all <b> */}
      </>
    ),
    accent: "#F4AD7F",
    img: "/img/tuto1.png",
  },
  {
    number: 2,
    label: (
      <>
        Add some <b style={{ color: "#8656D7" }}>Modifiers</b>
      </>
    ),
    accent: "#8656D7",
    img: "/img/tuto2.png",
  },
  {
    number: 3,
    label: (
      <>
        <b style={{ color: "#30A7F5" }}>Colorize</b>!
      </>
    ),
    accent: "#30A7F5",
    img: "/img/tuto3.png",
  },
  //   {
  //     number: 4,
  //     label: "Make your own incredible stuff!",
  //     accent: "#30A7F5",
  //     img: "/img/tuto4.png",
  //   },
]

// TODO(Website) maybe make the timeline centered? And the line goes under the images, centered too, and each text is above the image
// TODO(Website) images should go fullscreen when clicked, so we can nicely read the nodes used in the "tutorial"
// TODO(Website) find a way for the line to automatically start and stop on first and last bullets ? instead of just hardcoding a size
export default function Timeline() {
  return (
    <div className={styles.timeline}>
      {steps.map((step, index) => {
        const isLastStep = index === steps.length - 1
        const content = (
          <>
            <div className={styles.step}>
              <div className={styles.stepImageWrapper}>
                <img
                  src={step.img}
                  alt=""
                  className={styles.stepImage}
                  style={{ borderColor: step.accent }}
                  //   loading="lazy"
                  //   decoding="async"
                />
              </div>

              <div
                className={styles.stepDot}
                style={{ backgroundColor: step.accent }}
              />

              <div className={styles.stepContent}>
                <div
                  className={styles.stepNumber}
                  style={{ color: step.accent }}
                >
                  {step.number}
                </div>
                <div className={styles.stepLabel}>{step.label}</div>
              </div>
            </div>
            {!isLastStep && <Spacer height="8rem" />}
          </>
        )

        return step.link ? (
          <LinkInternal
            key={index}
            to={step.link}
            aria-label={step.label}
            // noDecoration // TODO(Website) no decoration?
          >
            {content}
          </LinkInternal>
        ) : (
          <div key={index}>{content}</div>
        )
      })}
    </div>
  )
}
