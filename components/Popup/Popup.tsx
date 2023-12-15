import logo from "data-base64:~assets/Horizontal_Give_Freely_2x.png"
import { type FC } from "react"

import SiteDetail from "./SiteDetail"
import SitesList from "./SitesList"
import * as styles from "./styles.module.css"
import { usePopup } from "./usePopup"

const Popup: FC = () => {
  const { sitesList, selectedSite, handleSelectSite } = usePopup()
  return (
    <section className={styles.container}>
      <img src={logo} alt="give freely logo" />
      {selectedSite === null && (
        <SitesList sitesList={sitesList} handleSelectSite={handleSelectSite} />
      )}
      {selectedSite !== null && (
        <SiteDetail site={selectedSite} handleSelectSite={handleSelectSite} />
      )}
    </section>
  )
}

export default Popup
