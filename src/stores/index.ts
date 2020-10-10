import { combineReducers } from '@reduxjs/toolkit'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import simulation from './simulation'

const reducer = combineReducers({
  simulation,
})

// ActionのPayloadにDate型が入る為シリアライズ不可？なので↓のようにチェックを外した状態で'middleware'を登録
const middleware = getDefaultMiddleware({ serializableCheck: false })
export const store = configureStore({ reducer, middleware })

export type RootState = ReturnType<typeof reducer>
