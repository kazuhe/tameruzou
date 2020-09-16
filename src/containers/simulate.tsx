// React API
import React, { FC, useState } from 'react'

// Original components
import SimulateComponent from '../components/simulate'

// Third party library
import dayjs from 'dayjs'

// 毎月の必要貯金額を計算
type CalcMonthlyAmount = (startDate: string | null, endDate: string | null, targetAmount: number) => number

const calcMonthlyAmount: CalcMonthlyAmount = (startDate, endDate, targetAmount) => {
  // nullチェック
  if (startDate != null && endDate != null) {
    const start = dayjs(startDate)
    const end = dayjs(endDate)
    const term = end.diff(start, 'month')

    if (end.isAfter(start)) {
      return Math.floor(targetAmount / term)
    }
  }

  return 0
}

const SimulateContainer: FC = () => {
  const [targetAmount, setTargetAmount] = useState(0)
  const handleInput = (value: number) => {
    setTargetAmount(value)
  }

  const [startDate, setStartDate] = useState(null)
  const handleStartDate = (date: Date | any) => {
    setStartDate(date)
  }

  const [endDate, setEndDate] = useState(null)
  const handleEndDate = (date: Date | any) => {
    setEndDate(date)
  }

  const monthlyAmount = calcMonthlyAmount(startDate, endDate, targetAmount)

  return (
    <SimulateComponent
      monthlyAmount={monthlyAmount}
      targetAmount={targetAmount}
      startDate={startDate}
      endDate={endDate}
      handleInput={(value) => handleInput(value)}
      handleStartDate={(date) => handleStartDate(date)}
      handleEndDate={(date) => handleEndDate(date)}
    />
  )
}

export default SimulateContainer
