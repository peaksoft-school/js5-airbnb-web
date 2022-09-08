import { configureStore } from '@reduxjs/toolkit'
import addAnnountcementSlice from './slices/addAnnountcementSlice'
import adminApplicationSlice from './slices/adminApplicationSlice'
import getUserAnnouncementCard from './slices/getUserAnniuncement'
// import addAnnountcementSlice from './slices/addAnnountcementSlice'
// import adminApplicationSlice from './slices/adminApplicationSlice'
// eslint-disable-next-line import/no-cycle
// import addAnnountcementSlice from './slices/addAnnountcementSlice'
// eslint-disable-next-line import/order
import editAnnountcementSlice from './slices/editAnnountcementSlice'
import LoginSlice from './slices/LoginSlice'

const store = configureStore({
   reducer: {
      login: LoginSlice.reducer,
      getUserAnnouncement: getUserAnnouncementCard.reducer,
      applications: adminApplicationSlice.reducer,
      addAnnountcement: addAnnountcementSlice.reducer,
      editAnnountcement: editAnnountcementSlice.reducer,
   },
})
export default store
