// React API
import React, { FC } from 'react'

// Original components
import { ResultContainer } from '../containers/result'

// Css
import styles from '../styles/pages/result.module.scss'

export const Result: FC = () => (
  <div className={styles.wrap}>
    <ResultContainer />
    <div className={styles.content}></div>
  </div>
)
