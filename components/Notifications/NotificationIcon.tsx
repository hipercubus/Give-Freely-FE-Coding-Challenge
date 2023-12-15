import bell from "data-base64:~assets/bell.png"
import type { FC } from "react"

import * as styles from "~css/notifications.module.css"

type NotificationIconProps = {
  onClick: () => void
}

const NotificationIcon: FC<NotificationIconProps> = ({ onClick }) => {
  const sitesFound = 1

  return (
    <button onClick={onClick}>
      <img src={bell} className={styles.bell} alt="notification icon" />
      <div className={styles.badge}>{sitesFound}</div>
    </button>
  )
}

export default NotificationIcon
