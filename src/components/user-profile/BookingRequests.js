import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
   acceptBookingRequests,
   rejectBookingRequests,
} from '../../store/slices/getUserAnniuncement'
import UserProfileAnnouncementCard from '../UI/cards/UserProfilleAnnouncementCard'
import DatesOfBookedAnnouncements from '../UI/DatesOfBookedAnnouncements'

function BookingRequests(props) {
   const dispatch = useDispatch()

   const acceptBoogingRequests = (announcementId, bookingId) => {
      dispatch(acceptBookingRequests({ announcementId, bookingId }))
   }

   const rejectUserBookingRequests = (announcementId, bookingId) => {
      dispatch(rejectBookingRequests({ announcementId, bookingId }))
   }
   return (
      <Container>
         {props.bookingresponse.length >= 1 && (
            <Announcement>
               {props.data?.map((el) => {
                  return (
                     <StyledUserProfile key={el.announcementId}>
                        <UserProfileAnnouncementCard data={el} />
                        <DatesOfBookedAnnouncements
                           height="20"
                           data={el.bookedResponses}
                           id={el.announcementId}
                           acceptBoogingRequests={acceptBoogingRequests}
                           rejectUserBookingRequests={rejectUserBookingRequests}
                        />
                     </StyledUserProfile>
                  )
               })}
            </Announcement>
         )}
      </Container>
   )
}

export default BookingRequests
const Container = styled.div`
   display: flex;
   flex-direction: column;
`
const Announcement = styled.div`
   margin-top: 31px;
   width: 850px;
   column-gap: 6px;
   height: auto;
   display: flex;
   flex-wrap: wrap;
   row-gap: 19px;
   align-items: center;
   @media (max-width: 375px) {
      display: grid;
      column-gap: 10px;
      row-gap: 160px;
      grid-template-columns: auto auto;
      margin: 20px 0 0 0;
   }
`
const StyledUserProfile = styled.div`
   display: flex;
   column-gap: 16px;
   margin-right: 15px;
   @media (max-width: 375px) {
      margin-top: 15px;
   }
`
