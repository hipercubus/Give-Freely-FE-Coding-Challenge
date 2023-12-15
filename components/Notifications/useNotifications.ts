import { useEffect, useState } from "react"

import { getWebsitesFromBG } from "~lib/background"
import { getRandomItem } from "~lib/utils"

export const useNotifications = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [randomName, setRandomName] = useState()
  const [randomMessage, setRandomMessage] = useState()
  const handleMenu = () => setShowMenu(!showMenu)

  useEffect(() => {
    // console.log(">>> ", "sending ping")
    getWebsitesFromBG().then((resp) => {
      // console.log("🔎  >> getWebsitesFromBG  >> resp:", resp)
      const randomBrand = getRandomItem(resp.websites)

      // console.log(
      //   "🔎  >> getWebsitesFromBG  >> randomBrand.name:",
      //   randomBrand.name
      // )
      setRandomName(randomBrand.name)
      const randomMessage = getRandomItem(randomBrand.messages)
      // console.log("🔎  >> getWebsitesFromBG  >> message:", randomMessage)
      setRandomMessage(randomMessage)
    })
  }, [])

  return { showMenu, handleMenu, randomName, randomMessage }
}
