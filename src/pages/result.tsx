// React API
import React, { FC } from 'react'

// Original components
import { ResultContainer } from '../containers/result'

// Original components
import { Header } from '../components/header'

// Css
import styles from '../styles/pages/result.module.scss'

export const Result: FC = () => (
  <div className={styles.wrap}>
    <Header />
    <ResultContainer />
    <div className={styles.content}></div>
  </div>
)
