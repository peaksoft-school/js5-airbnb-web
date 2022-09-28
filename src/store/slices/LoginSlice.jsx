import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import ApiFetch from '../../api/ApiFetch'
import { Auth } from '../../components/SignupFirebase'
import {
   LoginUserUrl,
   LoginAdminUrl,
} from '../../utils/constants/fetchConstants'
import { LocalStorageFunction } from '../../utils/helpers/LocalStorageFunctions/LocalStorajeFunction'

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
         console.log(response, 'response')
         response.name = user.displayName
         LocalStorageFunction({
            type: 'setItem',
            key: 'login',
            body: response,
         })
         return response
      }
      if (props.fetchrole === 'ADMIN') {
         const response = await ApiFetch({
            url: `${LoginAdminUrl}`,
            method: 'POST',
            body: props.body,
         })
         LocalStorageFunction({
            type: 'setItem',
            key: 'login',
            body: response,
         })
         return response
      }
   }
)
export const sendPhoneNumber = createAsyncThunk(
   'login/sendPhoneNumber',
   async (number) => {
      const response = await ApiFetch({
         url: 'api/user/add/phone/number',
         method: 'POST',
         body: {
            phoneNumber: number,
         },
      })
      return response
   }
)
const initialState = {
   status: null,
   error: null,
   modal: false,
   phonestatus: null,
   login: LocalStorageFunction({
      type: 'getItem',
      key: 'login',
   }) || {
      userId: null,
      email: null,
      jwt: null,
      role: null,
      name: null,
      status: null,
      phoneNumber: null,
   },
}
const LoginSlice = createSlice({
   name: 'login',
   initialState,
   reducers: {
      closemodal: (state) => {
         state.modal = false
      },
      clearLogin: (state) => {
         state.login = {}
      },
   },
   extraReducers: {
      [sendPhoneNumber.fulfilled]: (state) => {
         state.phonestatus = 'success'
      },
      [sendPhoneNumber.rejected]: (state) => {
         state.phonestatus = 'error'
      },
      [getUserOrAdmin.pending]: (state) => {
         state.status = 'pending'
      },
      [getUserOrAdmin.fulfilled]: (state, action) => {
         state.status = 'success'
         state.login.role = action.payload.role
         state.login.email = action.payload.email
         state.login.jwt = action.payload.jwt
         state.login.userId = action.payload.userId
         state.login.name = action.payload?.name
         state.login.phoneNumber = action.payload?.phoneNumber
         state.modal = false
      },
      [getUserOrAdmin.rejected]: (state, action) => {
         state.status = 'error'
         state.error = action.error.message
         state.modal = true
      },
   },
})

export const LoginSliceAction = LoginSlice.actions
export default LoginSlice
