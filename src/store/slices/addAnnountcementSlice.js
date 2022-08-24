import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch, { appFile } from '../../api/appFetch'
import {
   addAnnoutnCementUrl,
   addAnnountFileUrl,
} from '../../utils/constants/constants'

export const addAnnountcementPost = createAsyncThunk(
   'addAnnoutcement/addAnnountcementPost',
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
      [addAnnountcementPost.pending]: (state) => {
         state.status = 'pending'
      },
      [addAnnountcementPost.fulfilled]: (state) => {
         state.status = 'succes'
         state.error = null
      },
      [addAnnountcementPost.rejected]: (state, action) => {
         state.error = action.error
      },
   },
})

export const addAnnoutcementSliceAction = addAnnouncementSlice.actions
export default addAnnouncementSlice
