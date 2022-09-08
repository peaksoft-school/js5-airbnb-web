import { createAsyncThunk } from '@reduxjs/toolkit'
import appFetch from '../../api/appFetch'

export const acceptInnerPage = createAsyncThunk(
   'adminInnerPage/acceptInnerPage',
   async (id) => {
      const response = await appFetch({
         url: `api/admin/announcement/accept/${id}`,
         method: 'PUT',
      })
      return response
   }
)
export const rejectInnerPage = createAsyncThunk(
   'adminInnerPage/rejectInnerPage',
   async (id) => {
      const response = await appFetch({
         url: `api/admin/announcement/reject/${id.id}`,
         method: 'PUT',
         body: {
            message: id.message,
         },
      })
      return response
   }
)
