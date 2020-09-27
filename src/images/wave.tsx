import React, { FC } from 'react'

type Props = {
  color?: string
}

export const Wave: FC<Props> = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill={props.color || '#3c1e48'}
        fillOpacity="1"
        d="M0,64L60,101.3C120,139,240,213,360,213.3C480,213,600,139,720,117.3C840,96,960,128,1080,138.7C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  )
}
