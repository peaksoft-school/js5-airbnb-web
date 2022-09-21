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
export const getBookingRequests = createAsyncThunk(
   'getUserAnnouncementCard/getBookingRequests',
   async () => {
      const response = await appFetch({
         url: 'user/profile/myBookingRequests',
      })
      return response
   }
)
export const deleteUserMessage = createAsyncThunk(
   'getUserAnnouncementCard/deleteUserMessage',
   async (_, { dispatch }) => {
      const response = await appFetch({
         url: 'user/profile/delete/messages',
      })
      dispatch(getUserBooking())
      return response
   }
)
export const deleteUserAnnouncementCard = createAsyncThunk(
   'getUserAnnouncementCard/deleteUserAnnouncementCard',
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
   bookingsRequests: [],
   announcements: [],
   status: null,
   deleteStatus: null,
   messageFromAdmin: [],
}
const getUserAnnouncementCard = createSlice({
   name: 'getUserAnnouncementCard',
   initialState,
   extraReducers: {
      [deleteUserAnnouncementCard.fulfilled]: (state) => {
         state.deleteStatus = 'success'
      },
      [getBookingRequests.pending]: (state) => {
         state.status = 'pending'
      },
      [getBookingRequests.rejected]: (state) => {
         state.status = 'error'
      },
      [deleteUserAnnouncementCard.rejected]: (state) => {
         state.deleteStatus = 'error'
      },
      [getBookingRequests.fulfilled]: (state, action) => {
         state.status = 'success'
         state.bookingsRequests = action.payload
      },
      [getUserBooking.pending]: (state) => {
         state.status = 'pending'
      },
      [getUserBooking.rejected]: (state) => {
         state.status = 'error'
      },
      [getUserBooking.fulfilled]: (state, action) => {
         state.status = 'success'
         state.messageFromAdmin = action.payload?.messageFromAdmin
         state.user = {
            email: action.payload?.contact,
            name: action.payload?.name,
            phoneNumber: action.payload?.phoneNumber,
         }
         state.bookings = action.payload?.bookings
         state.announcements = action.payload?.announcements
      },
   },
})
export default getUserAnnouncementCard
