import { createSlice } from '@reduxjs/toolkit'
import {
   getAllApplications,
   rejectAnnouncements,
   acceptAnnouncements,
   deleteAnnouncements,
} from './adminApplicationActions'

const initialState = {
   applications: [],
   error: null,
   status: null,
   accepted: {
      status: null,
   },
   rejected: {
      status: null,
      message: '',
   },
   deleted: {
      status: null,
      message: '',
   },
}

const adminApplicationSlice = createSlice({
   name: 'applications',
   initialState,
   extraReducers: {
      [getAllApplications.pending]: (state) => {
         state.status = 'pending'
      },
      [getAllApplications.rejected]: (state, action) => {
         state.status = 'rejected'
         state.error = action.error
      },
      [getAllApplications.fulfilled]: (state, action) => {
         state.status = 'success'
         state.applications = action.payload
      },
      [acceptAnnouncements.fulfilled]: (state) => {
         state.accepted.status = 'success'
      },
      [acceptAnnouncements.rejected]: (state) => {
         state.accepted.status = 'error'
      },
      [rejectAnnouncements.fulfilled]: (state, action) => {
         console.log(action, state)
         state.rejected.status = 'success'
         state.rejected.message = action.payload
      },
      rejectStatus(state, action) {
         console.log(action.accepted)
         console.log(state, action)
      },
      [rejectAnnouncements.rejected]: (state) => {
         state.rejected.status = 'error'
      },
      [deleteAnnouncements.fulfilled]: (state, action) => {
         state.deleted.status = 'success'
         state.deleted.message = action.payload
      },
      [deleteAnnouncements.rejected]: (state) => {
         state.deleted.status = 'error'
      },
   },
})

export const adminApplicationActions = adminApplicationSlice.actions
export default adminApplicationSlice
