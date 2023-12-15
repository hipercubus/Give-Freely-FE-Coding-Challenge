import { type FC } from "react"

import * as styles from "./styles.module.css"

type SitesListProps = {
  sitesList: Website[]
  handleSelectSite: (idx: number) => void
}

const SitesList: FC<SitesListProps> = ({ sitesList, handleSelectSite }) => {
  return (
    <div className={styles.list}>
      {sitesList.map((site, idx) => (
        <button key={idx} onClick={() => handleSelectSite(idx)}>
          {site.name}
        </button>
      ))}
    </div>
  )
}

export default SitesList
