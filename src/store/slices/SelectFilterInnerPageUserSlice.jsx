import { createSlice } from '@reduxjs/toolkit'
import {
   getGlobalSearch,
   getPopularApartment,
   getPopularHouse,
   getSelectFilterData,
   getTheLastest,
} from './SelectFilterInnerPageUserActions'

const initialState = {
   data: {},
   getallCard: [],
   popularApartment: [],
   popularHouse: [],
   theLastest: [],
   searchvalue: {
      value: [],
      status: null,
   },
   status: null,
   totalSizeCard: '',
   bool: false,
}

const SelectFilterInnerPageUserSlice = createSlice({
   name: 'selectfilter',
   initialState,
   extraReducers: {
      [getSelectFilterData.pending]: (state) => {
         state.status = 'pending'
         state.bool = !state.bool
      },
      [getSelectFilterData.fulfilled]: (state, action) => {
         state.status = 'success'
         state.bool = !state.bool
         state.data = action.payload
         state.totalSizeCard = action.payload.countOfResult
      },
      [getSelectFilterData.rejected]: (state) => {
         state.bool = !state.bool
         state.status = 'error'
         state.data = []
         state.totalSizeCard = 0
      },
      [getGlobalSearch.pending]: (state) => {
         state.searchvalue.status = 'pending'
      },
      [getGlobalSearch.fulfilled]: (state, action) => {
         state.searchvalue.status = 'success'
         state.searchvalue.value = [action.payload]
      },
      [getGlobalSearch.rejected]: (state) => {
         state.searchvalue.status = 'rejected'
      },
      [getPopularApartment.pending]: (state) => {
         state.status = 'pending'
      },
      [getPopularApartment.fulfilled]: (state, action) => {
         state.status = 'success'
         state.popularApartment = action.payload?.responses
      },
      [getPopularApartment.rejected]: (state) => {
         state.status = 'rejected'
      },
      [getPopularHouse.pending]: (state) => {
         state.status = 'pending'
      },
      [getPopularHouse.fulfilled]: (state, action) => {
         state.status = 'success'
         state.popularHouse = action.payload?.responses
      },
      [getPopularHouse.rejected]: (state) => {
         state.status = 'rejected'
      },
      [getTheLastest.pending]: (state) => {
         state.status = 'pending'
      },
      [getTheLastest.fulfilled]: (state, action) => {
         state.status = 'success'
         state.theLastest = action.payload?.responses
      },
      [getTheLastest.rejected]: (state) => {
         state.status = 'rejected'
      },
   },
})
export default SelectFilterInnerPageUserSlice
