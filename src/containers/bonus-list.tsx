// React API
import React, { FC, useState } from 'react'

// Original components
import { BonusListComponent } from '../components/bonus-list'

// Redux Toolkit
import { useSelector } from 'react-redux'
import { RootState } from '../stores'
import { useDispatch } from 'react-redux'
import { addBonus, deleteBonus, handleBonusError } from '../stores/simulation'

// Types
import { Bonus } from '../types'

export const BonusListContainer: FC = () => {
  const bonuses = useSelector((state: RootState) => state.simulation.bonus.bonuses)
  const isError = useSelector((state: RootState) => state.simulation.bonus.isBonusError)
  const dispatch = useDispatch()

  // Input要素の状態を管理する為のカスタムフック
  const useInputValue = (value: number): [number, (value: number) => void] => {
    const [inputValue, setInputValue] = useState(value)

    const handleInput = (value: number) => {
      // 数値を入力した場合
      if (!isNaN(value)) {
        dispatch(handleBonusError(false)) // エラー状態初期化
        setInputValue(value)
      } else {
        dispatch(handleBonusError(true)) // エラー表示
      }
    }

    return [inputValue, handleInput]
  }

  const [inputValue, handleInput] = useInputValue(0)
  const [selectValue, setSelectValue] = useState(0)
  const [bonysId, setBonysId] = useState(1)

  // ボーナスobjectを追加
  const added = () => {
    const newBonus: Bonus = {
      id: bonysId,
      money: inputValue,
      month: selectValue,
    }
    console.log(newBonus)
    dispatch(addBonus(newBonus))
    handleInput(0)
    setBonysId(bonysId + 1)
  }

  // ボーナスobjectを削除
  const deleted = (bonus: Bonus) => {
    dispatch(deleteBonus(bonus))
  }

  return (
    <BonusListComponent
      bonuses={bonuses}
      isError={isError}
      inputValue={inputValue}
      handleInput={(value) => handleInput(value)}
      setSelectValue={(value) => setSelectValue(value)}
      addBonus={added}
      deleteBonus={deleted}
    />
  )
}
