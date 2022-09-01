import { createSlice } from '@reduxjs/toolkit'
import { getapplicationByid } from './adminInnerPageSlice'

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
