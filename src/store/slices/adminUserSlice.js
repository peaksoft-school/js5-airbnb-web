/* eslint-disable consistent-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch from '../../api/appFetch'
import { adminUsersUrl } from '../../utils/constants/constants'

export const adminUsersGet = createAsyncThunk(
   'adminUsers/adminUsersGet',
   async (_, { rejectWithValue, dispatch }) => {
      try {
         const response = await appFetch({
            url: adminUsersUrl,
         })
         dispatch(AdminUserActions.addUsers(response))
         return response
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

const initialState = {
   status: null,
   error: null,
   users: [],
}
const adminUserSlice = createSlice({
   name: 'adminUsersGet',
   initialState,
   reducers: {
      addUsers(state, action) {
         state.users = action.payload
      },
   },
   extraReducers: {
      [adminUsersGet.pending]: (state) => {
         state.status = 'pending'
      },
      [adminUsersGet.fulfilled]: (state) => {
         state.status = 'succes'
         state.error = null
      },
      [adminUsersGet.rejected]: (state, action) => {
         state.error = action.error
      },
   },
})

export const AdminUserActions = adminUserSlice.actions
export default adminUserSlice
