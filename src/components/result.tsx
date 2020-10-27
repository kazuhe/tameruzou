// React API
import React, { FC } from 'react'

// Css
import styles from '../styles/components/result.module.scss'

// UI Component
import Switch from '@material-ui/core/Switch'

interface Props {
  startDate: string
  endDate: string
  term: string
  targetAmount: number
  monthlyAmount: number
  switchState: boolean
  handleSwitch: () => void
}

export const ResultComponent: FC<Props> = (props: Props) => {
  const bonusColor = { background: '#222d65' }

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.term}>
          <p>{props.startDate}</p>-<p>{props.endDate}</p>
        </div>
        {props.switchState ? (
          <div className={styles.circle}>
            <div>
              <p className={styles.circle_title}>毎月の貯金額</p>
              <p className={styles.circle_money}>
                {props.monthlyAmount.toLocaleString()}
                <span>円</span>
              </p>
            </div>
          </div>
        ) : (
          <div className={styles.circle} style={bonusColor}>
            <div>
              <p className={styles.circle_title}>ボーナス月の貯金額</p>
              <p className={styles.circle_money}>
                35,000<span>円</span>
              </p>
            </div>
          </div>
        )}
        <div className={styles.switch}>
          <Switch
            checked={props.switchState}
            onChange={props.handleSwitch}
            name="checkedA"
            color="default"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <p>{props.switchState ? 'ボーナス月の貯金額を表示' : '毎月の貯金額を表示'}</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          あなたが{props.term}で目標の{props.targetAmount.toLocaleString()}円を貯めるには
        </p>
        <p>
          <span>毎月</span>
          {props.monthlyAmount.toLocaleString()}
          <span>円</span>
        </p>
        <p>
          <span>ボーナス月</span>35,000<span>円</span>
        </p>
        <p>貯金していく必要があります。</p>
      </div>
    </>
  )
}
