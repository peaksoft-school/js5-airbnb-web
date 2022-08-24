import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch, { appFile } from '../../api/appFetch'
import {
   addAnnoutnCementUrl,
   addAnnontCementFileUrl,
   // InitialUrl,
} from '../../utils/constants/constants'

// let store
// export const fileStore = (_store) => {
//    store = _store
// }

export const addAnnouncementPost = createAsyncThunk(
   'addAnnoutcement/addAnnouncementPost',
   async ({ formObject, photos }, { rejectWithValue }) => {
      try {
         const dataWith = {
            ...formObject,
            images: [],
         }
         const res = await Promise.all(
            photos.map(async (i) => {
               const resFile = await appFile({
                  url: addAnnontCementFileUrl,
                  body: i.file,
               })
               return resFile?.link
            })
         )
         dataWith.images = res
         const response = await appFetch({
            url: addAnnoutnCementUrl,
            method: 'POST',
            body: dataWith,
         })
         return response
      } catch (error) {
         return rejectWithValue('error')
      }
   }
)

const initialState = {
   status: null,
   error: null,
}
const addAnnouncementSlice = createSlice({
   name: 'addAnnoutcement',
   initialState,
   reducers: {},
   extraReducers: {
      [addAnnouncementPost.pending]: (state) => {
         state.status = 'pending'
      },
      [addAnnouncementPost.fulfilled]: (state) => {
         state.status = 'succes'
         state.error = null
      },
      [addAnnouncementPost.rejected]: (state, action) => {
         state.error = action.error
      },
   },
})

export const addAnnoutcementSliceAction = addAnnouncementSlice.actions
export default addAnnouncementSlice
