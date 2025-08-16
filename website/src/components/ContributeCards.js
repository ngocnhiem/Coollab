import React from "react"
import styles from "./ContributeCards.module.css"
import {
  FaBullhorn,
  FaCommentDots,
  FaBug,
  FaUserSecret,
  FaPaintBrush,
  FaChalkboardTeacher,
  FaCodeBranch,
  FaCode,
  FaDonate,
} from "react-icons/fa"

const accentColors = ["#F4AD7F", "#8656D7", "#30A7F5"]

const items = [
  {
    icon: <FaBullhorn />,
    text: (
      <>
        Tell your friends about{" "}
        <span style={{ fontWeight: "bold" }}>Coollab</span> !
      </>
    ),
    link: "https://coollab-art.com/",
  },
  {
    icon: <FaCommentDots />,
    text: (
      <>
        Share your <span style={{ fontWeight: "bold" }}>feedback</span> and{" "}
        <span style={{ fontWeight: "bold" }}>ideas</span>.
      </>
    ),
    link: "https://github.com/Coollab-Art/Coollab/issues/new?labels=enhancement",
  },
  {
    icon: <FaBug />,
    text: (
      <>
        Report <span style={{ fontWeight: "bold" }}>bugs</span> you encounter.
      </>
    ),
    link: "https://github.com/Coollab-Art/Coollab/issues/new?labels=bug",
  },
  {
    icon: <FaUserSecret />,
    text: (
      <>
        Help us <span style={{ fontWeight: "bold" }}>beta-test</span> new
        features.
      </>
    ),
  },
  {
    icon: <FaCommentDots />,
    text: (
      <>
        Give your <span style={{ fontWeight: "bold" }}>opinion</span> on design
        questions.
      </>
    ),
  },
  {
    icon: <FaChalkboardTeacher />,
    text: (
      <>
        Make <span style={{ fontWeight: "bold" }}>tutorials</span> or{" "}
        <span style={{ fontWeight: "bold" }}>quick tip</span> videos.
      </>
    ),
  },
  {
    icon: <FaCodeBranch />,
    text: (
      <>
        Write and share your own{" "}
        <span style={{ fontWeight: "bold" }}>nodes</span>.
      </>
    ),
    link: "https://coollab-art.com/Tutorials/Writing%20Nodes/Intro", // TODO(Website) make it a relative link, and use <Link> instead of <a> for this one
  },
  {
    icon: <FaPaintBrush />,
    text: (
      <>
        Share your <span style={{ fontWeight: "bold" }}>artworks</span> made
        with Coollab!
      </>
    ),
    link: "https://www.instagram.com/coollab_art/",
  },
  {
    icon: <FaCode />,
    text: (
      <>
        Contribute to Coollab's{" "}
        <span style={{ fontWeight: "bold" }}>codebase</span>.
      </>
    ),
    link: "https://github.com/Coollab-Art/Coollab/issues?q=label%3A%22good+first+issue%22",
  },
  {
    icon: <FaDonate />,
    text: (
      <>
        <span style={{ fontWeight: "bold" }}>Support</span> us financially or
        buy <span style={{ fontWeight: "bold" }}>T-shirts</span>.
      </>
    ),
    link: "https://www.etsy.com/shop/CoollabArt",
  },
]

export default function ContributeCards() {
  return (
    <div className={styles.cardList}>
      {items.map((item, i) => {
        const accentColor = accentColors[i % 3]
        const cardContent = (
          <>
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
          </>
        )

        return item.link ? (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}
            style={{ borderColor: accentColor }}
          >
            {cardContent}
          </a>
        ) : (
          <div
            key={i}
            className={styles.card}
            style={{ borderColor: accentColor }}
          >
            {cardContent}
          </div>
        )
      })}
    </div>
  )
}
