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
   user: {},
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
         state.status = 'success'
         state.user = {
            email: action.payload.contact,
            name: action.payload.name,
         }
         state.bookings = action.payload.bookings
         state.announcements = action.payload.announcements
      },
   },
})
export default getUserAnnouncementCard

export const deleteUserAnnouncementCard = createAsyncThunk(
   'getUserAnnouncementCard/deleteUserBooking',
   async (id, { dispatch }) => {
      const res = await appFetch({
         url: `api/announcements/delete/${id}`,
         method: 'DELETE',
      })
      dispatch(getUserBooking())
      return res
   }
)
