import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { BasicButton } from '../commom/icon_button'

import tameruzou from '../../assets/images/tameruzou.svg'
import graph from '../../assets/images/graph.svg'

const Home: FC = () => {
  return (
    <div className="app">
      <img src={tameruzou} alt="" />
      <p className="app_subTitle">貯金シミュレーター</p>
      <h1>ためるゾウ</h1>
      <p className="app_text">
        毎月いくら貯金すれば目標に到達するのか？
        <br />
        期間を決めてコツコツ貯めるといくら貯まるのか？
        <br />
        下のボタンから選択して簡単シミュレート！
      </p>
      <nav>
        <Link to="/">index</Link>
        <Link to="/simulate">simulate</Link>
      </nav>
      <BasicButton
        icon={graph}
        size="Big"
        title="毎月の金額からシミュレート"
        text="Simulate from monthly amount"
        onClick={() => console.log('Click')}
      />
    </div>
  )
}

export default Home
