import React from "react"
import { FaHeart } from "react-icons/fa"
import BigButton from "./BigButton"
import LinkInternal from "./LinkInternal"

export default function () {
  return (
    <LinkInternal to="/Contribute/Donations" noDecoration>
      <BigButton icon={<FaHeart />} noCapsLock>
        Consider donating?
      </BigButton>
    </LinkInternal>
  )
}
