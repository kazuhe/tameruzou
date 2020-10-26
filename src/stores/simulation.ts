import { createSlice } from '@reduxjs/toolkit'
import { Bonus, Month } from '../types'

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
    toggleBonusMonth: (state, action) => {
      const key: keyof Month = action.payload
      console.log(key)
      state.bonus.months[key] = !state.bonus.months[key]

      // Object.keys(state.bonus.months).filter((key) => key == action.payload.id)
      // Object.entries(state.bonus.months).forEach(([key, value]) => {
      //   const numKey = Number(key)
      //   console.log(key)
      //   console.log(action.payload)
      //   console.log(state.bonus.months[1])
      //   if (key == action.payload) {
      //     // console.log(key)
      //     // state.bonus.months.item(key) = !state.bonus.months.item(key)
      //   }
      // })
    },
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
  toggleBonusMonth,
  addBonus,
  deleteBonus,
  handleBonusError,
} = simulation.actions

// Reducerをエクスポート
export default simulation.reducer
