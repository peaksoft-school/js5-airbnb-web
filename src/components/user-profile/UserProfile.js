import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes, Outlet, NavLink, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { getUserBooking } from '../../store/slices/getUserAnniuncement'
import Bookings from './Bookings'
import MyAnnouncment from './MyAnnouncement'
import OnModeration from './OnModeration'
import UserCard from './UserCartd'
import UserMessage from './UserMessage'

function UserProfile() {
   const stylednav = {
      color: '#6C6C6C',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '17px',
      lineHeight: '12px',
      textDecoration: 'none',
   }
   const data = useSelector((s) => s.getUserAnnouncement)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getUserBooking())
   }, [])
   const announcement = data.announcements?.filter((i) => i.status !== 'NEW')
   const moderation = data.announcements?.filter((i) => i.status === 'NEW')
   return (
      <Box>
         <Container>
            <Profile>PROFILE</Profile>
            <Lov>
               <div className="positionCard">
                  <UserCard
                     email={data.user.email}
                     name={data.user.name}
                     phoneNumber={data.user.phoneNumber}
                  />
                  {data?.messageFromAdmin[0] && (
                     <UserMessage messageFromAdmin={data.messageFromAdmin} />
                  )}
               </div>
               <Cart>
                  <Nav>
                     <NavLink
                        to="Bookings"
                        style={stylednav}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                     >
                        Bookings({data.bookings.length})
                     </NavLink>
                     <NavLink to="MyAnnouncement" style={stylednav}>
                        My announcement({announcement.length})
                     </NavLink>
                     <NavLink to="OnModeration" style={stylednav}>
                        On Moderation({moderation.length})
                     </NavLink>
                  </Nav>
                  <Outlet />
                  <Routes>
                     <Route
                        path=""
                        element={<Navigate to="/Bookings" replace />}
                     />
                     <Route
                        path="/Bookings"
                        element={<Bookings data={data.bookings} />}
                     />
                     <Route
                        path="/MyAnnouncement"
                        element={<MyAnnouncment data={announcement} />}
                     />
                     <Route
                        path="/OnModeration"
                        element={<OnModeration data={moderation} />}
                     />
                  </Routes>
               </Cart>
            </Lov>
         </Container>
      </Box>
   )
}

export default UserProfile

const Box = styled.div`
   width: 100%;
   background: #f7f7f7;
   padding-top: 40px;
   padding-bottom: 160px;
`
const Container = styled.div`
   width: 1240px;
   margin: 0 auto;
   height: auto;
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
   &.positionCard {
      display: flex;
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
