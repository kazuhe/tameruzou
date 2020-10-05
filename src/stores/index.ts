import { combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

import simulation from './simulation'

const reducer = combineReducers({
  simulation,
})

export const store = configureStore({ reducer })

export type RootState = ReturnType<typeof reducer>
