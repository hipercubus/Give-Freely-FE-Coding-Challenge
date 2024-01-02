import bell from "data-base64:~assets/bell.png"
import type { FC } from "react"

import * as styles from "~css/notifications.module.css"

type NotificationIconProps = {
  onClick: () => void
  matches?: number
}

const NotificationIcon: FC<NotificationIconProps> = ({ onClick, matches }) => {
  return (
    <button onClick={onClick}>
      <img src={bell} className={styles.bell} alt="notification icon" />
      {matches && <div className={styles.badge}>{matches}</div>}
    </button>
  )
}

export default NotificationIcon
