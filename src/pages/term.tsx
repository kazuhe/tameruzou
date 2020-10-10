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
import { TermPickerContainer } from '../containers/term-picker'

// Css
import styles from '../styles/term.module.scss'

export const Term: FC = () => {
  const history = useHistory()
  const startDate = useSelector((state: RootState) => state.simulation.term.startDate)
  const endDate = useSelector((state: RootState) => state.simulation.term.endDate)
  const isError = useSelector((state: RootState) => state.simulation.term.isTermError)

  return (
    <div className={styles.term}>
      <Header />
      <Step current={2} title="貯金の期間を選んでください"></Step>
      <div className={styles.content}>
        <TermPickerContainer />
      </div>
      <div className={styles.btn}>
        <Button
          text="次へ"
          isDisabled={startDate === null || endDate === null || isError}
          onClick={() => history.push('/target-amount')}
        />
      </div>
    </div>
  )
}
