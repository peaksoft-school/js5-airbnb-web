import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import appFetch from '../../api/appFetch'

const initialState = {
   feedback: [],
   status: null,
}

export const getFeedbackInnerPage = createAsyncThunk(
   'feedback/getFeedbackInnerPage',
   // eslint-disable-next-line consistent-return
   async (data, { rejectWithValue }) => {
      try {
         const response = await appFetch({
            url: `api/feedbacks/${data.id}?page=1&size=${data.size || 3}`,
         })
         return response
      } catch (error) {
         rejectWithValue('error')
      }
   }
)

const getFeedbackSlice = createSlice({
   name: 'feedback',
   initialState,
   extraReducers: {
      [getFeedbackInnerPage.pending]: (state) => {
         state.status = 'pending'
      },
      [getFeedbackInnerPage.fulfilled]: (state, action) => {
         state.feedback = action.payload
         state.status = 'success'
      },
      [getFeedbackInnerPage.error]: (state) => {
         state.status = 'error'
      },
   },
})
export const ActionGet = getFeedbackSlice.actions
export default getFeedbackSlice
