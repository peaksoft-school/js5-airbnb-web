// eslint-disable-next-line import/no-cycle
import Store from '../store/index'
import { InitialUrl } from '../utils/constants/constants'

function appFetch(props) {
   const token = Store.getState()
   const requestOptions = {
      method: props.method || 'GET',
      headers: token.login.login?.jwt
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
