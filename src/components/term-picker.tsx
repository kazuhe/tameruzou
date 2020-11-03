// React API
import React, { FC } from 'react'

// Css
import styles from '../styles/components/term-picker.module.scss'

// SVG Component
import { Edit } from '../images/edit'

// UI Component
import Tooltip from '@material-ui/core/Tooltip'
import { withStyles } from '@material-ui/core/styles'

// Third party library
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ja from 'date-fns/locale/ja'
registerLocale('ja', ja)

type Props = {
  startDate: Date | null
  endDate: Date | null
  isError: boolean
  handleStartDate: (date: Date) => void
  handleEndDate: (date: Date) => void
}

const CustomTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: '#888',
    fontSize: 13,
    margin: 0,
  },
}))(Tooltip)

const now = new Date()
const placeholderText = now.getFullYear() + '年' + (now.getMonth() + 1) + '月'

export const TermPickerComponent: FC<Props> = (props: Props) => (
  <CustomTooltip open={props.isError} title="開始月より終了月を後に設定してください" placement="top">
    <div>
      <div className={styles.unit}>
        <p>開始月</p>
        <DatePicker
          selected={props.startDate}
          onChange={(date: Date) => props.handleStartDate(date)}
          dateFormat="yyyy年MM月"
          placeholderText={placeholderText}
          showMonthYearPicker
          locale="ja"
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
          locale="ja"
        />
        <Edit size={18} />
      </div>
    </div>
  </CustomTooltip>
)
