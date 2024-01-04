import { useEffect, useState } from "react"

import { getWebsitesFromBG } from "~lib/background"
import { getRandomItem } from "~lib/utils"

type DataType = {
  name: string
  message: string
  redirect?: {
    url: string
    message: string
  }
}
export const useBanner = () => {
  const [randomMessage, setRandomMessage] = useState<DataType>()
  const [doesMatch, setDoesMatch] = useState<boolean>(false)

  useEffect(() => {
    getWebsitesFromBG().then((resp) => {
      const findMatch = resp.websites.find(
        (site) => window.location.hostname === site.url
      )
      if (findMatch) {
        setDoesMatch(true)
        const randomMessage = getRandomItem<string>(findMatch.messages)
        const data: DataType = {
          name: findMatch.name,
          message: randomMessage
        }
        if (findMatch.redirect) {
          data.redirect = findMatch.redirect
        }
        setRandomMessage(data)
      }
    })
  }, [])

  return {
    randomMessage,
    doesMatch
  }
}
