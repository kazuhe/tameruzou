// React API
import React, { FC } from 'react'

// Original components
import { BonusListComponent } from '../components/bonus-list'

// Redux Toolkit
import { useSelector } from 'react-redux'
import { RootState } from '../stores'
import { useDispatch } from 'react-redux'

import { setBonusNum, setBonusRate } from '../stores/simulation'

export const BonusListContainer: FC = () => {
  const num = useSelector((state: RootState) => state.simulation.bonus.number)
  const rate = useSelector((state: RootState) => state.simulation.bonus.rate)
  const dispatch = useDispatch()

  // 目標金額をセット
  const setNum = (value: number) => {
    dispatch(setBonusNum(value))
  }

  // 目標金額を追加
  const setRate = (value: number) => {
    dispatch(setBonusRate(value))
  }

  return (
    <BonusListComponent num={num} rate={rate} setNum={(value) => setNum(value)} setRate={(value) => setRate(value)} />
  )
}
