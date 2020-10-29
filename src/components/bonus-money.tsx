// React API
import React, { FC } from 'react'

// Original components
import { InputMoneyComponent } from '../components/input-money'

interface Props {
  money: number
  isError: boolean
  isDisabled?: boolean
  setMoney: (value: number) => void
}

export const BonusMoneyComponent: FC<Props> = (props: Props) => (
  <InputMoneyComponent
    title="ボーナス月貯金額"
    money={props.money}
    isError={props.isError}
    isDisabled={false}
    setMoney={(value) => props.setMoney(value)}
  />
)
