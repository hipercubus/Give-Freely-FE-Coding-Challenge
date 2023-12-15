import { useEffect, useState } from "react"

import { getWebsitesFromBG } from "~lib/background"

export const usePopup = () => {
  const [sitesList, setSitesList] = useState<Website[]>([])
  const [selectedSite, setSelectedSite] = useState<null | Website>(null)

  useEffect(() => {
    getWebsitesFromBG().then((resp) => {
      setSitesList(resp.websites)
    })
  }, [])

  const handleSelectSite = (idx: number) => {
    setSelectedSite(sitesList[idx] ?? null)
  }

  return {
    sitesList,
    selectedSite,
    handleSelectSite
  }
}
