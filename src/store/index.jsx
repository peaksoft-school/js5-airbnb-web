/* eslint-disable import/order */
import { configureStore } from '@reduxjs/toolkit'
import adminApplicationSlice from './slices/adminApplicationSlice'
// eslint-disable-next-line import/no-cycle
import addAnnountcementSlice from './slices/addAnnountcementSlice'
import editAnnountcementSlice from './slices/editAnnountcementSlice'
import LoginSlice from './slices/LoginSlice'
import adminUserSlice from './slices/adminUserSlice'
import adminUserDeletSlice from './slices/adminUserDeletSlice'

const store = configureStore({
   reducer: {
      login: LoginSlice.reducer,
      applications: adminApplicationSlice.reducer,
      addAnnountcement: addAnnountcementSlice.reducer,
      editAnnountcement: editAnnountcementSlice.reducer,
      adminUsers: adminUserSlice.reducer,
      adminUsersDelet: adminUserDeletSlice.reducer,
   },
})
export default store
