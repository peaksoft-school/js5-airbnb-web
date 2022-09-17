import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch from '../../api/appFetch'
import {
   adminUsersUrl,
   adminUsersDeleteUrl,
} from '../../utils/constants/constants'

export const adminUsersGet = createAsyncThunk(
   'adminUsers/adminUsersGet',
   async (_, { rejectWithValue, dispatch }) => {
      try {
         const response = await appFetch({
            url: adminUsersUrl,
         })
         dispatch(AdminUserActions.addUsers(response))
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
export const adminUsersDelete = createAsyncThunk(
   'adminUsers/adminUsersDelete',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         const response = await appFetch({
            url: `${adminUsersDeleteUrl}${id}`,
            method: 'DELETE',
         })
         dispatch(adminUsersGet())
         return response
      } catch (error) {
         return rejectWithValue('error')
      }
   }
)

const initialState = {
   status: null,
   error: null,
   statusDelete: null,
   errorDelete: null,
   users: [],
}
const adminUserSlice = createSlice({
   name: 'adminUsers',
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
         state.status = 'success'
         state.error = null
      },
      [adminUsersGet.rejected]: (state, action) => {
         state.error = action.error
      },
      [adminUsersDelete.pending]: (state) => {
         state.statusDelete = 'pending'
      },
      [adminUsersDelete.fulfilled]: (state) => {
         state.statusDelete = 'success'
         state.errorDelete = null
      },
      [adminUsersDelete.rejected]: (state, action) => {
         state.errorDelete = action.error.message
         state.statusDelete = null
      },
   },
})

export const AdminUserActions = adminUserSlice.actions
export default adminUserSlice
