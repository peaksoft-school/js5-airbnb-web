import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import LoginSlice from './slices/LoginSlice'

const Store = configureStore({
   reducer: {
      login: LoginSlice.reducer,
   },
})
export default Store
