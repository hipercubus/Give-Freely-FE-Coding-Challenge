import { sendToBackground } from "@plasmohq/messaging"

export const getWebsitesFromBG = async () => {
  const resp: WebsitesResponse = await sendToBackground({
    name: "websites"
  })
  console.log("🔎  >> messageFromBackground  >> resp.data:", resp)
  return resp
}
