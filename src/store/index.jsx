/* eslint-disable import/order */
import { configureStore } from '@reduxjs/toolkit'
import adminApplicationSlice from './slices/adminApplicationSlice'
import addAnnountcementSlice from './slices/addAnnountcementSlice'
import innerPageSlice from './slices/getAdminApplicationById'
import editAnnountcementSlice from './slices/editAnnountcementSlice'
import LoginSlice from './slices/LoginSlice'
import adminInnerPageSlice from './slices/adminInnerPageSlice'

const store = configureStore({
   reducer: {
      login: LoginSlice.reducer,
      applications: adminApplicationSlice.reducer,
      addAnnountcement: addAnnountcementSlice.reducer,
      getAdminApplicationById: innerPageSlice.reducer,
      editAnnountcement: editAnnountcementSlice.reducer,
      adminInnerPage: adminInnerPageSlice.reducer,
   },
})
export default store
