import type { FC } from "react"

import * as styles from "~css/notifications.module.css"

type NotificationModalProps = {
  randomName: string
  randomMessage: string
}

const NotificationModal: FC<NotificationModalProps> = ({
  randomName,
  randomMessage
}) => {
  return (
    <div className={styles.menu}>
      <div className={styles.brand}>{randomName}:</div>
      <div className={styles.message}>» {randomMessage}</div>
    </div>
  )
}

export default NotificationModal
