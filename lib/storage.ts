import { Storage } from "@plasmohq/storage"

import { URL_MATCHES } from "./constants"

const storage = new Storage()

export const getURLMatches = async () => storage.get<string[]>(URL_MATCHES)
export const setURLMatches = async (urlList: string[]) => {
  const urlMatches = await storage.set(URL_MATCHES, urlList)
  return urlMatches
}
