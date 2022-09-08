import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch from '../../api/appFetch'
import {
   adminUsersUrl,
   adminUsersDeletUrl,
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
export const adminUsersDelet = createAsyncThunk(
   'adminUsers/adminUsersDelet',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         const response = await appFetch({
            url: `${adminUsersDeletUrl}${id}`,
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
   statusDelet: null,
   errorDelet: null,
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
         state.status = 'succes'
         state.error = null
      },
      [adminUsersGet.rejected]: (state, action) => {
         state.error = action.error
      },
      [adminUsersDelet.pending]: (state) => {
         state.statusDelet = 'pending'
      },
      [adminUsersDelet.fulfilled]: (state) => {
         state.statusDelet = 'succes'
         state.errorDelet = null
      },
      [adminUsersDelet.rejected]: (state, action) => {
         state.errorDelet = action.error.message
         state.statusDelet = null
      },
   },
})

export const AdminUserActions = adminUserSlice.actions
export default adminUserSlice
