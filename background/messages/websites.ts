//TODO: fetch websites from API and expose to extension

import type { PlasmoMessaging } from "@plasmohq/messaging"

import { getWebsites } from "~lib/fetching"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const message = await getWebsites()
  console.log(
    "🔎  >> consthandler:PlasmoMessaging.MessageHandler=  >> message:",
    message
  )
  res.send(message)
}

export default handler
