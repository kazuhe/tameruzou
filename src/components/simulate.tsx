// React API
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

// Css
import 'react-datepicker/dist/react-datepicker.css'
import './simulate.scss'

// Third party library
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'

interface Props {
  monthlyAmount: number
  targetAmount: number
  startDate: string
  endDate: string
  handleInput: (value: number) => void
  handleStartDate: (date: Date | any) => void
  handleEndDate: (date: Date | any) => void
}

const SimulateComponent: FC<Props> = (props: Props) => (
  <div className="simulate">
    <div className="simulate_header">
      <p>毎月の必要貯金額</p>
      {/* <div>¥ {props.targetAmount}</div> */}
      <div>
        ¥ {props.monthlyAmount}
        <span>円</span> × {dayjs(props.endDate).diff(dayjs(props.startDate), 'month')}
        <span>ヶ月</span>
      </div>
    </div>
    <div className="simulate_body">
      <label>目標金額</label>
      <input
        type="text"
        onChange={(e) => props.handleInput(Number(e.target.value))}
        placeholder="1,000,000"
        value={props.targetAmount}
      />
      <div className="simulate_term">
        <div>
          <label>開始期間</label>
          <DatePicker
            selected={dayjs(props.startDate).toDate()}
            onChange={(date) => props.handleStartDate(date)}
            dateFormat="yyyy年MM月"
            showMonthYearPicker
          />
        </div>
        <div>
          <label>終了期間</label>
          <DatePicker
            selected={dayjs(props.endDate).toDate()}
            onChange={(date) => props.handleEndDate(date)}
            dateFormat="yyyy年MM月"
            showMonthYearPicker
          />
        </div>
      </div>
      <div className="simulate_warning">
        {dayjs(props.endDate).diff(dayjs(props.startDate), 'month')
          ? ''
          : '※開始期間より終了期間を後に設定してください'}
      </div>
    </div>
    <nav>
      <Link to="/">to return home</Link>
    </nav>
  </div>
)

export default SimulateComponent
