// React API
import React, { FC } from 'react'

// Css
import styles from '../styles/bonus-list.module.scss'

interface Props {
  num: number
  rate: number
  setNum: (value: number) => void
  setRate: (value: number) => void
}

const numbers = [0, 1, 2, 3, 4]
const rates = [0, 15, 30, 50, 100]

const isCurrent = (value: number, propsValue: number): string | undefined => {
  if (value === propsValue) {
    return styles.current
  } else {
    return undefined
  }
}

export const BonusListComponent: FC<Props> = (props: Props) => (
  <>
    <div className={styles.unit}>
      <p>年間回数（任意）</p>
      <ul className={styles.list}>
        {numbers.map((number) => (
          <li key={number} onClick={() => props.setNum(number)} className={isCurrent(number, props.num)}>
            {`${number}回`}
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.unit}>
      <p>ボーナス月の貯金額増加率（任意）</p>
      <ul className={styles.list}>
        {rates.map((rate) => (
          <li key={rate} onClick={() => props.setRate(rate)} className={isCurrent(rate, props.rate)}>
            {`+${rate}%`}
          </li>
        ))}
      </ul>
    </div>
  </>
)
