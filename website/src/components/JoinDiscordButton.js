import React from "react"
import { FaDiscord } from "react-icons/fa"
import BigButton from "./BigButton"
import LinkExternal from "./LinkExternal"

export default function () {
  return (
    <LinkExternal to="https://discord.com/invite/QEjqnEy4aT" noDecoration>
      <BigButton icon={<FaDiscord />} noCapsLock>
        Join the Discord!
      </BigButton>
    </LinkExternal>
  )
}
