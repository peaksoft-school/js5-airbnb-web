import { configureStore } from '@reduxjs/toolkit'
import addAnnountcementSlice from './slices/addAnnountcementSlice'
import adminApplicationSlice from './slices/adminApplicationSlice'
import editAnnountcementSlice from './slices/editAnnountcementSlice'
import innerPageSlice from './slices/getAdminApplicationById'
import globalSearchSlice from './slices/globalSearchSlice'
import LoginSlice from './slices/LoginSlice'

const store = configureStore({
   reducer: {
      login: LoginSlice.reducer,
      applications: adminApplicationSlice.reducer,
      addAnnountcement: addAnnountcementSlice.reducer,
      getAdminApplicationById: innerPageSlice.reducer,
      editAnnountcement: editAnnountcementSlice.reducer,
      globalSearchValue: globalSearchSlice.reducer,
   },
})
export default store
