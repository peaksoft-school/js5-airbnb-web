/* eslint-disable consistent-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch from '../../api/appFetch'
import { adminUsersDeletUrl } from '../../utils/constants/constants'
import { adminUsersGet } from './adminUserSlice'

export const adminUsersDelet = createAsyncThunk(
   'adminUsersDelet/adminUsersDelet',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         const response = await appFetch({
            url: `${adminUsersDeletUrl}${id}`,
            method: 'DELETE',
         })
         dispatch(adminUsersGet())
         return response
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

const initialState = {
   status: null,
   error: null,
}
const adminUserDeletSlice = createSlice({
   name: 'adminUsersDelet',
   initialState,
   reducers: {},
   extraReducers: {
      [adminUsersDelet.pending]: (state) => {
         state.status = 'pending'
      },
      [adminUsersDelet.fulfilled]: (state) => {
         state.status = 'succes'
         state.error = null
      },
      [adminUsersDelet.rejected]: (state, action) => {
         state.error = action.error
      },
   },
})

export const AdminUserActions = adminUserDeletSlice.actions
export default adminUserDeletSlice
