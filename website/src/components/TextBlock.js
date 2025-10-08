import React from "react"

export default function ({ imgSrc, children, alignRight }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: alignRight && "row-reverse",
        alignItems: "center",
        // textAlign: alignRight && "right", // NB: actually this looks really bad so we disabled it
      }}
    >
      <img
        src={imgSrc}
        style={{ height: "150px", width: "auto", flexShrink: "0" }}
      />
      <div
        style={{
          marginTop: "5px",
          marginLeft: !alignRight && "25px",
          marginRight: alignRight && "15px",
        }}
        className="textBlock"
      >
        {children}
      </div>
    </div>
  )
}
