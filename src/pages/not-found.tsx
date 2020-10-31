// React API
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

// Original components
import { Step } from '../components/step'

// Css
import styles from '../styles/pages/not-found.module.scss'

export const NotFound: FC = () => (
  <div className={styles.wrap}>
    <Step title="404" text="ページが見つかりませんでした" />
    <div className={styles.image}>
      <img src={`${process.env.PUBLIC_URL}/notfound.png`} alt="404" />
    </div>
    <div className={styles.link}>
      <Link to="/">TOPへ</Link>
    </div>
  </div>
)
