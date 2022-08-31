import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import addAnnountcementSlice from './slices/addAnnountcementSlice'
import editAnnountcementSlice from './slices/editAnnountcementSlice'
import LoginSlice from './slices/LoginSlice'

const Store = configureStore({
   reducer: {
      login: LoginSlice.reducer,
      addAnnountcement: addAnnountcementSlice.reducer,
      editAnnountcement: editAnnountcementSlice.reducer,
   },
})
export default Store
