// React API
import React, { FC } from 'react'

// Css
import styles from '../styles/input.module.scss'

interface Props {
  targetAmount: number
  isDisabled?: boolean
  handleInput: (value: number) => void
}

export const InputMoneyComponent: FC<Props> = (props: Props) => {
  return (
    <div>
      <input
        className={styles.input}
        type="tel"
        placeholder="1,000,000"
        value={props.targetAmount}
        onChange={(e) => props.handleInput(Number(e.target.value))}
      />
    </div>
  )
}
