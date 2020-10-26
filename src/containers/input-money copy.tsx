// React API
import React, { FC } from 'react'

// Original components
import { InputMoneyComponent } from '../components/input-money'

// Redux Toolkit
import { useSelector } from 'react-redux'
import { RootState } from '../stores'
import { useDispatch } from 'react-redux'

import { setTargetAmount, addTargetAmount, handlError } from '../stores/simulation'

export const InputMoneyContainer: FC = () => {
  const targetAmount = useSelector((state: RootState) => state.simulation.targetAmount.money)
  const isError = useSelector((state: RootState) => state.simulation.targetAmount.isTargetAmountError)
  const dispatch = useDispatch()

  // 目標金額をセット
  const setMoney = (value: number) => {
    // 入力がnumberかチェック
    if (!isNaN(value)) {
      dispatch(handlError(false)) // エラー状態初期化
      dispatch(setTargetAmount(value))
    } else {
      dispatch(handlError(true)) // エラー表示
    }
  }

  // 目標金額を追加
  const addMoney = (value: number) => {
    dispatch(addTargetAmount(value))
    dispatch(handlError(false)) // エラー状態初期化
  }

  return (
    <InputMoneyComponent
      title="目標金額"
      money={targetAmount}
      isError={isError}
      isDisabled={false}
      setMoney={(value) => setMoney(value)}
      addMoney={(value) => addMoney(value)}
    />
  )
}
