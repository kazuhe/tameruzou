import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import './simulate.scss'

const Simulate: FC = () => {
  return (
    <div className="simulate">
      <div>
        <label>目標金額</label>
        <input type="text" placeholder="1,000,000" />
      </div>
      <nav>
        <Link to="/">to return home</Link>
      </nav>
    </div>
  )
}

export default Simulate
