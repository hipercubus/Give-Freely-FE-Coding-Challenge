import type { FC } from "react"

import * as styles from "~css/banner.module.css"

const Modal: FC<{
  redirect?: {
    url: string
    message: string
  }
}> = ({ redirect }) => {
  return (
    <div className={styles.modal}>
      <article>
        <h1>{redirect.message}</h1>
        <div>
          <a href={redirect.message}>{redirect.message}</a>
        </div>
      </article>
    </div>
  )
}

export default Modal
