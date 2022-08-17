// eslint-disable-next-line consistent-return
export const LocalStorageFunction = (props) => {
   if (props.type === 'setItem') {
      return localStorage.setItem(props.key, JSON.stringify(props.body))
   }
   if (props.type === 'getItem') {
      const logininfo = JSON.parse(localStorage.getItem(props.key) || {})
      return logininfo
   }
   if (props.type === 'removeItem') {
      return localStorage.removeItem(props.key)
   }
}
