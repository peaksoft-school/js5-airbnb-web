import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AdminRoute from './routes/AdminRoute'
import UserRoute from './routes/UserRoute'

function App() {
   const role = useSelector((store) => store.login.login)
   const nav = useNavigate()
   useEffect(() => {
      if (role?.role === 'ADMIN') {
         nav('/application')
      }
   }, [role?.role])
   return (
      <>
         <UserRoute />
         <AdminRoute />
      </>
   )
}

export default App
