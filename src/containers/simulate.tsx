import React, { FC, useState } from 'react'

import SimulateComponent from '../components/simulate'

// const useSimulate = () => {
//   const [monthlyAmount, setMonthlyAmount] = useState(0)

//   const handleInput = (value: number) => {
//     setMonthlyAmount(value)
//   }

//   return [monthlyAmount, handleInput]
// }

const SimulateContainer: FC = () => {
  const [monthlyAmount, setMonthlyAmount] = useState(0)

  const handleInput = (value: number) => {
    setMonthlyAmount(value)
  }

  return (
    <SimulateComponent monthlyAmount={monthlyAmount} term="2020/07/30" handleInput={(value) => handleInput(value)} />
  )
}

export default SimulateContainer
