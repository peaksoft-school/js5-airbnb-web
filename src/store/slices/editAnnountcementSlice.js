import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ApiFetch, { appFile } from '../../api/ApiFetch'
import {
   addAnnountFileUrl,
   editAnnountUrl,
} from '../../utils/constants/fetchConstants'

export const getSingleUserAnnouncement = createAsyncThunk(
   'addAnnoutcement/getSingleUserAnnouncement',
   async (id) => {
      const data = await ApiFetch({
         url: `api/announcements/find/${id}`,
      })
      return data
   }
)
export const editAnnountcementPost = createAsyncThunk(
   'addAnnoutcement/editAnnountcementPost',
   async ({ formObject, photos }, { rejectWithValue }) => {
      try {
         const dataWith = {
            ...formObject,
            images: [],
         }
         // eslint-disable-next-line no-plusplus
         for (let index = 0; index < photos.length; index++) {
            const image = photos[index]
            if (!image.type) {
               const formData = new FormData()
               formData.append('file', image.file)
               // eslint-disable-next-line no-await-in-loop
               const response = await appFile({
                  url: addAnnountFileUrl,
                  body: formData,
               })
               dataWith.images.push(response?.link)
            } else {
               dataWith.images.push(image?.data_url)
            }
         }
         const response = await ApiFetch({
            url: editAnnountUrl + dataWith.id,
            method: 'PUT',
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
   data: null,
   message: null,
}
const editAnnouncementSlice = createSlice({
   name: 'addAnnoutcement',
   initialState,
   reducers: {},
   extraReducers: {
      [editAnnountcementPost.pending]: (state) => {
         state.status = 'pending'
      },
      [editAnnountcementPost.fulfilled]: (state, action) => {
         console.log(action.payload)
         state.status = 'success'
         state.message = action.payload.message
      },
      [editAnnountcementPost.rejected]: (state) => {
         state.status = 'error'
      },
      [getSingleUserAnnouncement.fulfilled]: (state, action) => {
         state.data = action.payload
      },
   },
})

export const editAnnoutcementSliceAction = editAnnouncementSlice.actions
export default editAnnouncementSlice
