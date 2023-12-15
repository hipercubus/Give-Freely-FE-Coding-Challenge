import styleText from "data-text:~css/banner.module.css"
import type {
  PlasmoCSConfig,
  PlasmoCSUIProps,
  PlasmoGetInlineAnchor,
  PlasmoMountShadowHost
} from "plasmo"
import { type FC } from "react"

import Banner from "~components/Banner/Banner"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () =>
  document.querySelector("body")

export const mountShadowHost: PlasmoMountShadowHost = ({
  shadowHost,
  anchor
}) => {
  const firstChild = anchor.element.firstChild
  anchor.element.insertBefore(shadowHost, firstChild)
}

const BannerContent: FC<PlasmoCSUIProps> = () => {
  return <Banner />
}

export default BannerContent
