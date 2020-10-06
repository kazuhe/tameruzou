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
  setMoney: (value: number) => void
  addMoney: (value: number) => void
}

const candidates = [5000, 10000, 100000, 1000000]

export const InputMoneyComponent: FC<Props> = (props: Props) => (
  <>
    <Tippy content="半角数字を入力してください" visible={props.isError} className="tameruzou">
      <div className={styles.wrap}>
        <label htmlFor="inputMoney">目標金額</label>
        <input
          type="tel"
          name="inputMoney"
          value={props.targetAmount.toLocaleString()}
          onChange={(e) => props.setMoney(Number(e.target.value.split(',').join('')))}
        />
        <span>円</span>
      </div>
    </Tippy>
    <ul className={styles.list}>
      {candidates.map((candidate) => (
        <li key={candidate} onClick={() => props.addMoney(candidate)}>
          +{candidate.toLocaleString()}
        </li>
      ))}
    </ul>
  </>
)
