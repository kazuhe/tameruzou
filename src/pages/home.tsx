// React API
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

// Original components
import { Button } from '../components/button'
import { Step } from '../components/step'

// SVG Component
import { HomeIcon } from '../images/home-icon'

// Css
import styles from '../styles/home.module.scss'

export const Home: FC = () => {
  const history = useHistory()

  return (
    <div className={styles.home}>
      <Step
        current={0}
        title="貯金管理をはじめよう"
        text={`たったの3分で毎月の貯金額を算出${'\n'}未来の為に貯金をはじめよう。`}
      ></Step>
      <div className={styles.icon}>
        <HomeIcon />
      </div>
      <div className={styles.btn}>
        <Button color="deep" text="Start" onClick={() => history.push('/target-amount')} />
      </div>
    </div>
  )
}
