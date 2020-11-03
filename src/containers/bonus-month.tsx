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

  const monthsCollection = [
    { id: 1, value: '1月' },
    { id: 2, value: '2月' },
    { id: 3, value: '3月' },
    { id: 4, value: '4月' },
    { id: 5, value: '5月' },
    { id: 6, value: '6月' },
    { id: 7, value: '7月' },
    { id: 8, value: '8月' },
    { id: 9, value: '9月' },
    { id: 10, value: '10月' },
    { id: 11, value: '11月' },
    { id: 12, value: '12月' },
  ]

  // activeな月だけの配列を作成
  const activeMonth: number[] = []
  Object.entries(months).forEach(([key, value]) => {
    if (value) activeMonth.push(Number(key))
  })

  // ボーナス月を追加
  const toggleMonth = (month: number) => {
    dispatch(toggleBonusMonth(month))
  }

  return <BonusMonthComponent months={monthsCollection} activeMonth={activeMonth} toggleMonth={toggleMonth} />
}
