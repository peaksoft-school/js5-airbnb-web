/* eslint-disable import/order */
import styled from 'styled-components'
import Button from '../UI/Button'
import { array } from './MyAnnouncement'
import AdminProfileApplicationCard from '../UI/cards/UserProfilleAnnouncementCard'
import slides2 from '../../assets/images/Rectangle 14.png'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUserBooking } from '../../store/slices/getUserAnniuncement'

function Bookings() {
   const data = useSelector((s) => s)
   console.log(data)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getUserBooking())
   }, [])
   return (
      <Announcement>
         {array.map((el) => {
            return (
               <StyledCard key={el.id}>
                  <AdminProfileApplicationCard
                     img={slides2}
                     price={el.price}
                     ratings={el.ratings}
                     description={el.description}
                     location={el.location}
                     guestsAmount={el.guestsAmount}
                     open="none"
                     data={el}
                     key={el.id}
                  />
                  <Block>
                     <div>
                        <Par>Check in</Par>
                        <Date>02.02.22</Date>
                     </div>
                     <div>
                        <Par>Check out</Par>
                        <Date style={{ marginLeft: '10px' }}>02.02.22</Date>
                     </div>
                  </Block>
                  <Button
                     widthMedia="168px !important"
                     width="260px"
                     height="37px"
                     fontSize="14px"
                  >
                     change
                  </Button>
               </StyledCard>
            )
         })}
      </Announcement>
   )
}

export default Bookings

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
   @media (max-width: 375px) {
      margin: 155px 10px 0 10px;
      padding-bottom: 8px;
   }
`
const StyledCard = styled.div`
   display: flex;
   flex-direction: column;
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
