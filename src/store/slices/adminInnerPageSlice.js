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
