import React, { useState } from 'react'

import '../assets/scss/IconButton.scss'

type Props = {
  isDisabled?: boolean
  size: 'Big' | 'Small'
  title: string
  text: string
  icon?: string
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
}

export const BasicButton = (props: Props): JSX.Element => {
  const [toggle, setToggle] = useState(false)

  return (
    <button
      className={'iconButton -' + props.size}
      disabled={props.isDisabled || false}
      onClick={(e) => {
        setToggle(!toggle)
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
