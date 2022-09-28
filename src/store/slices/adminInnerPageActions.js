import { createAsyncThunk } from '@reduxjs/toolkit'
import ApiFetch from '../../api/ApiFetch'

export const acceptInnerPage = createAsyncThunk(
   'applications/acceptInnerPage',
   async (id) => {
      const response = await ApiFetch({
         url: `api/admin/announcement/accept/${id}`,
         method: 'PUT',
      })
      return response
   }
)
export const rejectInnerPage = createAsyncThunk(
   'applications/rejectInnerPage',
   async (id) => {
      const response = await ApiFetch({
         url: `api/admin/announcement/reject/${id.id}`,
         method: 'PUT',
         body: {
            message: id.message,
         },
      })
      return response
   }
)
export const findAnnouncementInnerPage = createAsyncThunk(
   'applications/findAnnouncementInnerPage',
   async (id) => {
      const namecard = await ApiFetch({
         url: `api/announcements/find/${id}`,
      })
      return namecard
   }
)
export const postStatusSee = createAsyncThunk(
   'applications/postStatusSee',
   async (id) => {
      const namecard = await ApiFetch({
         url: `api/admin/find/announcement/${id}`,
      })
      return namecard
   }
)
