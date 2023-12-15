import { useEffect, useState } from "react"

import { getWebsitesFromBG } from "~lib/background"
import { getRandomItem } from "~lib/utils"

export const useBanner = () => {
  const [randomMessage, setRandomMessage] = useState<{
    name: string
    message: string
  }>()
  const [doesMatch, setDoesMatch] = useState<boolean>(false)

  useEffect(() => {
    getWebsitesFromBG().then((resp) => {
      const findMatch = resp.websites.find(
        (site) => window.location.hostname === site.url
      )
      if (findMatch) {
        setDoesMatch(true)
        const randomMessage = getRandomItem<string>(findMatch.messages)
        setRandomMessage({
          name: findMatch.name,
          message: randomMessage
        })
      }
    })
  }, [])

  return {
    randomMessage,
    doesMatch
  }
}
