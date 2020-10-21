// React API
import React, { FC, useState } from 'react'

// Original components
import { ResultComponent } from '../components/result'

// Redux Toolkit
import { useSelector } from 'react-redux'
import { RootState } from '../stores'

// Third party library
import dayjs from 'dayjs'

// Types
import { Bonus } from '../types'

export const ResultContainer: FC = () => {
  const targetAmount = useSelector((state: RootState) => state.simulation.targetAmount.money)
  const startDate = useSelector((state: RootState) => state.simulation.term.startDate)
  const endDate = useSelector((state: RootState) => state.simulation.term.endDate)

  // 貯金期間を計算
  const diff = dayjs(endDate || 0).diff(dayjs(startDate || 0), 'month') + 1
  const getYearMonth = () => {
    const year = Math.floor(diff / 12)
    const month = diff % 12

    if (!month) return `${year}年`

    return year ? `${year}年${month}ヶ月` : `${month}ヶ月`
  }

  // 毎月の貯金額を計算
  const monthlyAmount = targetAmount / diff

  // const setLabels = () => {
  //   for (let i = 0; i < diff; i++) {
  //     labels.push(
  //       dayjs(startDate || 0)
  //         .add(i, 'month')
  //         .format('MM/YYYY')
  //     )
  //   }
  // }
  // setLabels()

  // dataに月ごとの貯金額をセット
  // const data: number[] = []
  // const monthlyAmount = targetAmount / diff
  // const setData = () => {
  //   for (let i = 0; i < diff; i++) {
  //     data.push((monthlyAmount * i) / 10000)
  //   }
  // }
  // setData()

  // Switch 状態管理
  const [switchState, setSwitchState] = useState(true)
  const handleSwitchState = () => {
    setSwitchState(!switchState)
  }

  return (
    <ResultComponent
      startDate={dayjs(startDate || 0).format('YYYY年MM月')}
      endDate={dayjs(endDate || 0).format('YYYY年MM月')}
      term={getYearMonth()}
      targetAmount={targetAmount}
      monthlyAmount={monthlyAmount}
      switchState={switchState}
      handleSwitch={handleSwitchState}
    />
  )
}
