import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import { Button } from './button'

import tameruzou from '../images/tameruzou.svg'

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
        <Button color="deep" text="Start" onClick={() => history.push('/simulate')} />
      </div>
    </div>
  )
}

export default Home
