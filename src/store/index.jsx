/* eslint-disable import/order */
import { configureStore } from '@reduxjs/toolkit'
import adminApplicationSlice from './slices/adminApplicationSlice'
import addAnnountcementSlice from './slices/addAnnountcementSlice'
import getAnnounCementById from './slices/getAdminApplicationById'
import editAnnountcementSlice from './slices/editAnnountcementSlice'
import LoginSlice from './slices/LoginSlice'

const store = configureStore({
   reducer: {
      login: LoginSlice.reducer,
      applications: adminApplicationSlice.reducer,
      addAnnountcement: addAnnountcementSlice.reducer,
      getAnnountcementbyid: getAnnounCementById.reducer,
      editAnnountcement: editAnnountcementSlice.reducer,
   },
})
export default store
