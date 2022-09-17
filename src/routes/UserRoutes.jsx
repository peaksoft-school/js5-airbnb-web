import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage'

const UserRoutes = () => {
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
export default UserRoutes
