// React API
import React, { FC } from 'react'

// Css
import styles from '../styles/components/bonus-month.module.scss'

type Props = {
  months: { id: number; value: string }[]
  activeMonth: number[]
  toggleMonth: (month: number) => void
}

export const BonusMonthComponent: FC<Props> = (props: Props) => (
  <div className={styles.wrap}>
    <p>クリックしてアクティブにしてください（複数選択可）</p>
    <ul className={styles.list}>
      {props.months.map((month) => (
        <li
          key={month.id}
          onClick={() => props.toggleMonth(month.id)}
          className={props.activeMonth.some((n) => n === month.id) ? styles.active : ''}
        >
          {month.value}
        </li>
      ))}
    </ul>
  </div>
)
