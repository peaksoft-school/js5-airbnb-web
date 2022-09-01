/* eslint-disable import/order */
import styled from 'styled-components'
import UserCard from './UserCartd'
import { Route, Routes, Outlet, NavLink, Navigate } from 'react-router-dom'
import Bookings from './Bookings'
import MyAnnouncment from './MyAnnouncement'
import OnModeration from './OnModeration'

function UserProfile() {
   const stylednav = {
      color: '#6C6C6C',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '18px',
      lineHeight: '22px',
      textDecoration: 'none',
   }
   return (
      <Box>
         <Container>
            <Profile>PROFILE</Profile>
            <Lov>
               <UserCard emile="mederbekov@gmail.com" name="Meder" />
               <Cart>
                  <Nav>
                     <NavLink
                        to="Bookings"
                        style={stylednav}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                     >
                        Bookings(4)
                     </NavLink>
                     <NavLink to="MyAnnouncement" style={stylednav}>
                        My announcement(8)
                     </NavLink>
                     <NavLink to="OnModeration" style={stylednav}>
                        On Moderation(36)
                     </NavLink>
                  </Nav>
                  <Outlet />
                  <Routes>
                     <Route
                        path=""
                        element={<Navigate to="/Bookings" replace />}
                     />
                     <Route path="/Bookings" element={<Bookings />} />
                     <Route
                        path="/MyAnnouncement"
                        element={<MyAnnouncment />}
                     />
                     <Route path="/OnModeration" element={<OnModeration />} />
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
   @media (max-width: 375px) {
      /* margin-left: 16px; */
   }
`
const Nav = styled.div`
   width: 820px;
   height: 39px;
   display: flex;
   justify-content: space-evenly;
   border-bottom: 1px solid #c4c4c4;
   position: relative;
   @media (max-width: 375px) {
      width: 343px;
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
   margin-left: 60px;
   @media (max-width: 375px) {
      margin-left: 0;
   }
`
