import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from './slices/LoginSlice'
import sentMessageSlice from './slices/sentMessageSlice'

const Store = configureStore({
   reducer: {
      login: LoginSlice.reducer,
      message: sentMessageSlice.reducer,
   },
})
export default Store
