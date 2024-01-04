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
