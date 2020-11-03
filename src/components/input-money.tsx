// React API
import React, { FC } from 'react'

// Css
import styles from '../styles/components/input-money.module.scss'

// UI Component
import Tooltip from '@material-ui/core/Tooltip'
import { withStyles } from '@material-ui/core/styles'

type Props = {
  title: string
  money: number
  candidates?: number[]
  isError: boolean
  isDisabled?: boolean
  setMoney: (value: number) => void
  addMoney?: (value: number) => void
}

const CustomTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: '#888',
    fontSize: 13,
    margin: 0,
  },
}))(Tooltip)

export const InputMoneyComponent: FC<Props> = (props: Props) => {
  const addMoney = props.addMoney || (() => false)

  return (
    <>
      <CustomTooltip open={props.isError} title="半角数字を入力してください" placement="top-end">
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
      </CustomTooltip>
      {props.candidates ? (
        <ul className={styles.list}>
          {props.candidates.map((candidate) => (
            <li key={candidate} onClick={() => addMoney(candidate)}>
              +{candidate.toLocaleString()}
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </>
  )
}
