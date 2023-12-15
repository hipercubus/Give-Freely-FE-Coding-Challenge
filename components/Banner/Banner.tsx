import type { FC } from "react"

import * as styles from "~css/banner.module.css"

import { useBanner } from "./useBanner"

const Banner: FC = () => {
  const { randomMessage, doesMatch } = useBanner()

  if (!doesMatch) return null
  return (
    <div className={styles.banner}>
      <span className={styles.name}>{randomMessage.name}:</span>
      {randomMessage.message}
    </div>
  )
}

export default Banner
