import { createSlice } from '@reduxjs/toolkit'
import { acceptInnerPage, rejectInnerPage } from './adminInnerPageActions'

const initialState = {
   accepted: {
      status: null,
   },
   rejected: {
      status: null,
      message: '',
   },
}

// const adminInnerPage = createAsyncThunk({
//    name: 'adminInnerPage/adminInnerPage',
//    initialState,
//    extraReducers: {
//       [acceptInnerPage.fulfilled]: (state) => {
//          state.accepted.status = 'success'
//       },
//       [acceptInnerPage.rejected]: (state) => {
//          state.accepted.status = 'error'
//       },
//       [rejectInnerPage.fulfilled]: (state, action) => {
//          console.log(action, state)
//          state.rejected.status = 'success'
//          state.rejected.message = action.payload
//       },
//       rejectStatus(state, action) {
//          console.log(action.accepted)
//          console.log(state, action)
//       },
//       [rejectInnerPage.rejected]: (state) => {
//          state.rejected.status = 'error'
//       },
//    },
// })

const adminInnerPage = createSlice({
   name: 'adminInnerPage',
   initialState,
   reducers: {},
   extraReducers: {
      [acceptInnerPage.fulfilled]: (state) => {
         state.accepted.status = 'success'
      },
      [acceptInnerPage.rejected]: (state) => {
         state.accepted.status = 'error'
      },
      [rejectInnerPage.fulfilled]: (state, action) => {
         console.log(action, state)
         state.rejected.status = 'success'
         state.rejected.message = action.payload
      },
      [rejectInnerPage.rejected]: (state) => {
         state.rejected.status = 'error'
      },
   },
})

export const addAnnoutcementSliceAction = adminInnerPage.actions
export default adminInnerPage
