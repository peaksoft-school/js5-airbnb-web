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
