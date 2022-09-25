import { configureStore } from '@reduxjs/toolkit'
import addAnnountcementSlice from './slices/addAnnountcementSlice'
import adminApplicationSlice from './slices/adminApplicationSlice'
import editAnnountcementSlice from './slices/editAnnountcementSlice'
import innerPageSlice from './slices/getAdminApplicationById'
import apartmentHouseSlice, {
   percentegCardSlice,
} from './slices/getApartmentHouseInnerPage'
import getFeedbackSlice from './slices/getFeedbackInnerPage'
import getUserAnnouncementCard from './slices/getUserAnniuncement'
import LoginSlice from './slices/LoginSlice'
import postFeedbackSlice from './slices/postFeedbackInnerPageSlice'
import postLikedFeedbackSlice from './slices/postLikesInnerPageFeedback'

const store = configureStore({
   reducer: {
      login: LoginSlice.reducer,
      getUserAnnouncement: getUserAnnouncementCard.reducer,
      applications: adminApplicationSlice.reducer,
      addAnnountcement: addAnnountcementSlice.reducer,
      getAdminApplicationById: innerPageSlice.reducer,
      editAnnountcement: editAnnountcementSlice.reducer,
      getApartmentHouseInnerpage: apartmentHouseSlice.reducer,
      getPercentegCar: percentegCardSlice.reducer,
      getFeedback: getFeedbackSlice.reducer,
      postLikes: postLikedFeedbackSlice.reducer,
      postFeedback: postFeedbackSlice.reducer,
   },
})
export default store
