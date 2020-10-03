// React API
import React, { FC } from 'react'

// Css
import styles from '../styles/input.module.scss'

type Props = {
  isDisabled?: boolean
}

export const Input: FC<Props> = (props: Props) => {
  return <input className={styles.input} type="tel" placeholder="1,000,000" value={0} />
}
