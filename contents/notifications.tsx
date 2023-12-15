import styleText from "data-text:../css/notifications.module.css"
import type {
  PlasmoCSConfig,
  PlasmoCSUIProps,
  PlasmoGetInlineAnchor,
  PlasmoMountShadowHost
} from "plasmo"
import { type FC } from "react"

import Notifications from "~components/Notifications/Notifications"

export const config: PlasmoCSConfig = {
  matches: ["https://*.google.com/search*"],
  all_frames: true
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () =>
  document.querySelector("#searchform > div > div > div")

export const mountShadowHost: PlasmoMountShadowHost = ({
  shadowHost,
  anchor
}) => {
  anchor.element.prepend(shadowHost)
}

const NotificationContent: FC<PlasmoCSUIProps> = () => {
  return <Notifications />
}

export default NotificationContent
