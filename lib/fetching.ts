import { WEBSITES_MOCK } from "./__mocks__/websites"

export const getWebsites = async () => {
  if (process.env.PLASMO_PUBLIC_USE_MOCK === "TRUE") return WEBSITES_MOCK

  const headers = new Headers()
  headers.set("Content-Type", "application/json")
  headers.set("X-Access-Key", `$2b$10$${process.env.PLASMO_PUBLIC_ACCESS_KEY}`)
  headers.set("Access-Control-Allow-Origin", "*")

  const response = await fetch(process.env.PLASMO_PUBLIC_API_ENDPOINT, {
    method: "GET",
    headers: headers
  })
  const jsonResponse = await response.json()
  return jsonResponse.record as WebsitesResponse
}
