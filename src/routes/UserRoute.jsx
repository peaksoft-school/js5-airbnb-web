import { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, Navigate } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import UserAnnouncementInnerPage from '../components/UserAnnouncementInnerPage'
import UserLayout from '../layout/user-layout/UserLayout'
import NotFoundPage from '../pages/NotFoundPage'
import ProtectedRoute from './ProtectedRoute'

const EditUserCard = lazy(() => import('../pages/EditUserCard'))
const MainPage = lazy(() => import('../pages/MainPages'))
const Product = lazy(() => import('../pages/Product'))
const ProductDetail = lazy(() => import('../pages/ProductDetail'))
// eslint-disable-next-line prettier/prettier
const UserProfile = lazy(() =>
   import('../components/user/user-profile/UserProfile')
)
// eslint-disable-next-line prettier/prettier
const AddAnnouncementForm = lazy(() =>
   import('../components/AddAnnountCementForm')
)
const Favorite = lazy(() => import('../pages/Favorite'))
export const pathuser = [
   {
      path: '/',
      element: <Navigate to="main" replace />,
   },
   {
      path: 'main',
      element: <MainPage />,
   },
   {
      path: 'main/catalog',
      element: <Product />,
   },
   {
      path: 'main/catalog/:id',
      element: <ProductDetail />,
   },
   {
      path: 'main/detailcard/:id',
      element: (
         <ProtectedRoute path="main" roles="USER">
            <UserAnnouncementInnerPage />
         </ProtectedRoute>
      ),
   },
   {
      path: 'main/profile/*',
      element: (
         <ProtectedRoute path="main" roles="USER">
            <UserProfile />
         </ProtectedRoute>
      ),
   },
   {
      path: 'main/editanouncement=:id',
      element: (
         <ProtectedRoute path="main" roles="USER">
            <EditUserCard />
         </ProtectedRoute>
      ),
   },
   {
      path: 'main/favorite',
      element: (
         <ProtectedRoute path="main" roles="USER">
            <Favorite />
         </ProtectedRoute>
      ),
   },
   {
      path: 'main/addanounsement',
      element: (
         <ProtectedRoute path="main" roles="USER">
            <AddAnnouncementForm />
         </ProtectedRoute>
      ),
   },
]

const UserRoute = () => {
   const user = useSelector((store) => store?.login?.login?.role)
   return (
      <Suspense fallback={<LoadingSpinner />}>
         <Routes>
            <Route path="/" element={<UserLayout />}>
               {pathuser.map((i) => (
                  <Route path={i.path} element={i.element} key={i.path} />
               ))}
            </Route>
            {user !== 'ADMIN' ? (
               <Route path="*" element={<NotFoundPage />} />
            ) : null}
         </Routes>
      </Suspense>
   )
}
export default UserRoute
