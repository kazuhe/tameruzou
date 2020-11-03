// React API
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

// Original components
import { Header } from '../components/header'
import { Button } from '../components/button'
import { Step } from '../components/step'
import { BonusMoneyContainer } from '../containers/bonus-money'

// Css
import styles from '../styles/pages/bonus.module.scss'

export const BonusMoney: FC = () => {
  const history = useHistory()

  return (
    <div className={styles.wrap}>
      <Header />
      <Step current={4} title="ボーナス月の貯金額を入力してください" optional={true} />
      <div className={styles.content}>
        <BonusMoneyContainer />
      </div>
      <div className={styles.btn}>
        <Button text="結果を見る" onClick={() => history.push('/result')} />
      </div>
    </div>
  )
}
