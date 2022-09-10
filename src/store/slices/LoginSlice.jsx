// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// // import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// // eslint-disable-next-line import/no-cycle
// import appFetch from '../../api/appFetch'
// import { Auth } from '../../components/SignupFirebase'
// import { LoginUserUrl, LoginAdminUrl } from '../../utils/constants/constants'
// import { LocalStorageFunction } from '../../utils/helpers/LocalStorageFunction'

// export const getUserOrAdmin = createAsyncThunk(
//    'login/getUserOrAdmin',
//    // eslint-disable-next-line consistent-return
//    async (props) => {
//       if (props.fetchrole === 'USER') {
//          // const provider = new GoogleAuthProvider()
//          // const { user } = await signInWithPopup(Auth, provider)
//          const response = await appFetch({
//             url: `${LoginUserUrl}?token=${user.accessToken}`,
//             method: 'POST',
//          })
//          response.name = user.displayName
//          LocalStorageFunction({
//             type: 'setItem',
//             key: 'login',
//             body: response,
//          })
//          return response
//       }
//       if (props.fetchrole === 'ADMIN') {
//          const response = await appFetch({
//             url: `${LoginAdminUrl}`,
//             method: 'POST',
//             body: props.body,
//          })
//          LocalStorageFunction({
//             type: 'setItem',
//             key: 'login',
//             body: response,
//          })
//          return response
//       }
//    }
// )
// const initialState = {
//    status: null,
//    error: null,
//    modal: false,
//    login: LocalStorageFunction({
//       type: 'getItem',
//       key: 'login',
//    }) || {
//       userId: null,
//       email: null,
//       jwt: null,
//       role: null,
//       name: null,
//       status: null,
//    },
// }
// const LoginSlice = createSlice({
//    name: 'login',
//    initialState,
//    reducers: {
//       closemodal: (state) => {
//          state.modal = false
//       },
//    },
//    extraReducers: {
//       [getUserOrAdmin.pending]: (state) => {
//          state.status = 'pending'
//       },
//       [getUserOrAdmin.fulfilled]: (state, action) => {
//          state.status = 'success'
//          state.login.role = action.payload.role
//          state.login.email = action.payload.email
//          state.login.jwt = action.payload.jwt
//          state.login.userId = action.payload.userId
//          state.login.name = action.payload?.name
//          state.modal = false
//       },
//       [getUserOrAdmin.rejected]: (state, action) => {
//          state.status = 'error'
//          state.error = action.error.message
//          state.modal = true
//       },
//    },
// })

// export const LoginSliceAction = LoginSlice.actions
// export default LoginSlice
