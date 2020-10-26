// React API
import React, { FC } from 'react'

// Original components
import { BonusMonthComponent } from '../components/bonus-month'

// Redux Toolkit
import { useSelector } from 'react-redux'
import { RootState } from '../stores'
import { useDispatch } from 'react-redux'
import { toggleBonusMonth } from '../stores/simulation'

export const BonusMonthContainer: FC = () => {
  const months = useSelector((state: RootState) => state.simulation.bonus.months)
  const dispatch = useDispatch()

  // activeな月だけの配列を作成
  const activeMonth: number[] = []
  Object.entries(months).forEach(([key, value]) => {
    if (value) activeMonth.push(Number(key))
  })

  // ボーナス月を追加
  const toggleMonth = (month: number) => {
    dispatch(toggleBonusMonth(month))
  }

  return <BonusMonthComponent months={months} activeMonth={activeMonth} toggleMonth={toggleMonth} />
}
