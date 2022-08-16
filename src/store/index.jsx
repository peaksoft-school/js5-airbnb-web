import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from './slices/LoginSlice'

const Store = configureStore({
   reducer: {
      login: LoginSlice.reducer,
   },
})
export default Store
