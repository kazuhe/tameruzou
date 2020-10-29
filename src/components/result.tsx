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
  bonusMoney: number
  bonusMonth: number[]
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
                {props.bonusMoney.toLocaleString()}
                <span>円</span>
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
          あなたが<span className={styles.strong}>{props.term}</span>で<br />
          目標金額の<span className={styles.strong}>{props.targetAmount.toLocaleString()}</span>円を貯めるには
        </p>
        <div className={styles.card}>
          毎月
          <span className={styles.strong}>{props.monthlyAmount.toLocaleString()}</span>円<br />
          ボーナス月<span className={styles.strong}>35,000</span>円 （
          {props.bonusMonth.map((month) => (
            <span key={month}>{month}月 / </span>
          ))}
          ）
        </div>
        <p>を貯金していく必要があります。</p>

        <div className={styles.twitter}>
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            className="twitter-share-button"
            data-size="large"
            data-text="Test!"
            data-url="https://tameruzou.netlify.app/"
            data-hashtags="tameruzou"
            data-related="kazuhe__"
            data-show-count="false"
          >
            結果をツイートする
          </a>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
      </div>
    </>
  )
}
