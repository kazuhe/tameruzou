// React API
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

// SVG Component
import { Arrow } from '../images/arrow'

// Css
import 'react-datepicker/dist/react-datepicker.css'
import './simulate.scss'

// Third party library
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

interface Props {
  simulateItems: {
    startDate: Date | null
    endDate: Date | null
    targetAmount: number
    monthlyAmount: string
    isTargetAmountAlert: boolean
    isTermAlert: boolean
  }
  handleInput: (value: number) => void
  handleStartDate: (date: Date | any) => void
  handleEndDate: (date: Date | any) => void
}

const SimulateComponent: FC<Props> = (props: Props) => (
  <div className="simulate">
    <div className="simulate_header">
      <Link to="/">
        <Arrow />
      </Link>
      <div className="simulate_result">
        <p>毎月の必要貯金額</p>
        <div className="simulate_result">¥ {props.simulateItems.monthlyAmount}</div>
      </div>
    </div>
    <div className="simulate_body">
      <label>目標金額</label>
      <Tippy
        content="半角数字を入力してください"
        visible={props.simulateItems.isTargetAmountAlert}
        className="tameruzou"
      >
        <input
          type="tel"
          onChange={(e) => props.handleInput(Number(e.target.value))}
          placeholder="1,000,000"
          value={props.simulateItems.targetAmount}
        />
      </Tippy>
      <label>期間</label>
      <Tippy
        content="開始月より終了月を後に設定してください"
        visible={
          props.simulateItems.startDate != null && props.simulateItems.endDate != null
            ? dayjs(props.simulateItems.endDate || 0).diff(dayjs(props.simulateItems.startDate || 0), 'month') > 0
              ? false
              : true
            : false
        }
        className="tameruzou"
      >
        <div className="simulate_term">
          <DatePicker
            selected={props.simulateItems.startDate}
            onChange={(date) => props.handleStartDate(date)}
            dateFormat="yyyy年MM月"
            placeholderText="開始月"
            showMonthYearPicker
          />
          <DatePicker
            selected={props.simulateItems.endDate}
            onChange={(date) => props.handleEndDate(date)}
            dateFormat="yyyy年MM月"
            placeholderText="終了月"
            showMonthYearPicker
          />
        </div>
      </Tippy>
    </div>
    <nav>
      <Link to="/">to return home</Link>
    </nav>
  </div>
)

export default SimulateComponent
