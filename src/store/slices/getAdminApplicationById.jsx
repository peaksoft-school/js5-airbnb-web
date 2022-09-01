import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
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

const initialState = {
   data: [],
   status: null,
}
const getAdminApplicationById = createSlice({
   name: 'getaplicationbyid',
   initialState,
   extraReducers: {
      [getapplicationByid.pending]: (state) => {
         state.status = 'pending'
      },
      [getapplicationByid.fulfilled]: (state, action) => {
         state.status = 'success'
         state.data = [action.payload]
      },
      [getapplicationByid.rejected]: (state) => {
         state.status = 'error'
      },
   },
})
export default getAdminApplicationById
