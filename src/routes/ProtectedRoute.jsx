import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ roles, children, path }) => {
   const role = useSelector((store) => store.login?.login?.role)
   if (!roles.includes(role)) {
      return <Navigate to={path} replace />
   }
   return children || <Outlet />
}
export default ProtectedRoute
