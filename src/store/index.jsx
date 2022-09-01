/* eslint-disable import/order */
import { configureStore } from '@reduxjs/toolkit'
import getUserAnnouncementCard from './slices/getUserAnniuncement'
import adminApplicationSlice from './slices/adminApplicationSlice'
// eslint-disable-next-line import/no-cycle
import addAnnountcementSlice from './slices/addAnnountcementSlice'
import LoginSlice from './slices/LoginSlice'

const store = configureStore({
   reducer: {
      login: LoginSlice.reducer,
      getUserAnnouncement: getUserAnnouncementCard.reducer,
      applications: adminApplicationSlice.reducer,
      addAnnountcement: addAnnountcementSlice.reducer,
   },
})
export default store
