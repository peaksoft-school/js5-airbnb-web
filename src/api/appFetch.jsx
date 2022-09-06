import { InitialUrl } from '../utils/constants/constants'

let store

export const injectStore = (_store) => {
   store = _store
}

function appFetch(props) {
   const token = store.getState()

   const requestOptions = {
      method: props.method || 'GET',
      headers: token.login.login.jwt
         ? {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token.login.login.jwt}`,
           }
         : {
              'Content-Type': 'application/json; charset=utf-8',
           },
   }
   if (props.method !== 'GET' && props.body) {
      requestOptions.body = JSON.stringify(props.body)
   }
   const promise = new Promise((resolve, reject) => {
      fetch(InitialUrl + props.url, requestOptions)
         .then((response) => {
            if (response.ok) {
               return response.json()
            }
            throw new Error(response.message)
         })
         .then((data) => {
            resolve(data)
         })
         .catch((error) => {
            reject(error)
         })
   })
   return promise
}

export default appFetch

export async function appFile(parameter) {
   const token = store.getState()
   const promise = new Promise((resolve, reject) => {
      fetch(InitialUrl + parameter.url, {
         method: 'POST',
         headers: {
            Authorization: `Bearer ${token.login.login?.jwt}`,
         },
         body: parameter.body,
      })
         .then((response) => {
            if (response.ok) {
               return response.json()
            }
            throw new Error(response.message)
         })
         .then((data) => {
            resolve(data)
         })
         .catch((error) => {
            reject(error)
         })
   })
   return promise
}
