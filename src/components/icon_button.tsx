import React, { FC } from 'react'

import './icon_button.scss'

type Props = {
  isDisabled?: boolean
  color: 'high' | 'deep'
  title: string
  text: string
  icon: string
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
}

export const IconButton: FC<Props> = (props: Props) => {
  return (
    <button
      className={'iconButton -' + props.color}
      disabled={props.isDisabled || false}
      onClick={(e) => {
        props.onClick(e)
      }}
    >
      <div className="iconButton_icon">
        <img src={props.icon} alt="" />
      </div>
      <div className="iconButton_text">
        <p>{props.text}</p>
        <h2>{props.title}</h2>
      </div>
    </button>
  )
}
