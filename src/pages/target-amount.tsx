// React API
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

// Redux Toolkit
import { useSelector } from 'react-redux'
import { RootState } from '../stores'

// Original components
import { Header } from '../components/header'
import { Button } from '../components/button'
import { Step } from '../components/step'
import { TargetAmountContainer } from '../containers/target-amount'

// Css
import styles from '../styles/pages/target-amount.module.scss'

export const TargetAmount: FC = () => {
  const history = useHistory()
  const targetAmount = useSelector((state: RootState) => state.simulation.targetAmount.money)

  return (
    <div className={styles.targetAmount}>
      <Header />
      <Step current={1} title="目標貯金額を入力してください" />
      <div className={styles.content}>
        <TargetAmountContainer />
      </div>
      <div className={styles.btn}>
        <Button text="次へ" isDisabled={targetAmount > 0 ? false : true} onClick={() => history.push('/term')} />
      </div>
    </div>
  )
}
