import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import { IconButton } from './icon_button'

import tameruzou from '../images/tameruzou.svg'
import graph from '../images/graph.svg'
import goal from '../images/goal.svg'

import './home.scss'

const Home: FC = () => {
  const history = useHistory()

  return (
    <div className="home">
      <div className="home_inner">
        <div className="home_icon">
          <img src={tameruzou} alt="" />
        </div>
        <h1 className="home_title">貯金シミュレーター</h1>
        <p className="home_text">
          Let&apos;s simulate
          <br />
          the future
        </p>
        <IconButton
          icon={goal}
          color="deep"
          title="目標貯金額からシミュレート"
          text="Simulate from target amount"
          onClick={() => history.push('/simulate')}
        />
        <IconButton
          icon={graph}
          color="high"
          title="毎月の金額からシミュレート"
          text="Simulate from monthly amount"
          onClick={() => history.push('/simulate')}
        />
      </div>
    </div>
  )
}

export default Home
