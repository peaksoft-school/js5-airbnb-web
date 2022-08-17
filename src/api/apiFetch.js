// import { InitialUrl } from '../utils/constants/fetchConstants'
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

function ApiFetch(props) {
   const requestOptions = {
      method: props.method || 'GET',
      headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${props.jwt}`,
      },
   }
   if (props.method && props.body) {
      requestOptions.body = JSON.stringify(props.body)
   }
   const promise = async () => {
      try {
         const res = await fetch(`${props.url}`, requestOptions)
         // if (!res.ok) {
         //    throw new Error('server Error')
         // }
         const date = await res.json()
         console.log('date form date', date)
      } catch (error) {
         alert(error.message)
      }
   }

   promise()
}

export default ApiFetch

// export const postsApiFetch = createAsyncThunk(
//    'posts/postsApiFetch',
//    async () => {
//       try {
//          const response = await fetch('')
//          const date = response.json()
//          console.log(date)
//       } catch (error) {
//          console.log(error)
//       }
//    }
// )

// const addHookPosts = createSlice({
//    name: 'addAnnouncementPosts',
//    initialState: {
//       form: [],
//       status: null,
//       error: null,
//    },
//    extraReducers: {},
// })

// import { InitialUrl } from '../utils/constants/fetchConstants'

// function ApiFetch(props) {
//    const requestOptions = {
//       method: props.method || 'GET',
//       headers:
//          props.token && props.role
//             ? {
//                  'Content-Type': 'application/json',
//                  Authorization: Bearer ${props.token},
//               }
//             : {
//                  'Content-Type': 'application/json; charset=utf-8',
//               },
//    }
//    if (props.method && props.body) {
//       requestOptions.body = JSON.stringify(props.body)
//    }
//    const promise = new Promise((resolve, reject) => {
//       fetch(InitialUrl + props.url, requestOptions)
//          .then((response) => {
//             if (response.ok) {
//                return response.json()
//             }
//             throw new Error(response.message)
//          })
//          .then((data) => {
//             resolve(data)
//          })
//          .catch((error) => {
//             reject(error)
//          })
//    })
//    return promise
// }

// export default ApiFetch
