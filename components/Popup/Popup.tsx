import { type FC, useEffect } from "react"

import { getWebsitesFromBG } from "~lib/background"

import * as style from "./styles.module.css"

const Popup: FC = () => {
  useEffect(() => {
    getWebsitesFromBG().then((resp) => {
      console.log("🔎  >> getWebsitesFromBG  >> resp:", resp)
    })
  }, [])
  return <div>Popup</div>
}

export default Popup
