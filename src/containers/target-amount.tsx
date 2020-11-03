// React API
import React, { FC, useState } from 'react'

// Original components
import { TargetAmountComponent } from '../components/target-amount'

// Redux Toolkit
import { useSelector } from 'react-redux'
import { RootState } from '../stores'
import { useDispatch } from 'react-redux'

import { setTargetAmount, addTargetAmount } from '../stores/simulation'

export const TargetAmountContainer: FC = () => {
  const targetAmount = useSelector((state: RootState) => state.simulation.targetAmount.money)
  const dispatch = useDispatch()

  // エラー状態管理
  const [error, setError] = useState(false)

  // 目標金額をセット
  const setMoney = (value: number) => {
    // 入力がnumberかチェック
    if (!isNaN(value)) {
      setError(false) // エラー状態初期化
      dispatch(setTargetAmount(value))
    } else {
      setError(true) // エラー表示
    }
  }

  // 目標金額を追加
  const addMoney = (value: number) => {
    dispatch(addTargetAmount(value))
    setError(false) // エラー状態初期化
  }

  return (
    <TargetAmountComponent
      money={targetAmount}
      isError={error}
      isDisabled={false}
      setMoney={(value) => setMoney(value)}
      addMoney={(value) => addMoney(value)}
    />
  )
}
