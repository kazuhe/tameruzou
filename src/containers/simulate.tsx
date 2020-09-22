// React API
import React, { FC, useState, useEffect } from 'react'

// Original components
import SimulateComponent from '../components/simulate'

// Third party library
import dayjs from 'dayjs'

interface SimulateItems {
  startDate: Date | null
  endDate: Date | null
  targetAmount: number
  monthlyAmount: string
  inputMessage: boolean
}

const useSimulate = (simulateItems: SimulateItems): any => {
  const [simulate, setSimulate] = useState(simulateItems)

  const handleStartDate = (date: Date) => {
    setSimulate({ ...simulate, startDate: date })
  }

  const handleEndDate = (date: Date) => {
    setSimulate({ ...simulate, endDate: date })
  }

  const handleInput = (value: number) => {
    // 数値を入力した場合
    if (!isNaN(value)) {
      setSimulate({ ...simulate, targetAmount: value, inputMessage: false })

      return
    }

    setSimulate({ ...simulate, inputMessage: true }) // 目標金額のツールチップ（エラー）を表示
    console.log('str')
  }

  useEffect(() => {
    // 毎月の必要貯金額を計算
    const calcMonthlyAmount = () => {
      if (simulate.startDate != null && simulate.endDate != null) {
        const start = dayjs(simulate.startDate)
        const end = dayjs(simulate.endDate)
        const term = end.diff(start, 'month')

        if (end.isAfter(start)) {
          setSimulate({
            ...simulate,
            monthlyAmount: `${Math.floor(simulate.targetAmount / term)}円 × ${end.diff(start, 'month')}ヶ月`,
          })

          return Math.floor(simulate.targetAmount / term)
        }
      }
    }
    const calc = setInterval(calcMonthlyAmount, 1000)

    return () => clearInterval(calc)
  }, [simulate])

  return [simulate, handleStartDate, handleEndDate, handleInput]
}

const SimulateContainer: FC = () => {
  const simulateItems = {
    startDate: null,
    endDate: null,
    targetAmount: 0,
    monthlyAmount: 'Please input',
    inputMessage: false,
  }
  const [simulate, handleStartDate, handleEndDate, handleInput] = useSimulate(simulateItems)

  return (
    <SimulateComponent
      simulateItems={simulate}
      handleInput={(value) => handleInput(value)}
      handleStartDate={(date) => handleStartDate(date)}
      handleEndDate={(date) => handleEndDate(date)}
    />
  )
}

export default SimulateContainer
