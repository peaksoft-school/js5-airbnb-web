import { configureStore } from '@reduxjs/toolkit'
import addAnnouncementPosts from './slices/addAnnouncementSlice'

const store = configureStore({
   reducer: {
      addAnnoutcement: addAnnouncementPosts.reducer,
   },
})
export default store
