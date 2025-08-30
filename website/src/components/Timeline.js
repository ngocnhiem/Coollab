import React from "react"
import styles from "./Timeline.module.css"
import LinkInternal from "./LinkInternal"
import Spacer from "./Spacer"

export default function () {
  return (
    <Timeline>
      <Step img="/img/tuto1.png">
        Start with a <b>Shape</b>
      </Step>
      <Step img="/img/tuto2.png">
        Add some <b>Modifiers</b>
      </Step>
      <Step img="/img/tuto3.png">
        <b>Colorize</b>!{/* Or "<b>Post-Process</b> the result"? */}
      </Step>
    </Timeline>
  )
}
// TODO(Website) is Key property important ?
// TODO(Website) maybe make the timeline centered? And the line goes under the images, centered too, and each text is above the image
// TODO(Website) images should go fullscreen when clicked, so we can nicely read the nodes used in the "tutorial"
// TODO(Website) find a way for the line to automatically start and stop on first and last bullets ? instead of just hardcoding a size

// Only pass accentColor if you want to overwrite the one that will be set by CardList automatically
function Step({ img, accentColor, stepNumber, isLastStep, children }) {
  const content = (
    <>
      <div className={styles.step}>
        <div className={styles.stepImageWrapper}>
          <img
            src={img}
            alt=""
            className={styles.stepImage}
            style={{ borderColor: accentColor }}
            //   loading="lazy"
            //   decoding="async"
          />
        </div>

        <div
          className={styles.stepDot}
          style={{ backgroundColor: accentColor }}
        />

        <div className={styles.stepContent}>
          <div className={styles.stepNumber} style={{ color: accentColor }}>
            {stepNumber}
          </div>
          <div className={styles.stepLabel}>
            {/* Colorize all <b> tags */}
            {React.Children.map(children, (child) => {
              if (child.type === "b") {
                return React.cloneElement(child, {
                  style: { ...child.props.style, color: accentColor },
                })
              }
              return child
            })}
          </div>
        </div>
      </div>
      {!isLastStep && <Spacer height="8rem" />}
    </>
  )

  return <div /*  key={index} */>{content}</div>
  //   return step.link ? (
  //     <LinkInternal
  //       key={index}
  //       to={step.link}
  //       aria-label={step.label}
  //       // noDecoration // TODO(Website) no decoration?
  //     >
  //       {content}
  //     </LinkInternal>
  //   ) : (
  //     <div key={index}>{content}</div>
  //   )
}

function Timeline({ children }) {
  const accentColors = ["#F4AD7F", "#8656D7", "#30A7F5"]
  return (
    <div className={styles.timeline}>
      {React.Children.map(children, (child, i) => {
        const accentColor = child.props.accentColor || accentColors[i % 3]
        return React.cloneElement(child, {
          accentColor,
          stepNumber: i + 1,
          isLastStep: i === children.length - 1,
        })
      })}
    </div>
  )
}
