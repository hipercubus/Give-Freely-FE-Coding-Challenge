import type { FC } from "react"

import * as styles from "~css/notifications.module.css"

type NotificationModalProps = {
  notificationsList: MatchURL[]
}

const NotificationModal: FC<NotificationModalProps> = ({
  notificationsList
}) => (
  <section className={styles.menu}>
    {notificationsList.map(({ name, url, message }) => (
      <article>
        <div className={styles.brand}>{name}:</div>
        <div className={styles.message}>{url}</div>
        <div className={styles.message}>» {message}</div>
      </article>
    ))}
  </section>
)

export default NotificationModal
