import type { FC } from "react"

import NotificationIcon from "./NotificationIcon"
import NotificationModal from "./NotificationModal"
import { useNotifications } from "./useNotifications"

const Notifications: FC = () => {
  const { showMenu, handleMenu, matchesList } = useNotifications()

  return (
    <>
      <NotificationIcon onClick={handleMenu} matches={matchesList.length} />
      {showMenu && <NotificationModal notificationsList={matchesList} />}
    </>
  )
}

export default Notifications
