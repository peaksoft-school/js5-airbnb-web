import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
   Route,
   Routes,
   Outlet,
   NavLink,
   Navigate,
   useLocation,
} from 'react-router-dom'
import styled from 'styled-components'
import BreadCrumbs from '../../components/UI/BreadCrumbs'
import Button from '../../components/UI/Button'
import {
   blockAllAnnouncementBySingleUser,
   getSimgleUserbyId,
} from '../../store/slices/adminApplicationActions'
import AdminUserApplicationCard from './AdminUserApplicationCard'
import AdminUserMyAnnouncement from './AdminUserMyAnansment'
import UserAdminBookings from './UserAdminBookings'

function AdminUserProfile() {
   const store = useSelector((s) => s.applications?.singleUser?.data[0])
   const status = useSelector((s) => s.applications)
   console.log(status, 'applications status')
   const loc = useLocation()
   const dispatch = useDispatch()
   const id = loc.pathname?.split('/')[2]
   const myAnnouncement = loc.pathname?.split('/')[3]
   useEffect(() => {
      dispatch(getSimgleUserbyId(id))
   }, [id, status.deleted?.bool, status?.blockannouncementstatus])
   const stylednav = {
      color: '#6C6C6C',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '17px',
      lineHeight: '12px',
      textDecoration: 'none',
   }

   const blockannouncement = () => {
      dispatch(blockAllAnnouncementBySingleUser(id))
   }
   return (
      <Box>
         <Container>
            <BreadCrumbs location={loc} translate="Profile" fontSize="16px" />
            <Profile>PROFILE</Profile>
            <Lov>
               <AdminUserApplicationCard
                  email={store?.contact}
                  name={store?.name}
               />
               {myAnnouncement === 'MyAnnouncement' && (
                  <Wrapperbtn>
                     <Button onClick={blockannouncement}>
                        BLOCK ALL ANNOUNCEMENT
                     </Button>
                  </Wrapperbtn>
               )}
               <Cart>
                  <Nav>
                     <NavLink
                        to="Bookings"
                        style={stylednav}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                     >
                        Bookings ({store?.bookings?.length})
                     </NavLink>
                     <NavLink to="MyAnnouncement" style={stylednav}>
                        My announcement ({store?.announcements?.length})
                     </NavLink>
                  </Nav>
                  <Outlet />
                  <Routes>
                     <Route
                        path="/"
                        element={<Navigate to="Bookings" replace />}
                     />
                     <Route
                        path="Bookings"
                        element={<UserAdminBookings data={store?.bookings} />}
                     />
                     <Route
                        path="MyAnnouncement"
                        element={
                           <AdminUserMyAnnouncement
                              data={store?.announcements}
                           />
                        }
                     />
                  </Routes>
               </Cart>
            </Lov>
         </Container>
      </Box>
   )
}

export default AdminUserProfile

const Wrapperbtn = styled.div`
   position: absolute;
   top: 550px;
   left: 170px;
   & > button {
      padding: 0;
      width: 292px;
      height: 37px;
   }
`
const Box = styled.div`
   width: 100%;
   background: #e5e5e5;
   padding-top: 40px;
   padding-bottom: 160px;
   min-height: 700px;
`
const Container = styled.div`
   width: 1240px;
   margin: 0 auto;
   height: auto;
   overflow: hidden;
   @media (max-width: 375px) {
      width: 377px;
      padding-left: 16px;
      height: 1600px;
   }
`
const Profile = styled.h3`
   margin-top: 40px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;
   text-transform: uppercase;
   color: #363636;
`
const Nav = styled.div`
   width: 820px;
   height: 39px;
   display: flex;
   justify-content: space-evenly;
   border-bottom: 1px solid #c4c4c4;
   position: relative;
   @media (max-width: 375px) {
      font-size: 17px;
      width: 443px;
      height: 39px;
      margin-top: 40px;
      justify-content: start;
   }
   .active {
      border-bottom: 2px solid #363636;
      transition: 0.5s;
   }
`
const Lov = styled.div`
   display: flex;
   @media (max-width: 375px) {
      display: flex;
      flex-direction: column;
   }
`
const Cart = styled.div`
   display: flex;
   flex-direction: column;
   width: 820px;
   margin-left: 50px;
   @media (max-width: 375px) {
      margin-left: 0;
   }
`
