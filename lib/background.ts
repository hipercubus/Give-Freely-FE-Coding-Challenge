import { sendToBackground } from "@plasmohq/messaging"

export const getWebsitesFromBG = async () => {
  const resp: WebsitesResponse = await sendToBackground({
    name: "websites"
  })
  return resp
}
