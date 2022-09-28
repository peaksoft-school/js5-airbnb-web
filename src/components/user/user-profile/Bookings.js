import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { deleteBooking } from '../../../store/slices/getUserAnnouncement'
import UserProfilleAnnouncementCard from '../../cards/UserProfilleAnnouncementCard'
import Button from '../../UI/Button'

function Bookings(props) {
   console.log(props.data, 'booking')
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const bookingdelete = (bookingid) => {
      dispatch(deleteBooking(bookingid))
   }
   return (
      <Announcement>
         {props.data?.map((el) => {
            return (
               <StyledCard
                  key={el.id}
                  onClick={() => navigate(`/main/catalog/${el.id}`)}
               >
                  <UserProfilleAnnouncementCard
                     open="true"
                     status={el.status}
                     bookingpage="true"
                     data={el}
                     key={el.announcementId}
                  />
                  <Block>
                     <div>
                        <Par>Check in</Par>
                        <Date>{el.checkIn}</Date>
                     </div>
                     <div>
                        <Par>Check out</Par>
                        <Date style={{ marginLeft: '10px' }}>
                           {el.checkOut}
                        </Date>
                     </div>
                  </Block>
                  {el.status === 'REJECTED' ? (
                     <WrapperDeleteBtn onClick={(e) => e.stopPropagation()}>
                        <Button
                           onClick={() => bookingdelete(el.bookingId)}
                           width="260px"
                           height="37px"
                           fontSize="14px"
                        >
                           Delete
                        </Button>
                     </WrapperDeleteBtn>
                  ) : (
                     <Button
                        widthMedia="168px !important"
                        width="260px"
                        height="37px"
                        fontSize="14px"
                     >
                        CHANGE
                     </Button>
                  )}
               </StyledCard>
            )
         })}
      </Announcement>
   )
}

export default Bookings

const WrapperDeleteBtn = styled.div``
const Announcement = styled.div`
   padding-top: 31px;
   display: flex;
   justify-content: flex-start;
   gap: 20px;
   flex-wrap: wrap;
   align-content: flex-start;
   flex-direction: row;
   width: 820px;
   margin-top: 3px;
   align-items: flex-start;
   @media (max-width: 375px) {
      display: grid;
      column-gap: 10px;
      grid-template-columns: auto auto;
      row-gap: 150px;
      margin: 5px 0 0 0;
   }
`
const Block = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 16px 12px 16px 12px;
   & > :nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
   }
   @media (max-width: 375px) {
      margin: 155px 10px 0 10px;
      padding-bottom: 8px;
   }
`
const StyledCard = styled.div`
   display: flex;
   flex-direction: column;
   cursor: pointer;
   @media (max-width: 375px) {
      margin: 29px 0 0 0;
      height: 200px;
   }
`
const Par = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #646464;
   margin-bottom: 8px;
   margin-top: 16px;
   @media (max-width: 375px) {
      font-size: 12px;
      line-height: 15px;
   }
`
const Date = styled.p`
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #363636;
   @media (max-width: 375px) {
      font-size: 14px;
      line-height: 16px;
   }
`
