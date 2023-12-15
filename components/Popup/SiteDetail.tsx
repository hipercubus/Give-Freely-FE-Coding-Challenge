import { type FC } from "react"

import * as styles from "./styles.module.css"

type SiteDetailProps = {
  site: Website
  handleSelectSite: (idx: number) => void
}

const SiteDetail: FC<SiteDetailProps> = ({ site, handleSelectSite }) => {
  const { name, url, messages } = site

  return (
    <>
      <article>
        <div className={styles.name}>{name}</div>
        <a href={`https://${url}`} target="_blanc">
          {url}
        </a>
        <div className={styles.messages}>
          {messages.map((message) => (
            <div>» {message}</div>
          ))}
        </div>
      </article>
      <button onClick={() => handleSelectSite(null)}>Back to list</button>
    </>
  )
}

export default SiteDetail
