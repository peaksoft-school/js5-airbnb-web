import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch from '../../api/appFetch'
import { acceptInnerPage, rejectInnerPage } from './adminInnerPageActions'

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
   accepted: {
      status: null,
   },
   rejected: {
      status: null,
      message: '',
   },
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
      [acceptInnerPage.fulfilled]: (state) => {
         state.accepted.status = 'success'
      },
      [acceptInnerPage.rejected]: (state) => {
         state.accepted.status = 'error'
      },
      [rejectInnerPage.fulfilled]: (state, action) => {
         state.rejected.status = 'success'
         state.rejected.message = action.payload
      },
      [rejectInnerPage.rejected]: (state) => {
         state.rejected.status = 'error'
      },
   },
})

export default innerPageSlice
