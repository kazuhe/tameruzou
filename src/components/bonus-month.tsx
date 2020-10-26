// React API
import React, { FC } from 'react'

// Css
import styles from '../styles/bonus-month.module.scss'

// Types
import { Month } from '../types'

interface Props {
  months: Month
  activeMonth: number[]
  toggleMonth: (month: number) => void
}

export const BonusMonthComponent: FC<Props> = (props: Props) => (
  <div className={styles.wrap}>
    <p>クリックしてアクティブにしてください（複数選択可）</p>
    <ul className={styles.list}>
      {Object.keys(props.months).map((month) => (
        <li
          key={month}
          onClick={() => props.toggleMonth(Number(month))}
          className={props.activeMonth.some((n) => n === Number(month)) ? styles.active : ''}
        >
          {month}月
        </li>
      ))}
    </ul>
  </div>
)
