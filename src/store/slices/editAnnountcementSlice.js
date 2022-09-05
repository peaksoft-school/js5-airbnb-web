import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch, { appFile } from '../../api/appFetch'
import {
   addAnnountFileUrl,
   editAnnountUrl,
} from '../../utils/constants/constants'

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
            const formData = new FormData()
            formData.append('file', image.file)
            // eslint-disable-next-line no-await-in-loop
            const response = await appFile({
               url: addAnnountFileUrl,
               body: formData,
            })
            dataWith.images.push(response?.link)
         }
         const response = await appFetch({
            url: `${editAnnountUrl} ${dataWith.id}`,
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
   error: null,
}
const editAnnouncementSlice = createSlice({
   name: 'addAnnoutcement',
   initialState,
   reducers: {},
   extraReducers: {
      [editAnnountcementPost.pending]: (state) => {
         state.status = 'pending'
      },
      [editAnnountcementPost.fulfilled]: (state) => {
         state.status = 'succes'
         state.error = null
      },
      [editAnnountcementPost.rejected]: (state, action) => {
         state.error = action.error
      },
   },
})

export const editAnnoutcementSliceAction = editAnnouncementSlice.actions
export default editAnnouncementSlice
