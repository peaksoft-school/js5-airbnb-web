import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ApiFetch from '../../api/ApiFetch'

export const getAdminFilterCard = createAsyncThunk(
   'adminCatalog/getAdminFilterCard',
   async (filterurl) => {
      const response = await ApiFetch({
         url: `api/admin/allHousingJ?${filterurl}&size=15`,
      })
      return response
   }
)
// api/announcements?page=1&size=15
export const getSizeAllCard = createAsyncThunk(
   'adminCatalog/getSizeAllCard',
   async () => {
      const size = await ApiFetch({
         url: 'api/announcements?page=1&size=50',
      })
      return size
   }
)
const initialState = {
   response: [],
   status: null,
   size: {},
}
const adminCatalogSlice = createSlice({
   name: 'adminCatalog',
   initialState,
   extraReducers: {
      [getSizeAllCard.fulfilled]: (state, action) => {
         state.size = action.payload
      },
      [getAdminFilterCard.pending]: (state) => {
         state.status = 'pending'
      },
      [getAdminFilterCard.fulfilled]: (state, action) => {
         state.status = 'success'
         console.log(action.payload)
         state.response = action.payload
      },
      [getAdminFilterCard.rejected]: (state) => {
         state.status = 'error'
      },
   },
})
export default adminCatalogSlice
