// React API
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

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
    inputMessage: boolean
  }
  handleInput: (value: number) => void
  handleStartDate: (date: Date | any) => void
  handleEndDate: (date: Date | any) => void
}

const SimulateComponent: FC<Props> = (props: Props) => (
  <div className="simulate">
    <div className="simulate_header">
      <p>毎月の必要貯金額</p>
      <div>¥ {props.simulateItems.monthlyAmount}</div>
    </div>
    <div className="simulate_body">
      <label>目標金額</label>
      <Tippy content="半角数字を入力してください" visible={props.simulateItems.inputMessage} className="top-end">
        <input
          type="tel"
          onChange={(e) => props.handleInput(Number(e.target.value))}
          placeholder="1,000,000"
          value={props.simulateItems.targetAmount}
        />
      </Tippy>
      <label>期間</label>
      <div className="simulate_term">
        <DatePicker
          selected={props.simulateItems.startDate}
          onChange={(date) => props.handleStartDate(date)}
          dateFormat="yyyy年MM月"
          placeholderText="開始期間"
          showMonthYearPicker
        />
        <DatePicker
          selected={props.simulateItems.endDate}
          onChange={(date) => props.handleEndDate(date)}
          dateFormat="yyyy年MM月"
          placeholderText="終了期間"
          showMonthYearPicker
        />
      </div>
      <div className="simulate_warning">
        {props.simulateItems.startDate != null && props.simulateItems.endDate != null
          ? dayjs(props.simulateItems.endDate || 0).diff(dayjs(props.simulateItems.startDate || 0), 'month') > 0
            ? ''
            : '※開始期間より終了期間を後に設定してください'
          : ''}
      </div>
    </div>
    <nav>
      <Link to="/">to return home</Link>
    </nav>
  </div>
)

export default SimulateComponent
