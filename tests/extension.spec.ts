import { chromium, expect, test } from "@playwright/test"

const urlExample =
  "https://www.google.com/search?q=expedia&sca_esv=595131700&rlz=1C5CHFA_enAR918AR918&sxsrf=AM9HkKlvf1JfH8q9YnrBxpb0_Rdv_tKa6w%3A1704228621028&ei=DXeUZb6UAend1sQP18OYuAc&ved=0ahUKEwj-zsmsyr-DAxXprpUCHdchBncQ4dUDCBA&uact=5&oq=expedia&gs_lp=Egxnd3Mtd2l6LXNlcnAiB2V4cGVkaWEyChAjGIAEGIoFGCcyFhAuGEMYgwEYxwEYsQMY0QMYgAQYigUyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyCBAAGIAEGLEDMgUQABiABDILEAAYgAQYsQMYgwEyJRAuGEMYgwEYxwEYsQMY0QMYgAQYigUYlwUY3AQY3gQY4ATYAQJI1RpQzRFYqxlwAngBkAEAmAFboAGoBKoBATe4AQPIAQD4AQHCAgoQABhHGNYEGLADwgITEC4YgAQYigUYQxjHARjRAxiwA8ICDRAAGIAEGIoFGEMYsAPCAhkQLhiABBiKBRhDGMcBGNEDGMgDGLAD2AEBwgITEC4YgAQYigUYQxjIAxiwA9gBAcICFhAuGIAEGIoFGEMYsQMYgwEYxwEY0QPCAhEQLhiABBixAxiDARjHARjRA8ICCxAuGIAEGMcBGNEDwgIEECMYJ8ICEBAuGIAEGIoFGEMYxwEY0QPCAh8QLhiABBiKBRhDGMcBGNEDGJcFGNwEGN4EGOAE2AECwgIlEC4YgAQYigUYQxixAxiDARjHARjRAxiXBRjcBBjeBBjgBNgBAuIDBBgAIEGIBgGQBhS6BgYIARABGAi6BgYIAhABGBQ&sclient=gws-wiz-serp"
const userDataDir = "./tests/user_data" // Directory to store browser user data
const extensionPath = "./build/chrome-mv3-dev/" // Path to your unpacked extension

test("Test Extension", async ({}) => {
  const browser = await chromium.launchPersistentContext(userDataDir, {
    headless: false, // Extensions are not supported in headless mode
    args: [
      `--disable-extensions-except=${extensionPath}`,
      `--load-extension=${extensionPath}`
    ]
  })

  const page = await browser.newPage()
  // Now you can interact with your extension in the page
  await page.goto(urlExample)
  const button = await page.$("div#plasmo-inline button")
  // await expect(button).toBeTruthy()
  await button?.click()
  await expect(page.getByRole("article")).toContainText("Expedia:")

  // Don't forget to close the browser context at the end
  await browser.close()
})
