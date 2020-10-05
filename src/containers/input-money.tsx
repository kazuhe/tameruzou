// React API
import React, { FC } from 'react'

// Original components
import { InputMoneyComponent } from '../components/input-money'

// Redux Toolkit
import { useSelector } from 'react-redux'
import { RootState } from '../stores'
import { useDispatch } from 'react-redux'

import { setTargetAmount } from '../stores/simulation'

export const InputMoneyContainer: FC = () => {
  const targetAmount = useSelector((state: RootState) => state.simulation.targetAmount)
  const dispatch = useDispatch()

  return (
    <InputMoneyComponent
      targetAmount={targetAmount}
      isDisabled={false}
      handleInput={(value) => dispatch(setTargetAmount(value))}
    />
  )
}
