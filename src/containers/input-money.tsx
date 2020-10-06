// React API
import React, { FC } from 'react'

// Original components
import { InputMoneyComponent } from '../components/input-money'

// Redux Toolkit
import { useSelector } from 'react-redux'
import { RootState } from '../stores'
import { useDispatch } from 'react-redux'

import { setTargetAmount, handlError } from '../stores/simulation'

export const InputMoneyContainer: FC = () => {
  const targetAmount = useSelector((state: RootState) => state.simulation.targetAmount.money)
  const isError = useSelector((state: RootState) => state.simulation.targetAmount.isError)
  const dispatch = useDispatch()

  // 入力がnumberかチェック
  const handleInput = (value: number) => {
    if (!isNaN(value)) {
      dispatch(handlError(false))
      dispatch(setTargetAmount(value))
    } else {
      dispatch(handlError(true))
    }
  }

  return (
    <InputMoneyComponent
      targetAmount={targetAmount}
      isError={isError}
      isDisabled={false}
      handleInput={(value) => handleInput(value)}
    />
  )
}
