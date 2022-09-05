import { configureStore } from '@reduxjs/toolkit'
import adminApplicationSlice from './slices/adminApplicationSlice'
// eslint-disable-next-line import/no-cycle
import addAnnountcementSlice from './slices/addAnnountcementSlice'
import editAnnountcementSlice from './slices/editAnnountcementSlice'
import LoginSlice from './slices/LoginSlice'

const store = configureStore({
   reducer: {
      login: LoginSlice.reducer,
      applications: adminApplicationSlice.reducer,
      addAnnountcement: addAnnountcementSlice.reducer,
      editAnnountcement: editAnnountcementSlice.reducer,
   },
})
export default store
