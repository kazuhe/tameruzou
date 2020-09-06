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
      <img className="home_image" src={tameruzou} alt="" />
      <p className="home_subTitle">貯金シミュレーター</p>
      <h1>ためるゾウ</h1>
      <p className="home_text">
        毎月いくら貯金すれば目標に到達するのか？
        <br />
        期間を決めてコツコツ貯めるといくら貯まるのか？
        <br />
        下のボタンから選択して簡単シミュレート！
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
  )
}

export default Home
