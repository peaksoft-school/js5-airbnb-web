import { useEffect, useState } from 'react'
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
import {
   findUserAnnouncement,
   getBookingAnnouncement,
   getBookingMyAnnouncement,
   getUserAnnouncementCard,
} from '../../../store/slices/getUserAnnouncement'
import LoadingSpinner from '../../LoadingSpinner'
import BreadCrumbs from '../../UI/BreadCrumbs'
import BookingRequestUser from './BookingRequestUser'
import Bookings from './Bookings'
import MyAnnouncment2 from './MyAnnouncement2'
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
   const store = useSelector((s) => s?.getUserannouncementcard)
   const allbooking = useSelector((s) => s.getUserannouncementcard)
   console.log(allbooking, 'user card')
   const arr = store.bookingsRequests?.map((i) => {
      const booking = i.bookedResponses.filter((i) => i.status !== 'REJECTED')
      const newbooking = {
         announcementId: i.announcementId,
         bookedResponses: booking,
         description: i.description,
         images: i.images,
         location: i.location,
         maxGuests: i.maxGuests,
         price: i.price,
         rating: i.rating,
         title: i.title,
         type: i.type,
      }
      return newbooking
   })
   const book = arr.filter((i) => i.bookedResponses.length > 0)
   console.log(book, 'book')
   const dispatch = useDispatch()
   const location = useLocation()
   const id = location.pathname.split('/')[3]
   const [show, setshow] = useState(false)
   useEffect(() => {
      if (/[0-9]/.test(id)) {
         dispatch(findUserAnnouncement(id))
         setshow(true)
      } else {
         setshow(false)
      }
      dispatch(getUserAnnouncementCard())
   }, [])
   useEffect(() => {
      dispatch(getBookingMyAnnouncement())
   }, [])
   useEffect(() => {
      dispatch(getBookingAnnouncement())
   }, [store?.statusbookingReject])
   const announcement = store.announcement.filter((i) => {
      if (i.status === 'NEW' || i.status === 'SEEN') {
         return null
      }
      return i
   })
   const moderation = store.announcement.filter((i) => {
      if (i.status === 'NEW' || i.status === 'SEEN') {
         return i
      }
      return null
   })

   return (
      <Box>
         {store.status === 'success' || store.status === 'error' ? null : (
            <LoadingSpinner />
         )}
         <Container>
            {show ? (
               <BreadCrumbs location={location} translate="example" />
            ) : (
               <BreadCrumbs location={location} translate="almaz" />
            )}
            <Profile>PROFILE</Profile>
            <Lov>
               <UserCard
                  email={store?.user?.email}
                  name={store?.user?.name}
                  phoneNumber={store.user?.phoneNumber}
               />
               {store.user.messageFromAdmin?.length > 0 && (
                  <UserMessage
                     messageFromAdmin={store?.user?.messageFromAdmin}
                  />
               )}
               <Cart>
                  <Nav>
                     <NavLink
                        to="Bookings"
                        style={stylednav}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                     >
                        Bookings({store.bookings.length})
                     </NavLink>
                     <NavLink to="Booking_requests" style={stylednav}>
                        Booking requests ({book.length})
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
                     <Route>
                        <Route path="/*" element={<Navigate to="Bookings" />} />
                        <Route
                           path="Bookings"
                           element={<Bookings data={allbooking.allbookings} />}
                        />
                        <Route
                           path="Booking_requests"
                           element={
                              <BookingRequestUser
                                 bookingresponse={book.length}
                                 data={book}
                              />
                           }
                        />
                        <Route
                           path="MyAnnouncement"
                           element={<MyAnnouncment2 data={announcement} />}
                        />
                        <Route
                           path="OnModeration"
                           element={<OnModeration data={moderation} />}
                        />
                     </Route>
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
   min-height: 700px;
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
   position: relative;
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
