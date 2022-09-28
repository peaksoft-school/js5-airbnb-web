import { createSlice } from '@reduxjs/toolkit'
import {
   getAllApplications,
   rejectAnnouncements,
   acceptAnnouncements,
   deleteAnnouncements,
   getAllUsers,
   deleteUsers,
   getSimgleUserbyId,
   blockAllAnnouncementBySingleUser,
   blockAnnouncementUser,
} from './adminApplicationActions'
import {
   acceptInnerPage,
   findAnnouncementInnerPage,
   postStatusSee,
   rejectInnerPage,
} from './adminInnerPageActions'

const initialState = {
   applications: [],
   findapplication: [],
   findstatus: null,
   size: '',
   error: null,
   status: null,
   accepted: {
      status: null,
      bool: false,
   },
   rejected: {
      status: null,
      message: '',
      bool: false,
   },
   deleted: {
      status: null,
      bool: false,
      message: '',
   },
   userstatus: null,
   deletestatus: null,
   allusers: [],
   data: [],
   statusfindbyid: null,
   singleUser: {
      status: null,
      data: [],
   },
   blockannouncementstatus: null,
   blockannouncementuser: null,
}

const adminApplicationSlice = createSlice({
   name: 'applications',
   initialState,
   extraReducers: {
      [blockAnnouncementUser.fulfilled]: (state) => {
         state.blockannouncementuser = 'success'
      },
      [blockAllAnnouncementBySingleUser.fulfilled]: (state) => {
         state.blockannouncementstatus = 'success'
      },
      [blockAllAnnouncementBySingleUser.rejected]: (state) => {
         state.blockannouncementstatus = 'error'
      },
      [getSimgleUserbyId.pending]: (state) => {
         state.singleUser.status = 'pending'
      },
      [getSimgleUserbyId.fulfilled]: (state, action) => {
         state.singleUser.status = 'success'
         state.singleUser.data = [action.payload]
      },
      [postStatusSee.fulfilled]: (state, action) => {
         const data = []
         data.push(action.payload)
         state.findapplication = data
         state.findstatus = 'success'
      },
      [postStatusSee.rejected]: (state) => {
         state.findstatus = 'error'
      },
      [postStatusSee.pending]: (state) => {
         state.findstatus = 'pending'
      },
      [findAnnouncementInnerPage.fulfilled]: (state, action) => {
         const data = []
         data.push(action.payload)
         state.data = data
         state.statusfindbyid = 'success'
      },
      [findAnnouncementInnerPage.rejected]: (state) => {
         state.statusfindbyid = 'error'
      },
      [findAnnouncementInnerPage.pending]: (state) => {
         state.statusfindbyid = 'pending'
      },
      [acceptInnerPage.fulfilled]: (state) => {
         state.accepted.status = 'success'
         state.accepted.bool = !state.accepted.bool
      },
      [rejectInnerPage.fulfilled]: (state) => {
         state.rejected.status = 'success'
         state.rejected.bool = !state.rejected.bool
      },
      [acceptInnerPage.rejected]: (state) => {
         state.accepted.status = 'error'
         state.accepted.bool = !state.accepted.bool
      },
      [rejectInnerPage.rejected]: (state) => {
         state.rejected.status = 'error'
         state.rejected.bool = !state.rejected.bool
      },
      [deleteUsers.fulfilled]: (state) => {
         state.deletestatus = 'success'
      },
      [getAllUsers.pending]: (state) => {
         state.userstatus = 'pending'
      },
      [getAllUsers.fulfilled]: (state, action) => {
         state.userstatus = 'success'
         state.allusers = action.payload
      },
      [getAllUsers.rejected]: (state) => {
         state.userstatus = 'error'
      },
      [getAllApplications.pending]: (state) => {
         state.status = 'pending'
      },
      [getAllApplications.rejected]: (state, action) => {
         state.status = 'error'
         state.error = action.error
      },
      [getAllApplications.fulfilled]: (state, action) => {
         state.status = 'success'
         state.applications = action.payload?.pageAnnouncementResponseList
         state.size = action.payload?.allAnnouncementsSize
      },
      [acceptAnnouncements.fulfilled]: (state) => {
         state.accepted.bool = !state.accepted.bool
         state.accepted.status = 'success'
      },
      [acceptAnnouncements.rejected]: (state) => {
         state.accepted.status = 'error'
         state.accepted.bool = !state.accepted.bool
      },
      [rejectAnnouncements.fulfilled]: (state, action) => {
         state.rejected.status = 'success'
         state.rejected.bool = !state.rejected.bool
         state.rejected.message = action.payload
      },
      [rejectAnnouncements.rejected]: (state) => {
         state.rejected.bool = !state.rejected.bool
         state.rejected.status = 'error'
      },
      [deleteAnnouncements.fulfilled]: (state, action) => {
         state.deleted.status = 'success'
         state.deleted.bool = !state.deleted.bool
         state.deleted.message = action.payload
      },
      [deleteAnnouncements.rejected]: (state) => {
         state.deleted.bool = !state.deleted.bool
         state.deleted.status = 'error'
      },
   },
})

export const adminApplicationActions = adminApplicationSlice.actions
export default adminApplicationSlice
