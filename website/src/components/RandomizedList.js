import React from "react"
import BrowserOnly from "@docusaurus/BrowserOnly"

const shuffle = (array) => {
  return array
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1])
}

export default function ({ elements }) {
  return (
    <BrowserOnly>
      {() => {
        const shuffled = shuffle(elements)
        return shuffled.map((el, i) =>
          React.isValidElement(el) ? (
            React.cloneElement(el, { key: i })
          ) : (
            <React.Fragment key={i}>{el}</React.Fragment>
          )
        )
      }}
    </BrowserOnly>
  )
}
