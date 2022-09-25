import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch from '../../api/appFetch'

const initialState = {
   dates: [],
   status: null,
}

export const postDataRangePicker = createAsyncThunk(
   'postDate/postDataRangePicker',
   async (id) => {
      const data = await appFetch({
         url: `api/announcements/bookings/create/${id}`,
         method: 'POST',
      })
      return data
   }
)

const postDateSlice = createSlice({
   name: 'date',
   initialState,
   extraReducers: {
      [postDataRangePicker.pending]: (state) => {
         state.status = 'pending'
      },
      [postDataRangePicker.fulfilled]: (state) => {
         state.status = 'success'
      },
      [postDataRangePicker.error]: (state) => {
         state.status = 'error'
      },
   },
})

export default postDateSlice
