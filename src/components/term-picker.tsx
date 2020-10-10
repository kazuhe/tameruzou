// React API
import React, { FC } from 'react'

// Css
import styles from '../styles/term-picker.module.scss'

// SVG Component
import { Edit } from '../images/edit'

// Third party library
import DatePicker from 'react-datepicker'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

interface Props {
  startDate: Date | null
  endDate: Date | null
  isError: boolean
  handleStartDate: (date: Date) => void
  handleEndDate: (date: Date) => void
}

const now = new Date()
const placeholderText = now.getFullYear() + '年' + (now.getMonth() + 1) + '月'

export const TermPickerComponent: FC<Props> = (props: Props) => (
  <Tippy content="開始月より終了月を後に設定してください" visible={props.isError} className="tameruzou">
    <div>
      <div className={styles.unit}>
        <p>開始月</p>
        <DatePicker
          selected={props.startDate}
          onChange={(date: Date) => props.handleStartDate(date)}
          dateFormat="yyyy年MM月"
          placeholderText={placeholderText}
          showMonthYearPicker
        />
        <Edit size={18} />
      </div>
      <div className={styles.unit}>
        <p>終了月</p>
        <DatePicker
          selected={props.endDate}
          onChange={(date: Date) => props.handleEndDate(date)}
          dateFormat="yyyy年MM月"
          placeholderText={placeholderText}
          showMonthYearPicker
        />
        <Edit size={18} />
      </div>
    </div>
  </Tippy>
)
