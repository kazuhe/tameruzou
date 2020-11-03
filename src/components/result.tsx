// React API
import React, { FC } from 'react'

// Css
import styles from '../styles/components/result.module.scss'

type Props = {
  startDate: string
  endDate: string
  term: string
  targetAmount: number
  monthlyAmount: number
  bonusMoney: number
  bonusMonth: number[]
}

export const ResultComponent: FC<Props> = (props: Props) => (
  <div className={styles.wrap}>
    <div className={styles.card}>
      <img src={`${process.env.PUBLIC_URL}/result.png`} alt="" />
      <div className={styles.card_inner}>
        <h2>貯金計画</h2>
        <dl>
          <dt>期間 : </dt>
          <dd>
            {props.startDate} ~ {props.endDate} （{props.term}）
          </dd>
        </dl>
        <dl>
          <dt>目標金額 : </dt>
          <dd>{props.targetAmount.toLocaleString()}円</dd>
        </dl>
        <dl>
          <dt>毎月の必要貯金額 : </dt>
          <dd>{props.monthlyAmount.toLocaleString()}円</dd>
        </dl>
        <dl>
          <dt>ボーナス月の貯金額 : </dt>
          <dd>
            {props.bonusMonth.length && props.bonusMoney.toLocaleString()}円（
            {props.bonusMoney && props.bonusMonth.map((month) => <span key={month}>{month}月</span>)}）
          </dd>
        </dl>
        <div className={styles.card_footer}>
          <a
            href={`https://twitter.com/share?url=https://tameruzou.netlify.app/&hashtags=tameruzou&text=【貯金計画】%0a期間 : ${
              props.startDate
            } ~ ${
              props.endDate
            }%0a目標金額 : ${props.targetAmount.toLocaleString()}円%0a毎月の貯金額 : ${props.monthlyAmount.toLocaleString()}円%0aボーナス月の貯金額 : ${props.bonusMoney.toLocaleString()}円`}
          >
            結果をTweet
          </a>
        </div>
      </div>
    </div>
    <p className={styles.text}>※「毎月の必要貯金額」は四捨五入で計算しています。</p>
    <p className={styles.text}>
      ※「ボーナス月の貯金額」はボーナス月（STEP3）とボーナス月の貯金額（STEP4）が選択・入力されていない場合は0円表示となります。
    </p>
  </div>
)
