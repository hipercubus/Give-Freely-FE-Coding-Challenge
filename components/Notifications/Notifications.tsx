import type { FC } from "react"

import NotificationIcon from "./NotificationIcon"
import NotificationModal from "./NotificationModal"
import { useNotifications } from "./useNotifications"

//TODO: show all sites found, get from BG or storage (nice to have)
//TODO: bell img should became white when dark mode is on

const Notifications: FC = () => {
  const { showMenu, handleMenu, randomName, randomMessage } = useNotifications()

  return (
    <>
      <NotificationIcon onClick={handleMenu} />
      {showMenu && (
        <NotificationModal
          randomName={randomName}
          randomMessage={randomMessage}
        />
      )}
    </>
  )
}

export default Notifications
