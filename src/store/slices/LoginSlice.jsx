import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import ApiFetch from '../../api/ApiFetch'
import { Auth } from '../../components/SignupFirebase'
import {
   LoginUserUrl,
   LoginAdminUrl,
} from '../../utils/constants/fetchConstants'
import { LocalStorageFunction } from '../../utils/helpers/LocalStorageFunction'

export const getUserOrAdmin = createAsyncThunk(
   'login/getUserOrAdmin',
   // eslint-disable-next-line consistent-return
   async (props) => {
      if (props.fetchrole === 'USER') {
         const provider = new GoogleAuthProvider()
         const { user } = await signInWithPopup(Auth, provider)
         const response = await ApiFetch({
            url: `${LoginUserUrl}?token=${user.accessToken}`,
            method: 'POST',
         })
         LocalStorageFunction({
            type: 'setItem',
            key: 'login',
            body: { data: response, username: user.displayName },
         })
         return { data: response, username: user.displayName }
      }
      if (props.fetchrole === 'ADMIN') {
         const response = await ApiFetch({
            url: LoginAdminUrl,
            method: 'POST',
            body: props.body,
         })
         LocalStorageFunction({
            type: 'setItem',
            key: 'login',
            token: response.jwt,
         })
         return response
      }
   }
)
const initialState = {
   role: 'admin',
   data: {},
   token: '',
   status: '',
   error: null,
}
const LoginSlice = createSlice({
   name: 'login',
   initialState,
   reducers: {
      getloginfromLocal: (state) => {
         const getlogin = LocalStorageFunction({
            type: 'getItem',
            key: 'login',
         })
         state.token = getlogin.data.jwt
         state.data = getlogin
      },
   },
   extraReducers: {
      [getUserOrAdmin.pending]: (state) => {
         state.status = 'pending'
      },
      [getUserOrAdmin.fulfilled]: (state, action) => {
         state.status = 'success'
         state.role = action.payload.role
         state.data = action.payload
         state.token = action.payload.jwt
      },
      [getUserOrAdmin.rejected]: (state, action) => {
         state.status = 'error'
         state.error = action.error.message
      },
   },
})

export const LoginSliceActions = LoginSlice.actions
export default LoginSlice
