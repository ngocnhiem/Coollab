import React from "react"
import { Card, CardList } from "./CardList"
import {
  FaBullhorn,
  FaCommentDots,
  FaBug,
  FaHandSparkles,
  FaUserSecret,
  FaPaintBrush,
  FaPalette,
  FaCodeBranch,
  FaCode,
  FaImage,
  FaImages,
  FaFileAlt,
  FaLightbulb,
  FaDonate,
} from "react-icons/fa"

// TODO(Website) rename this component. Or merge it into the Contribute page? but its a markdown page

export default function () {
  return (
    // TODO(Website) Cleanup wording and icons
    // TODO(Website) Maybe the wording should just be the name of the category ? "Feedback", "Donations" etc ? ButI like the "Consider donating? Or buy merch!"
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
        Design{/* : graphics, UI, UX, illustrations, etc.! */}
      </Card>
      <Card icon={<FaDonate />} internalLink="/Contribute/Donations">
        Consider donating? Or buy merch!
      </Card>
    </CardList>
    //     <CardList compactCards centered>
    //   <Card icon={<FaLightbulb />} internalLink="/Contribute/Feedback">
    //     Give us feedback!
    //   </Card>
    //   <Card icon={<FaBullhorn />} internalLink="/Contribute/Outreach">
    //     Share your Coollab projects!
    //   </Card>
    //   <Card icon={<FaFileAlt />} internalLink="/Contribute/Code">
    //     Write GLSL or C++ code!
    //   </Card>
    //   <Card icon={<FaImages />} internalLink="/Contribute/Design">
    //     Design{/* : graphics, UI, UX, illustrations, etc.! */}
    //   </Card>
    //   <Card icon={<FaDonate />} internalLink="/Contribute/Donations">
    //     Consider donating? Or buy merch!
    //   </Card>
    // </CardList>
  )
}
