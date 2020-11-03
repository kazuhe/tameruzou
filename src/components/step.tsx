// React API
import React, { FC } from 'react'

// Css
import styles from '../styles/components/step.module.scss'

type Props = {
  current?: number
  title: string
  text?: string
  optional?: boolean
}

export const Step: FC<Props> = (props: Props) => (
  <div className={styles.step}>
    {props.current ? (
      <nav className={styles.nav}>
        STEP<span className={styles.current}> {props.current}</span>/4
        {props.optional ? <span className={styles.optional}>省略可</span> : ''}
      </nav>
    ) : (
      ''
    )}
    <h2 className={styles.title}>{props.title}</h2>
    <p className={styles.text}>{props.text}</p>
  </div>
)
