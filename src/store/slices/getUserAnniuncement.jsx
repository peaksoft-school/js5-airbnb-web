import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch from '../../api/appFetch'

export const getUserBooking = createAsyncThunk(
   'getUserAnnouncementCard/getUserBooking',
   async () => {
      const response = await appFetch({
         // url: 'user/profile/bookings/myAnnouncements',
         url: 'user/profile/bookings/myAnnouncements',
      })
      console.log(response)
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
      [getUserBooking.rejected]: (state) => {
         state.status = 'error'
      },
      [getUserBooking.fulfilled]: (state, action) => {
         // console.log(state)
         state.status = 'success'
         state.data = action.payload
         state.bookings = action.payload.bookings
         state.announcements = action.payload.announcements
      },
   },
})
export default getUserAnnouncementCard
