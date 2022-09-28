import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ApiFetch from '../../api/ApiFetch'

export const findbyGlobalSearch = createAsyncThunk(
   'globalSearch/findbyGlobalSearch',
   async (value) => {
      const searchParams = {
         searchvalue: `region=${value.region}${
            value?.city ? `&city=${value.city}` : ''
         }${
            value?.address ? `&address=${value.address}` : ''
         }&page=${1}&pageSize=${6}`,
      }

      const data = await ApiFetch({
         url: `api/announcements/global/search?${searchParams.searchvalue}`,
      })

      return data
   }
)
const initialState = {
   searchvalue: [],
   status: null,
}
const globalSearchSlice = createSlice({
   name: 'globalSearch',
   initialState,
   reducers: {
      cleanSearchvalue: (state) => {
         state.searchvalue = []
      },
   },
   extraReducers: {
      [findbyGlobalSearch.pending]: (state) => {
         state.status = 'pending'
      },
      [findbyGlobalSearch.rejected]: (state) => {
         state.status = 'error'
      },
      [findbyGlobalSearch.fulfilled]: (state, action) => {
         state.status = 'success'
         state.searchvalue = action.payload
      },
   },
})
export const cleanglobalSearchValue = globalSearchSlice.actions
export default globalSearchSlice
