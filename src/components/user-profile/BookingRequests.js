import styled from 'styled-components'
import UserProfileAnnouncementCard from '../UI/cards/UserProfilleAnnouncementCard'
import DatesOfBookedAnnouncements from '../UI/DatesOfBookedAnnouncements'

function BookingRequests(props) {
   console.log(props.data, 'data')
   return (
      <Container>
         {props.bookingresponse.length >= 1 && (
            <Announcement>
               {props.data?.map((el) => {
                  return (
                     <StyledUserProfile key={el.id}>
                        <UserProfileAnnouncementCard data={el} />
                        <DatesOfBookedAnnouncements
                           height="20"
                           data={el.bookedResponses}
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
   /* overflow: auto; */
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
