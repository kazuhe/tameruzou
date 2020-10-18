import { createSlice } from '@reduxjs/toolkit'
import { Bonus } from '../types'

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
    bonuses: Bonus[]
    isBonusError: boolean
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
    bonuses: [],
    isBonusError: false,
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

    // bonuses
    addBonus: (state, action) => {
      state.bonus.bonuses = [action.payload, ...state.bonus.bonuses]
    },
    deleteBonus: (state, action) => {
      state.bonus.bonuses = state.bonus.bonuses.filter((bonus) => bonus.id !== action.payload.id)
    },
    handleBonusError: (state, action) => {
      state.bonus.isBonusError = action.payload
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
  addBonus,
  deleteBonus,
  handleBonusError,
} = simulation.actions

// Reducerをエクスポート
export default simulation.reducer
