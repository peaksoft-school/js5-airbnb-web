import { createAsyncThunk } from '@reduxjs/toolkit'
import appFetch from '../../api/appFetch'

export const getAllHouses = createAsyncThunk(
   'houses/getAllHouses',
   async ({ pagination }) => {
      const pages = {
         page: +pagination || 1,
         size: 15,
      }
      const sizeOfAllHouses = await appFetch({
         url: 'api/admin/announcements/size',
      })
      const response = await appFetch({
         url: `api/admin/applications?page=${pages.page}&size=${pages.size}`,
      })
      return {
         card: response,
         size: sizeOfAllHouses,
      }
   }
)
