// React API
import React, { FC, useState } from 'react'

// Original components
import { BonusMoneyComponent } from '../components/bonus-money'

// Redux Toolkit
import { useSelector } from 'react-redux'
import { RootState } from '../stores'
import { useDispatch } from 'react-redux'

import { setBonusMoney } from '../stores/simulation'

export const BonusMoneyContainer: FC = () => {
  const bonusMoney = useSelector((state: RootState) => state.simulation.bonus.money)
  const dispatch = useDispatch()

  // エラー状態管理
  const [error, setError] = useState(false)

  // 目標金額をセット
  const setMoney = (value: number) => {
    // 入力がnumberかチェック
    if (!isNaN(value)) {
      setError(false) // エラー状態初期化
      dispatch(setBonusMoney(value))
    } else {
      setError(true) // エラー表示
    }
  }

  return (
    <BonusMoneyComponent money={bonusMoney} isError={error} isDisabled={false} setMoney={(value) => setMoney(value)} />
  )
}
