import { createAsyncThunk } from '@reduxjs/toolkit'
import ApiFetch from '../../api/ApiFetch'

export const getAllApplications = createAsyncThunk(
   'applications/getAllApplications',
   async ({ pagination }) => {
      const pages = {
         page: +pagination || 1,
         size: 15,
      }
      const response = await ApiFetch({
         url: `api/admin/applications?page=${pages.page}&size=${pages.size}`,
      })
      return response
   }
)
export const blockAllAnnouncementBySingleUser = createAsyncThunk(
   'applications/blockAllAnnouncementBySingleUser',
   async (id) => {
      const block = await ApiFetch({
         url: `api/admin/announcements/block/${id}`,
         method: 'PUT',
         body: {
            message: 'blocked',
         },
      })
      return block
   }
)

export const acceptAnnouncements = createAsyncThunk(
   'applications/acceptAnnouncements',
   async (id, { dispatch }) => {
      const response = await ApiFetch({
         url: `api/admin/announcement/accept/${id}`,
         method: 'PUT',
      })
      dispatch(getAllApplications())
      return response
   }
)

export const rejectAnnouncements = createAsyncThunk(
   'applications/rejectAnnouncements',
   async (id, { dispatch }) => {
      const response = await ApiFetch({
         url: `api/admin/announcement/reject/${id.id}`,
         method: 'PUT',
         body: {
            message: id.message,
         },
      })
      dispatch(getAllApplications())
      return response
   }
)

export const deleteAnnouncements = createAsyncThunk(
   'applications/deleteAnnouncement',
   async (id, { dispatch }) => {
      const res = await ApiFetch({
         url: `api/admin/announcement/delete/${id}`,
         method: 'DELETE',
         body: {
            message: 'DELETE',
         },
      })
      dispatch(getAllApplications())
      return res
   }
)

export const getAllUsers = createAsyncThunk(
   'applications/getAllUsers',
   async () => {
      const data = await ApiFetch({
         url: 'api/admin/users',
      })
      return data
   }
)
export const getSimgleUserbyId = createAsyncThunk(
   'applications/getSimgleUserbyId',
   async (id) => {
      const data = await ApiFetch({
         url: `api/admin/user/profile/${id}`,
      })
      return data
   }
)
export const deleteUsers = createAsyncThunk(
   'applications/deleteUsers',
   async (id, { dispatch }) => {
      const data = await ApiFetch({
         url: `api/admin/delete/user/${id}`,
         method: 'DELETE',
         body: {
            message: 'delete',
         },
      })
      dispatch(getAllUsers())
      return data
   }
)

export const blockAnnouncementUser = createAsyncThunk(
   'applications/blockAnnouncementUser',
   async (obj) => {
      const data = await ApiFetch({
         url: `api/admin/announcement/block/${obj.id}`,
         method: 'PUT',
         body: { message: 'BLOCKED by ADMIN' },
      })
      return data
   }
)
export const deleteAnnouncementUser = createAsyncThunk(
   'applications/blockAnnouncementUser',
   async (obj) => {
      const data = await ApiFetch({
         url: `api/admin/announcement/delete/${obj.id}`,
         method: 'DELETE',
         body: { message: 'DELETE' },
      })
      return data
   }
)
// api/admin/announcement/delete/
