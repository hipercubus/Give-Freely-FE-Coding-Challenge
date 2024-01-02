import { useEffect, useState } from "react"

import { getWebsitesFromBG } from "~lib/background"
import { getURLMatches } from "~lib/storage"
import { getRandomItem } from "~lib/utils"

export const useNotifications = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [matchesList, setMatchesList] = useState<MatchURL[]>([])
  const handleMenu = () => setShowMenu(!showMenu)

  useEffect(() => {
    Promise.all([getURLMatches(), getWebsitesFromBG()]).then((resp) => {
      const [urlMatches, respBG] = resp

      const list: MatchURL[] = urlMatches.reduce(
        (prev: MatchURL[], urlMatch: string) => {
          const isAlreadyInList = prev.some((match) =>
            urlMatch.includes(match.url)
          )
          if (isAlreadyInList) return prev

          const website = respBG.websites.find((website) =>
            urlMatch.includes(website.url)
          )
          const randomMessage = getRandomItem<string>(website.messages)
          return [
            ...prev,
            {
              url: website.url,
              name: website.name,
              message: randomMessage
            }
          ]
        },
        []
      )
      setMatchesList(list)
    })
  }, [])

  return { showMenu, handleMenu, matchesList }
}
