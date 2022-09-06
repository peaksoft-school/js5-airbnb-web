// import { createSlice } from '@reduxjs/toolkit'
// import { getapplicationByid } from './adminInnerPageSlice'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch from '../../api/appFetch'

// const initialState = {
//    data: [],
//    status: null,
// }
// const getAdminApplicationById = createSlice({
//    name: 'getaplicationbyid',
//    initialState,
//    extraReducers: {
//       [getapplicationByid.pending]: (state) => {
//          state.status = 'pending'
//       },
//       [getapplicationByid.fulfilled]: (state, action) => {
//          state.status = 'success'
//          state.data = [action.payload]
//       },
//       [getapplicationByid.rejected]: (state) => {
//          state.status = 'error'
//       },
//    },
// })
// export default getAdminApplicationById

export const getAdminApplicationById = createAsyncThunk(
   'getDates/getAdminApplicationById',
   async (id) => {
      const response = await appFetch({
         url: `api/admin/find/announcement/${id}`,
      })
      return response
   }
)

const initialState = {
   data: [],
   status: null,
}

const innerPageSlice = createSlice({
   name: 'datas',
   initialState,
   extraReducers: {
      [getAdminApplicationById.pending]: (state) => {
         state.status = 'pending'
      },
      [getAdminApplicationById.fulfilled]: (state, action) => {
         state.status = 'success'
         state.data = [action.payload]
      },
      [getAdminApplicationById.error]: (state) => {
         state.status = 'error'
      },
   },
})

export default innerPageSlice
