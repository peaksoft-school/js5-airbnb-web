import { createAsyncThunk } from '@reduxjs/toolkit'
import appFetch from '../../api/appFetch'

export const acceptInnerPage = createAsyncThunk(
   'adminInnerPage/acceptInnerPage',
   async (id) => {
      console.log(id)
      const response = await appFetch({
         url: `api/admin/announcement/accept/${id}`,
         method: 'PUT',
      })
      console.log(response)
      return response
   }
)
export const rejectInnerPage = createAsyncThunk(
   'adminInnerPage/rejectInnerPage',
   async (id) => {
      console.log(id)
      const response = await appFetch({
         url: `api/admin/announcement/reject/${id}`,
         method: 'PUT',
         body: {
            message: 'rejected',
         },
      })
      console.log(response)
      return response
   }
)
