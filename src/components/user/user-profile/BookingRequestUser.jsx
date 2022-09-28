import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import BookingRequest from '../../BookingRequest'
import UserProfileAnnouncementCard from '../../cards/UserProfilleAnnouncementCard'

function BookingRequestUser(props) {
   const navigate = useNavigate()
   return (
      <Container>
         {props.bookingresponse > 0 && (
            <Announcement>
               {props.data?.map((el) => {
                  return (
                     <StyledUserProfile key={el.announcementId}>
                        {el.bookedResponses.length > 0 && (
                           <WrapperCard
                              onClick={() =>
                                 navigate(
                                    `/main/detailcard/${el.announcementId}`
                                 )
                              }
                           >
                              <UserProfileAnnouncementCard
                                 status="ACCEPTED"
                                 data={el}
                              />
                           </WrapperCard>
                        )}
                        <BookingRequest
                           height="20"
                           price={el.price}
                           data={el.bookedResponses}
                           id={el.announcementId}
                        />
                     </StyledUserProfile>
                  )
               })}
            </Announcement>
         )}
      </Container>
   )
}
export default BookingRequestUser
const WrapperCard = styled.div`
   cursor: pointer;
`
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
