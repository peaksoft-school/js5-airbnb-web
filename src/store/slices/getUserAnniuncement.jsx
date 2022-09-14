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
const initialState = {
   user: {},
   bookings: [],
   announcements: [],
   status: null,
   deleteStatus: null,
}
const getUserAnnouncementCard = createSlice({
   name: 'getUserAnnouncementCard',
   initialState,
   extraReducers: {
      [deleteUserAnnouncementCard.fulfilled]: (state) => {
         state.deleteStatus = 'success'
      },
      [deleteUserAnnouncementCard.rejected]: (state) => {
         state.deleteStatus = 'error'
      },
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
