/* eslint-disable consistent-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch from '../../api/appFetch'

const initialState = {
   likestatus: false,
   dislikestatus: false,
   status: null,
   colorLike: false,
}

export const postLikesInnerPage = createAsyncThunk(
   'postfeedback/postLikesInnerPage',
   async (id) => {
      const data = await appFetch({
         url: `api/feedbacks/like/${id}`,
         method: 'POST',
      })
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
      return data
   }
)

export const postAnnouncementsLike = createAsyncThunk(
   'postLike/postAnnouncementsLike',
   async (id) => {
      console.log(id)
      const data = await appFetch({
         url: `api/announcements/like/${id}`,
         method: 'POST',
      })
      // console.log(data)
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
         state.dislikestatus = !state.dislikestatus
      },
      [postLikesInnerPage.error]: (state) => {
         state.error = 'error'
      },
      [postDiSLikesInnerPage.pending]: (state) => {
         state.status = 'pending'
      },
      [postDiSLikesInnerPage.fulfilled]: (state) => {
         state.status = 'success'
         state.likestatus = !state.likestatus
      },
      [postDiSLikesInnerPage.error]: (state) => {
         state.error = 'error'
      },
      [postAnnouncementsLike.pending]: (state) => {
         state.status = 'pending'
      },
      [postAnnouncementsLike.fulfilled]: (state) => {
         state.status = 'success'
         state.colorLike = !state.colorLike
      },
      [postAnnouncementsLike.error]: (state) => {
         state.status = 'error'
      },
   },
})

export default postLikedFeedbackSlice
