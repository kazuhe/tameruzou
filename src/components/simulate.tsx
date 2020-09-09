import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import './simulate.scss'

interface Props {
  monthlyAmount: number
  term: string
  handleInput: (value: number) => void
  // handleInput: (e: InputEvent) => void
}

const SimulateComponent: FC<Props> = (props: Props) => (
  <div className="simulate">
    <div className="simulate_header">
      <p>毎月の必要貯金額</p>
      <div>
        ¥ {props.monthlyAmount} × {props.term}
      </div>
      {/* <div>¥ 8,420 × 5年4ヶ月</div> */}
    </div>
    <div className="simulate_body">
      <label>目標金額</label>
      <input
        type="text"
        onChange={(e) => props.handleInput(Number(e.target.value))}
        placeholder="1,000,000"
        value={props.monthlyAmount}
      />
      <label>期間</label>
      <div className="simulate_term">
        <input type="text" placeholder="1,000,000" />
        <input type="text" placeholder="1,000,000" />
      </div>
    </div>
    <nav>
      <Link to="/">to return home</Link>
    </nav>
  </div>
)

export default SimulateComponent
