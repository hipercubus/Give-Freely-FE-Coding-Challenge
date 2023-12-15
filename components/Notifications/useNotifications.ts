import { useEffect, useState } from "react"

import { getWebsitesFromBG } from "~lib/background"
import { getRandomItem } from "~lib/utils"

export const useNotifications = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [randomName, setRandomName] = useState<string>()
  const [randomMessage, setRandomMessage] = useState<string>()
  const handleMenu = () => setShowMenu(!showMenu)

  useEffect(() => {
    getWebsitesFromBG().then((resp) => {
      const randomBrand: Website = getRandomItem<Website>(resp.websites)
      const randomMessage = getRandomItem<string>(randomBrand.messages)
      setRandomName(randomBrand.name)
      setRandomMessage(randomMessage)
    })
  }, [])

  return { showMenu, handleMenu, randomName, randomMessage }
}
