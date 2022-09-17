/* eslint-disable consistent-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch, { appFile } from '../../api/appFetch'
import { addAnnountFileUrl } from '../../utils/constants/constants'

const initialState = {
   feedback: [],
   statuss: null,
}

export const postFeedbackInnerPage = createAsyncThunk(
   'postfeedback/getFeedbackInnerPage',
   async (data, { rejectWithValue }) => {
      try {
         const dataWith = {
            ...data,
            images: [],
         }
         // eslint-disable-next-line no-plusplus
         for (let index = 0; index < data.images.length; index++) {
            const image = data.images[index]
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
            url: `api/feedbacks/leave/feedback/${data.id}`,
            method: 'POST',
            body: dataWith,
         })
         return response
      } catch (error) {
         rejectWithValue('error')
      }
   }
)

const postFeedbackSlice = createSlice({
   name: 'postfeedback',
   initialState,
   extraReducers: {
      [postFeedbackInnerPage.pending]: (state) => {
         state.statuss = 'pending'
      },
      [postFeedbackInnerPage.fulfilled]: (state) => {
         state.statuss = 'success'
      },
      [postFeedbackInnerPage.error]: (state) => {
         state.statuss = 'error'
      },
   },
})

export const ActionPost = postFeedbackSlice.actions
export default postFeedbackSlice
