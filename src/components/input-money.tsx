// React API
import React, { FC } from 'react'

// Css
import styles from '../styles/components/input-money.module.scss'

// Third party library
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

interface Props {
  title: string
  money: number
  candidates?: number[]
  isError: boolean
  isDisabled?: boolean
  setMoney: (value: number) => void
  addMoney: (value: number) => void
}

export const InputMoneyComponent: FC<Props> = (props: Props) => (
  <>
    <Tippy content="半角数字を入力してください" visible={props.isError} className="tameruzou">
      <div className={styles.wrap}>
        <label htmlFor="inputMoney">{props.title}</label>
        <input
          type="tel"
          name="inputMoney"
          value={props.money.toLocaleString()}
          onChange={(e) => props.setMoney(Number(e.target.value.split(',').join('')))}
        />
        <span>円</span>
      </div>
    </Tippy>
    {props.candidates ? (
      <ul className={styles.list}>
        {props.candidates.map((candidate) => (
          <li key={candidate} onClick={() => props.addMoney(candidate)}>
            +{candidate.toLocaleString()}
          </li>
        ))}
      </ul>
    ) : (
      ''
    )}
  </>
)
