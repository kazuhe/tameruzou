import React, { FC } from 'react'

type Props = {
  size?: number
  color?: string
}

export const Arrow: FC<Props> = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color || '#fff'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H6M12 5l-7 7 7 7" />
    </svg>
  )
}
