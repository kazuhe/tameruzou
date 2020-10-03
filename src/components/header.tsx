// React API
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

// SVG Component
import { Arrow } from '../images/arrow'

// Css
import styles from '../styles/header.module.scss'

export const Header: FC = () => {
  const history = useHistory()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.return} onClick={() => history.goBack()}>
          <Arrow />
        </div>
      </div>
    </header>
  )
}
