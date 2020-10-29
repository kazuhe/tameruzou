import { createSlice } from '@reduxjs/toolkit'
import { Month } from '../types'

type State = {
  targetAmount: {
    money: number
    isTargetAmountError: boolean
  }
  term: {
    startDate: Date | null
    endDate: Date | null
    isTermError: boolean
  }
  bonus: {
    months: Month
    money: number
  }
}

const initialState: State = {
  targetAmount: {
    money: 0,
    isTargetAmountError: false,
  },
  term: {
    startDate: null,
    endDate: null,
    isTermError: false,
  },
  bonus: {
    months: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
    },
    money: 0,
  },
}

const simulation = createSlice({
  // このcreateSliceを識別するための名前
  name: 'simulation',

  // ステートの初期データ
  initialState,

  // ステートを変更する為の処理 - 第一引数にstateを受け取り、実行時に渡した引数は第二引数にactionとして受け取る - 実際の値はaction.payloadで取り出す
  reducers: {
    // targetAmount
    setTargetAmount: (state, action) => {
      state.targetAmount.money = action.payload
    },
    addTargetAmount: (state, action) => {
      state.targetAmount.money = state.targetAmount.money + action.payload
    },
    handlError: (state, action) => {
      state.targetAmount.isTargetAmountError = action.payload
    },

    // term
    setStartDate: (state, action) => {
      state.term.startDate = action.payload
    },
    endStartDate: (state, action) => {
      state.term.endDate = action.payload
    },
    handleTermError: (state, action) => {
      state.term.isTermError = action.payload
    },

    // bonus
    toggleBonusMonth: (state, action) => {
      const key: keyof Month = action.payload
      console.log(key)
      state.bonus.months[key] = !state.bonus.months[key]
    },
    setBonusMoney: (state, action) => {
      state.bonus.money = action.payload
    },
  },
})

// Action Creatorsをエクスポート
export const {
  setTargetAmount,
  addTargetAmount,
  handlError,
  setStartDate,
  endStartDate,
  handleTermError,
  toggleBonusMonth,
  setBonusMoney,
} = simulation.actions

// Reducerをエクスポート
export default simulation.reducer
