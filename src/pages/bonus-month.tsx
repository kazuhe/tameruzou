// React API
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

// Original components
import { Header } from '../components/header'
import { Button } from '../components/button'
import { Step } from '../components/step'
import { BonusMonthContainer } from '../containers/bonus-month'

// Css
import styles from '../styles/bonus.module.scss'

export const BonusMonth: FC = () => {
  const history = useHistory()

  return (
    <div className={styles.wrap}>
      <Header />
      <Step current={3} title="ボーナス月を設定してください"></Step>
      <div className={styles.content}>
        <BonusMonthContainer />
      </div>
      <div className={styles.btn}>
        <Button text="次へ" onClick={() => history.push('/bonus-money')} />
      </div>
    </div>
  )
}
