import React, { FC } from 'react'

// Css
import styles from '../styles/button.module.scss'

type Props = {
  isDisabled?: boolean
  text: string
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
}

export const Button: FC<Props> = (props: Props) => {
  return (
    <button
      className={props.isDisabled ? styles.disabled : styles.button}
      disabled={props.isDisabled || false}
      onClick={(e) => {
        props.onClick(e)
      }}
    >
      {props.text}
    </button>
  )
}
