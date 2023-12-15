import { sendToBackground } from "@plasmohq/messaging"

export const getWebsitesFromBG = async () => {
  const resp = await sendToBackground({
    name: "websites"
  })
  console.log("🔎  >> messageFromBackground  >> resp.data:", resp)
  return resp
}
