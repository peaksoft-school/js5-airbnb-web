import { configureStore } from '@reduxjs/toolkit'
import addAnnountcementSlice from './addAnnountcementSlice'
import adminApplicationSlice from './adminApplicationSlice'
import adminCatalogSlice from './adminCatalogSlice'
import editAnnouncementSlice from './editAnnountcementSlice'
import getUserAnnouncement from './getUserAnnouncement'
import globalSearchSlice from './globalSearchSlice'
import LikeAndBookmarkSlice from './LikeAndBookmarkSlice'
import LoginSlice from './LoginSlice'
import SelectFilterInnerPageUserSlice from './SelectFilterInnerPageUserSlice'

const store = configureStore({
   reducer: {
      login: LoginSlice.reducer,
      applications: adminApplicationSlice.reducer,
      addAnnountcement: addAnnountcementSlice.reducer,
      selectfilterData: SelectFilterInnerPageUserSlice.reducer,
      likeandbookmark: LikeAndBookmarkSlice.reducer,
      getUserannouncementcard: getUserAnnouncement.reducer,
      editAnnountcement: editAnnouncementSlice.reducer,
      findbyglobalsearch: globalSearchSlice.reducer,
      getAllHousingAdminCatalog: adminCatalogSlice.reducer,
   },
})
export default store
