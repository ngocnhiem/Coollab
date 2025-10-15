import React from "react"
import { Card, CardList } from "./CardList"
import {
  FaBullhorn,
  FaImages,
  FaFileAlt,
  FaLightbulb,
  FaDonate,
} from "react-icons/fa"

export default function () {
  return (
    <CardList centered>
      <Card icon={<FaLightbulb />} internalLink="/Contribute/Feedback">
        Feedback
      </Card>
      <Card icon={<FaBullhorn />} internalLink="/Contribute/Outreach">
        Outreach
      </Card>
      <Card icon={<FaFileAlt />} internalLink="/Contribute/Code">
        Code
      </Card>
      <Card icon={<FaImages />} internalLink="/Contribute/Design">
        Design
      </Card>
      <Card icon={<FaDonate />} internalLink="/Contribute/Donations">
        Consider donating? Or buy merch!
      </Card>
    </CardList>
  )
}
