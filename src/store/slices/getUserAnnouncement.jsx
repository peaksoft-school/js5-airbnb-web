import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ApiFetch from '../../api/ApiFetch'

export const getBookingMyAnnouncement = createAsyncThunk(
   'getUserAnnouncement/getBookingMyAnnouncement',
   async () => {
      const data = await ApiFetch({
         url: 'user/profile/myBookings',
      })
      return data
   }
)

export const getUserAnnouncementCard = createAsyncThunk(
   'getUserAnnouncement/getUserAnnouncementCard',
   async () => {
      const data = await ApiFetch({
         url: 'user/profile/bookings/myAnnouncements',
      })
      return data
   }
)

export const getBookingAnnouncement = createAsyncThunk(
   'getUserAnnouncement/getBookingAnnouncement',
   async () => {
      const data = await ApiFetch({
         url: 'user/profile/myBookingRequests',
      })
      return data
   }
)

export const sendBookingAccept = createAsyncThunk(
   'getUserAnnouncement/sendBookingAccept',
   async (obj, { dispatch }) => {
      const data = await ApiFetch({
         url: 'api/announcements/bookings/accept',
         method: 'PUT',
         body: {
            announcementId: obj.announcementId,
            bookingId: obj.bookingId,
            status: 'ACCEPTED',
         },
      })
      dispatch(getBookingAnnouncement())
      return data
   }
)

export const deleteBooking = createAsyncThunk(
   'getUserAnnouncement/deleteBooking',
   async (id, { dispatch }) => {
      const data = await ApiFetch({
         url: `api/announcements/bookings/delete?bookingId=${id}`,
         method: 'DELETE',
      })
      dispatch(getBookingMyAnnouncement())
      return data
   }
)

export const sendBookingReject = createAsyncThunk(
   'getUserAnnouncement/sendBookingReject',
   async (obj, { dispatch }) => {
      const data = await ApiFetch({
         url: 'api/announcements/bookings/accept',
         method: 'PUT',
         body: {
            announcementId: obj.announcementId,
            bookingId: obj.bookingId,
            status: 'REJECTED',
         },
      })
      dispatch(getBookingAnnouncement())
      return data
   }
)

export const findUserAnnouncement = createAsyncThunk(
   'getUserAnnouncement/findUserAnnouncement',
   async (id) => {
      const namecard = await ApiFetch({
         url: `api/announcements/find/${id}`,
      })
      return namecard
   }
)

export const deleteUserAnnouncement = createAsyncThunk(
   'getUserAnnouncement/deleteUserAnnouncement',
   async (id, { dispatch }) => {
      const data = await ApiFetch({
         url: `api/announcements/delete/${id}`,
         method: 'DELETE',
      })
      dispatch(getUserAnnouncementCard())
      return data
   }
)

export const deleteUserMessage = createAsyncThunk(
   'getUserAnnouncement/deleteUserMessage',
   async (_, { dispatch }) => {
      const response = await ApiFetch({
         url: 'user/profile/delete/messages',
      })
      dispatch(getUserAnnouncementCard())
      return response
   }
)

// api/announcements/bookings/getClosedDates?announcementId=10
export const closedDatesBooking = createAsyncThunk(
   'getUserAnnouncement/closedDatesBooking',
   async (id) => {
      const data = await ApiFetch({
         url: `api/announcements/bookings/getClosedDates?announcementId=${id}`,
      })
      return data
   }
)
const initialState = {
   user: {},
   announcement: [],
   closeddatesBooking: {},
   bookings: [],
   allbookings: [],
   statusallbookings: null,
   bookingsRequests: [],
   bookingstatus: null,
   namecard: null,
   status: null,
   deletemessagestatus: null,
   statusbookingAccept: null,
   statusbookingReject: null,
   statusbookingDelete: null,
}

const getUserAnnouncement = createSlice({
   name: 'getUserAnnouncement',
   initialState,
   extraReducers: {
      [closedDatesBooking.fulfilled]: (state, action) => {
         state.closeddatesBooking = action.payload
      },
      [getBookingMyAnnouncement.fulfilled]: (state, action) => {
         state.allbookings = action.payload
         state.statusallbookings = 'success'
      },
      [getBookingMyAnnouncement.rejected]: (state) => {
         state.statusallbookings = 'error'
      },
      [getBookingMyAnnouncement.pending]: (state) => {
         state.statusallbookings = 'pending'
      },
      [deleteBooking.fulfilled]: (state) => {
         state.statusbookingDelete = 'success'
      },
      [deleteBooking.rejected]: (state) => {
         state.statusbookingDelete = 'error'
      },
      [deleteBooking.pending]: (state) => {
         state.statusbookingDelete = 'pending'
      },
      [sendBookingReject.pending]: (state) => {
         state.statusbookingReject = 'pending'
      },
      [sendBookingReject.fulfilled]: (state) => {
         state.statusbookingReject = 'success'
      },
      [sendBookingReject.rejected]: (state) => {
         state.statusbookingReject = 'error'
      },
      [sendBookingAccept.pending]: (state) => {
         state.statusbookingAccept = 'pending'
      },
      [sendBookingAccept.fulfilled]: (state) => {
         state.statusbookingAccept = 'success'
      },
      [sendBookingAccept.rejected]: (state) => {
         state.statusbookingAccept = 'error'
      },
      [getBookingAnnouncement.fulfilled]: (state, action) => {
         state.bookingsRequests = action.payload
         state.bookingstatus = 'success'
      },
      [getBookingAnnouncement.rejected]: (state) => {
         state.bookingstatus = 'error'
      },
      [deleteUserMessage.fulfilled]: (state) => {
         state.deletemessagestatus = 'success'
      },
      [deleteUserMessage.rejected]: (state) => {
         state.deletemessagestatus = 'error'
      },
      [getUserAnnouncementCard.pending]: (state) => {
         state.status = 'pending'
      },
      [getUserAnnouncementCard.fulfilled]: (state, action) => {
         state.status = 'success'
         state.user = {
            email: action.payload.contact,
            name: action.payload.name,
            messageFromAdmin: action.payload?.messageFromAdmin,
            phoneNumber: action.payload?.phoneNumber,
         }
         state.announcement = action.payload.announcements
         state.bookings = action.payload.bookings
      },
      [deleteUserAnnouncement.fulfilled]: (state) => {
         state.status = 'success'
      },
      [findUserAnnouncement.fulfilled]: (state, action) => {
         state.namecard = action.payload.title
      },
   },
})
export default getUserAnnouncement
