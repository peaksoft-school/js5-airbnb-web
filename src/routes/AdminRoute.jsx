import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import UserAnnouncementInnerPage from '../components/UserAnnouncementInnerPage'
import AdminLayout from '../layout/admin-layout/AdminLayout'
import AdminUserProfile from '../pages/adminUserApllication/UserAdminApplication'
import ProtectedRoute from './ProtectedRoute'

const AdminApplication = lazy(() => import('../pages/AdminApplication'))
// eslint-disable-next-line prettier/prettier
const AdminApplicationsInnerPage = lazy(() =>
   import('../pages/AdminApplicationsInnerPage')
)
const AdminUsers = lazy(() => import('../pages/AdminUsers'))
const AdminAllHousing = lazy(() => import('../pages/AdminGetAllHousing'))
export const pathadmin = [
   {
      path: '/',
      element: <ProtectedRoute path="main" roles="ADMIN" />,
   },
   {
      path: 'application',
      element: <AdminApplication />,
   },
   {
      path: 'application/:id',
      element: <AdminApplicationsInnerPage />,
   },
   {
      path: 'users',
      element: <AdminUsers />,
   },
   {
      path: 'users/:id/*',
      element: <AdminUserProfile />,
   },
   {
      path: 'users/card/:id',
      element: <UserAnnouncementInnerPage admin="yes" />,
   },
   {
      path: 'all-housing',
      element: <AdminAllHousing />,
   },
]
const AdminRoute = () => {
   return (
      <Suspense fallback={<LoadingSpinner color="black" />}>
         <Routes>
            <Route path="/" element={<AdminLayout />}>
               {pathadmin.map((i) => (
                  <Route path={i.path} element={i.element} />
               ))}
            </Route>
         </Routes>
      </Suspense>
   )
}
export default AdminRoute
