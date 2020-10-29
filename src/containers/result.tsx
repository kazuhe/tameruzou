// React API
import React, { FC, useState } from 'react'

// Original components
import { ResultComponent } from '../components/result'

// Redux Toolkit
import { useSelector } from 'react-redux'
import { RootState } from '../stores'

// Third party library
import dayjs from 'dayjs'

export const ResultContainer: FC = () => {
  const targetAmount = useSelector((state: RootState) => state.simulation.targetAmount.money)
  const bonusMoney = useSelector((state: RootState) => state.simulation.bonus.money)
  const bonusMonth = useSelector((state: RootState) => state.simulation.bonus.months)
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
  const monthlyAmount = Math.floor(targetAmount / diff)

  // ボーナス月の配列を作成
  const activeMonth: number[] = []
  Object.entries(bonusMonth).forEach(([key, value]) => {
    if (value) activeMonth.push(Number(key))
  })

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
      bonusMoney={bonusMoney}
      bonusMonth={activeMonth}
      switchState={switchState}
      handleSwitch={handleSwitchState}
    />
  )
}
