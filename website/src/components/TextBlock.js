import React from "react"

export default function ({ imgSrc, caption, children, alignRight }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: alignRight && "row-reverse",
        alignItems: "center",
        // textAlign: alignRight && "right", // NB: actually this looks really bad so we disabled it
      }}
    >
      <div
        style={{
          fontStyle: "italic",
          fontSize: "12px",
          height: "150px",
          width: "auto",
          flexShrink: "0",
        }}
      >
        <img
          src={imgSrc}
          style={{ height: "150px", width: "auto", flexShrink: "0" }}
        />
        <br />
        {caption}
      </div>
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
