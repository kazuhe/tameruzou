import React, { FC } from 'react'

import './button.scss'

type Props = {
  isDisabled?: boolean
  color: 'high' | 'deep'
  text: string
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
}

export const Button: FC<Props> = (props: Props) => {
  return (
    <button
      className={'button -' + props.color}
      disabled={props.isDisabled || false}
      onClick={(e) => {
        props.onClick(e)
      }}
    >
      {props.text}
    </button>
  )
}
