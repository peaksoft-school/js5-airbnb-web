import { createSlice } from '@reduxjs/toolkit'
import { getAllApplications } from './adminApplicationActions'

const initialState = {
   applications: [],
   error: null,
   status: null,
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
   },
})

export const adminApplicationActions = adminApplicationSlice.actions
export default adminApplicationSlice
