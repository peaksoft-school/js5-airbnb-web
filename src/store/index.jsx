import { configureStore } from '@reduxjs/toolkit'
import addAnnountcementSlice from './slices/addAnnountcementSlice'
import adminApplicationSlice from './slices/adminApplicationSlice'
import editAnnountcementSlice from './slices/editAnnountcementSlice'
import innerPageSlice from './slices/getAdminApplicationById'
import apartmentHouseSlice, {
   percentegCardSlice,
} from './slices/getApartmentHouseInnerPage'
import getFeedbackSlice from './slices/getFeedbackInnerPage'
import LoginSlice from './slices/LoginSlice'
import postFeedbackSlice from './slices/postFeedbackInnerPageSlice'
import postLikedFeedbackSlice, {
   postDisLikeFeedbackSlice,
} from './slices/postLikesInnerPageFeedback'

const store = configureStore({
   reducer: {
      login: LoginSlice.reducer,
      applications: adminApplicationSlice.reducer,
      addAnnountcement: addAnnountcementSlice.reducer,
      getAdminApplicationById: innerPageSlice.reducer,
      editAnnountcement: editAnnountcementSlice.reducer,
      getApartmentHouseInnerpage: apartmentHouseSlice.reducer,
      getPercentegCar: percentegCardSlice.reducer,
      getFeedback: getFeedbackSlice.reducer,
      postLike: postLikedFeedbackSlice.reducer,
      postDislike: postDisLikeFeedbackSlice.reducer,
      postFeedback: postFeedbackSlice.reducer,
   },
})
export default store
