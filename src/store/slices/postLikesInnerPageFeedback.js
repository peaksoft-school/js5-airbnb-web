/* eslint-disable consistent-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch from '../../api/appFetch'

const initialState = {
   likes: [],
   status: null,
}

export const postLikesInnerPage = createAsyncThunk(
   'postfeedback/postLikesInnerPage',
   async (id) => {
      const data = await appFetch({
         url: `api/feedbacks/like/${id}`,
         method: 'POST',
      })
      console.log(data)

      return data
   }
)

export const postDiSLikesInnerPage = createAsyncThunk(
   'postfeedback/postDisLikesInnerPage',
   async (id) => {
      const data = await appFetch({
         url: `api/feedbacks/dislike/${id}`,
         method: 'POST',
      })
      console.log(data)
      return data
   }
)

const postLikedFeedbackSlice = createSlice({
   name: 'likes',
   initialState,
   extraReducers: {
      [postLikesInnerPage.pending]: (state) => {
         state.status = 'pending'
      },
      [postLikesInnerPage.fulfilled]: (state) => {
         state.status = 'success'
      },
      [postLikesInnerPage.erroe]: (state) => {
         state.error = 'error'
      },
   },
})

export const postDisLikeFeedbackSlice = createSlice({
   name: 'likes',
   initialState,
   extraReducers: {
      [postDiSLikesInnerPage.pending]: (state) => {
         state.status = 'pending'
      },
      [postDiSLikesInnerPage.fulfilled]: (state) => {
         state.status = 'success'
      },
      [postDiSLikesInnerPage.error]: (state) => {
         state.error = 'error'
      },
   },
})

export default postLikedFeedbackSlice
