import { configureStore } from '@reduxjs/toolkit'
import getUserAnnouncementCard from './slices/getUserAnniuncement'
// eslint-disable-next-line import/no-cycle
import LoginSlice from './slices/LoginSlice'

const Store = configureStore({
   reducer: {
      login: LoginSlice.reducer,
      getUserAnnouncement: getUserAnnouncementCard.reducer,
   },
})
export default Store
