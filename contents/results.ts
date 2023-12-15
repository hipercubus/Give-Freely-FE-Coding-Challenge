import type { PlasmoCSConfig } from "plasmo"

import { getWebsitesFromBG } from "~lib/background"

export const config: PlasmoCSConfig = {
  matches: ["https://*.google.com/search*"],
  all_frames: true
}

getWebsitesFromBG().then(({ websites }) => {
  const selectorsList = websites.map(({ url }) => `span:has(a[href*='${url}'])`)
  const selectorsString = selectorsList.join(", ")
  const anchorsList = document.querySelectorAll(selectorsString)

  //TODO: improve the selector instead of using parentElement.parentElement...
  //TODO: find the way of using a class instead of inline styles
  anchorsList.forEach((anchor) => {
    const linkContainer =
      anchor.parentElement.parentElement.parentElement.parentElement
    linkContainer.style.border = "1px solid #b1e8b3"
    linkContainer.style.padding = "10px"
    linkContainer.style.borderRadius = "5px"
    linkContainer.style.background =
      "linear-gradient(45deg, rgb(177 232 179 / 20%), transparent)"
  })
})
