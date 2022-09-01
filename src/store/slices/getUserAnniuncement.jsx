/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch from '../../api/appFetch'

export const getUserBooking = createAsyncThunk(
   'getUserAnnouncementCard/getUserBooking',
   async () => {
      const response = await appFetch({
         url: 'user/profile/bookings/myAnnouncements',
      })
      return response
   }
)
const initialState = {
   data: null,
   bookings: [],
   announcements: [],
   status: null,
}
const getUserAnnouncementCard = createSlice({
   name: 'getUserAnnouncementCard',
   initialState,
   extraReducers: {
      [getUserBooking.pending]: (state) => {
         state.status = 'pending'
      },
      [getUserBooking.fulfilled]: (state, action) => {
         state.status = 'success'
         state.data = action.payload
         state.bookings = action.payload?.bookings
         state.announcements = action.payload?.announcements
      },
      [getUserBooking.rejected]: (state) => {
         state.status = 'error'
      },
   },
})
export default getUserAnnouncementCard
