// React API
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

// Original components
import { ResultContainer } from '../containers/result'

// Css
import styles from '../styles/pages/result.module.scss'

export const Result: FC = () => {
  const history = useHistory()

  return (
    <div className={styles.wrap}>
      <ResultContainer />
      <div className={styles.content}></div>
      <div className={styles.btn}>
        <p className={styles.link} onClick={() => history.push('/home')}>
          再計算
        </p>
      </div>
    </div>
  )
}
