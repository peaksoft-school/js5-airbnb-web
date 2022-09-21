import { configureStore } from '@reduxjs/toolkit'
import addAnnountcementSlice from './slices/addAnnountcementSlice'
import adminApplicationSlice from './slices/adminApplicationSlice'
import adminUserSlice from './slices/adminUserSlice'
import editAnnountcementSlice from './slices/editAnnountcementSlice'
import innerPageSlice from './slices/getAdminApplicationById'
import getUserAnnouncementCard from './slices/getUserAnniuncement'
import LoginSlice from './slices/LoginSlice'

const store = configureStore({
   reducer: {
      login: LoginSlice.reducer,
      getUserAnnouncement: getUserAnnouncementCard.reducer,
      applications: adminApplicationSlice.reducer,
      addAnnountcement: addAnnountcementSlice.reducer,
      getAdminApplicationById: innerPageSlice.reducer,
      editAnnountcement: editAnnountcementSlice.reducer,
      adminUsers: adminUserSlice.reducer,
   },
})
export default store
