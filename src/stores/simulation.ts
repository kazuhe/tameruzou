import { createSlice } from '@reduxjs/toolkit'

type State = {
  targetAmount: {
    money: number
    isError: boolean
  }
}

const initialState: State = {
  targetAmount: {
    money: 0,
    isError: false,
  },
}

const simulation = createSlice({
  // このcreateSliceを識別するための名前
  name: 'simulation',

  // ステートの初期データ
  initialState,

  // ステートを変更する為の処理 - 第一引数にstateを受け取り、実行時に渡した引数は第二引数にactionとして受け取る - 実際の値はaction.payloadで取り出す
  reducers: {
    setTargetAmount: (state, action) => {
      state.targetAmount.money = action.payload
    },
    addTargetAmount: (state, action) => {
      state.targetAmount.money = state.targetAmount.money + action.payload
    },
    handlError: (state, action) => {
      state.targetAmount.isError = action.payload
    },
  },
})

// Action Creatorsをエクスポート
export const { setTargetAmount, addTargetAmount, handlError } = simulation.actions

// Reducerをエクスポート
export default simulation.reducer
