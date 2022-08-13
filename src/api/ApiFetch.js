import { InitialUrl } from '../utils/constants/fetchConstants'
function ApiFetch(props) {
   const requestOptions = {
      method: props.method || 'GET',
      headers:
         props.token && props.role
            ? {
                 'Content-Type': 'application/json',
                 Authorization: `Bearer ${props.token}`,
                 Role: props.role,
              }
            : {
                 'Content-Type': 'application/json; charset=utf-8',
              },
   }
   if (props.method && props.body) {
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
export default ApiFetch