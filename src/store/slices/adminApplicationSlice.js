import { createSlice } from '@reduxjs/toolkit'
import { getAllHouses } from './adminApplicationActions'

const initialState = {
   houseData: [],
   error: null,
   status: null,
}

const adminApplicationSlice = createSlice({
   name: 'houses',
   initialState,
   extraReducers: {
      [getAllHouses.pending]: (state) => {
         state.status = 'pending'
      },
      [getAllHouses.rejected]: (state, action) => {
         state.status = 'rejected'
         state.error = action.error
      },
      [getAllHouses.fulfilled]: (state, action) => {
         state.status = 'success'
         state.houseData = action.payload
      },
   },
})

export const adminApplicationActions = adminApplicationSlice.actions
export default adminApplicationSlice
