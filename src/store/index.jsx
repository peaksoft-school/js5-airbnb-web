import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import addAnnountcementSlice from './slices/addAnnountcementSlice'
import LoginSlice from './slices/LoginSlice'

const Store = configureStore({
   reducer: {
      login: LoginSlice.reducer,
      addAnnountcement: addAnnountcementSlice.reducer,
   },
})
export default Store
