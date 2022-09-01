import { createAsyncThunk } from '@reduxjs/toolkit'
import appFetch from '../../api/appFetch'

export const getapplicationByid = createAsyncThunk(
   'getaplicationbyid/getapplicationByid',
   async (id) => {
      const res = await appFetch({
         url: `api/admin/find/announcement/${id}`,
      })
      return res
   }
)
