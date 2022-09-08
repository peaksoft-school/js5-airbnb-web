import { createAsyncThunk } from '@reduxjs/toolkit'
import appFetch from '../../api/appFetch'

export const getAllApplications = createAsyncThunk(
   'applications/getAllApplications',
   async ({ pagination }) => {
      const pages = {
         page: +pagination || 1,
         size: 15,
      }
      const response = await appFetch({
         url: `api/admin/applications?page=${pages.page}&size=${pages.size}`,
      })
      return response
   }
)

export const acceptAnnouncements = createAsyncThunk(
   'applications/acceptAnnouncements',
   async (id) => {
      const response = await appFetch({
         url: `api/admin/announcement/accept/${id}`,
         method: 'PUT',
      })
      return response
   }
)

export const rejectAnnouncements = createAsyncThunk(
   'applications/rejectAnnouncements',
   async (id) => {
      const response = await appFetch({
         url: `api/admin/announcement/reject/${id}`,
         method: 'PUT',
         body: {
            message: 'rejected',
         },
      })
      return response
   }
)

export const deleteAnnouncements = createAsyncThunk(
   'applications/deleteAnnouncement',
   async (id, { dispatch }) => {
      const res = await appFetch({
         url: `api/admin/announcement/delete/${id}`,
         method: 'DELETE',
         body: {
            message: 'deleted',
         },
      })
      dispatch(getAllApplications())
      return res
   }
)
