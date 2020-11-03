// React API
import React, { FC } from 'react'

// Original components
import { InputMoneyComponent } from '../components/input-money'

type Props = {
  money: number
  isError: boolean
  isDisabled?: boolean
  setMoney: (value: number) => void
  addMoney: (value: number) => void
}

const candidates = [5000, 10000, 100000, 1000000]

export const TargetAmountComponent: FC<Props> = (props: Props) => (
  <InputMoneyComponent
    title="目標金額"
    money={props.money}
    candidates={candidates}
    isError={props.isError}
    isDisabled={false}
    setMoney={(value) => props.setMoney(value)}
    addMoney={(value) => props.addMoney(value)}
  />
)
