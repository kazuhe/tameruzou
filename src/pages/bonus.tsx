// React API
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

// Original components
import { Header } from '../components/header'
import { Button } from '../components/button'
import { Step } from '../components/step'
import { BonusListContainer } from '../containers/bonus-list'

// Css
import styles from '../styles/bonus.module.scss'

export const Bonus: FC = () => {
  const history = useHistory()

  return (
    <div className={styles.wrap}>
      <Header />
      <Step current={3} title="ボーナス月の設定をしてください"></Step>
      <div className={styles.content}>
        <BonusListContainer />
      </div>
      <div className={styles.btn}>
        <Button text="次へ" onClick={() => history.push('/term')} />
        <p className={styles.link} onClick={() => history.push('/term')}>
          スキップ
        </p>
      </div>
    </div>
  )
}
