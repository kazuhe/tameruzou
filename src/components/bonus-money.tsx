// React API
import React, { FC } from 'react'

// Original components
import { InputMoneyComponent } from '../components/input-money'

interface Props {
  money: number
  isError: boolean
  isDisabled?: boolean
  setMoney: (value: number) => void
  addMoney: (value: number) => void
}

const candidates = [5000, 10000, 100000]

export const BonusMoneyComponent: FC<Props> = (props: Props) => (
  <InputMoneyComponent
    title="ボーナス月貯金額"
    money={props.money}
    candidates={candidates}
    isError={props.isError}
    isDisabled={false}
    setMoney={(value) => props.setMoney(value)}
    addMoney={(value) => props.addMoney(value)}
  />
)
