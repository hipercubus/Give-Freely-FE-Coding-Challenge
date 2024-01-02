type Website = {
  name: string
  url: string
  messages: string[]
  redirect?: {
    url: string
    message: string
  }
}

type WebsitesResponse = {
  websites: Website[]
}

type MatchURL = {
  url: string
  name: string
  message: string
}
