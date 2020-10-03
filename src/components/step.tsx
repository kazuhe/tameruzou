// React API
import React, { FC } from 'react'

// Css
import styles from '../styles/step.module.scss'

interface Props {
  current: number
  title: string
  text?: string
}

export const Step: FC<Props> = (props: Props) => (
  <div className={styles.step}>
    <nav className={styles.nav}>
      STEP<span> {props.current}</span>/4
    </nav>
    <h2 className={styles.title}>{props.title}</h2>

    <p className={styles.text}>{props.text}</p>
  </div>
)
