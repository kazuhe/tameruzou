// React API
import React, { FC } from 'react'

// Css
import styles from '../styles/input-money.module.scss'

// Third party library
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

interface Props {
  targetAmount: number
  isError: boolean
  isDisabled?: boolean
  handleInput: (value: number) => void
}

export const InputMoneyComponent: FC<Props> = (props: Props) => {
  return (
    <Tippy content="半角数字を入力してください" visible={props.isError} className="tameruzou">
      <div className={styles.wrap}>
        <label htmlFor="inputMoney">目標金額</label>
        <input
          type="tel"
          name="inputMoney"
          value={props.targetAmount.toLocaleString()}
          onChange={(e) => props.handleInput(Number(e.target.value.split(',').join('')))}
        />
        <span>円</span>
      </div>
    </Tippy>
  )
}
