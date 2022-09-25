import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch from '../../api/appFetch'

const initialState = {
   datas: [],
   status: null,
}

export const apartmentHouseInnerPage = createAsyncThunk(
   'datas/apartmentHouseInnerPage',
   async (id) => {
      const response = await appFetch({
         url: `api/announcements/find/${id}`,
      })
      return response
   }
)
export const getPercentegCard = createAsyncThunk(
   'datas/getPercentegCard',
   async (id) => {
      const data = await appFetch({
         url: `api/feedbacks/feedback/rating/with/percentages?announcementId=${id}`,
      })
      return data
   }
)

const apartmentHouseSlice = createSlice({
   name: 'datas',
   initialState,
   extraReducers: {
      [apartmentHouseInnerPage.pending]: (state) => {
         state.status = 'pending'
      },
      [apartmentHouseInnerPage.fulfilled]: (state, action) => {
         state.status = 'success'
         state.datas = [action.payload]
      },
      [apartmentHouseInnerPage.error]: (state) => {
         state.status = 'error'
      },
   },
})

export const percentegCardSlice = createSlice({
   name: 'datas',
   initialState,
   extraReducers: {
      [getPercentegCard.pending]: (state) => {
         state.status = 'pending'
      },
      [getPercentegCard.fulfilled]: (state, action) => {
         state.status = 'success'
         state.datas = action.payload
      },
      [getPercentegCard.error]: (state) => {
         state.status = 'error'
      },
   },
})

export default apartmentHouseSlice
