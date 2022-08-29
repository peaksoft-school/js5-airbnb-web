/* eslint-disable import/order */
import { configureStore } from '@reduxjs/toolkit'
import adminApplicationSlice from './slices/adminApplicationSlice'
import addAnnountcementSlice from './slices/addAnnountcementSlice'
import LoginSlice from './slices/LoginSlice'

const store = configureStore({
   reducer: {
      login: LoginSlice.reducer,
      applications: adminApplicationSlice.reducer,
      addAnnountcement: addAnnountcementSlice.reducer,
   },
})
export default store
