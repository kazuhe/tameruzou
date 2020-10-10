// React API
import React, { FC } from 'react'

// Original components
import { TermPickerComponent } from '../components/term-picker'

// Third party library
import dayjs from 'dayjs'

// Redux Toolkit
import { useSelector } from 'react-redux'
import { RootState } from '../stores'
import { useDispatch } from 'react-redux'

import { setStartDate, endStartDate, handleTermError } from '../stores/simulation'

export const TermPickerContainer: FC = () => {
  const dispatch = useDispatch()

  const startDate = useSelector((state: RootState) => state.simulation.term.startDate)
  const endDate = useSelector((state: RootState) => state.simulation.term.endDate)
  const isError = useSelector((state: RootState) => state.simulation.term.isTermError)

  // 開始月をセット
  const handleStartDate = (date: Date) => {
    // 「終了月」が選択されている場合
    if (endDate != null) {
      // 「終了月」が「開始月」より前の場合エラーをdispatch
      dispatch(handleTermError(dayjs(endDate).diff(dayjs(date), 'month') <= 0 ? true : false))
    }
    dispatch(setStartDate(date))
  }

  // 終了月をセット
  const handleEndDate = (date: Date) => {
    // 「開始月」が選択されている場合
    if (startDate != null) {
      // 「終了月」が「開始月」より前の場合エラーをdispatch
      dispatch(handleTermError(dayjs(date).diff(dayjs(startDate), 'month') <= 0 ? true : false))
    }
    dispatch(endStartDate(date))
  }

  return (
    <TermPickerComponent
      startDate={startDate}
      endDate={endDate}
      isError={isError}
      handleStartDate={(date) => handleStartDate(date)}
      handleEndDate={(date) => handleEndDate(date)}
    />
  )
}
