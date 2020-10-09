// React API
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

// Original components
import { Header } from '../components/header'
import { Button } from '../components/button'
import { Step } from '../components/step'

// Css
import styles from '../styles/term.module.scss'

export const Term: FC = () => {
  const history = useHistory()

  return (
    <div className={styles.term}>
      <Header />
      <Step current={2} title="貯金の期間を選んでください"></Step>
      <div className={styles.btn}>
        <Button text="次へ" onClick={() => history.push('/target-amount')} />
      </div>
    </div>
  )
}
