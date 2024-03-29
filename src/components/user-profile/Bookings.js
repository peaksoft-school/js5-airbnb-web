import styled from 'styled-components'
import Button from '../UI/Button'
import AdminProfileApplicationCard from '../UI/cards/UserProfilleAnnouncementCard'

function Bookings(props) {
   return (
      <Announcement>
         {props.data.map((el) => {
            return (
               <StyledCard key={el.id}>
                  <AdminProfileApplicationCard
                     open="true"
                     data={el}
                     key={el.id}
                  />
                  <Block>
                     <div>
                        <Par>Check in</Par>
                        <StyledDate>02.02.22</StyledDate>
                     </div>
                     <div>
                        <Par>Check out</Par>
                        <StyledDate className="leftText">02.02.22</StyledDate>
                     </div>
                  </Block>
                  <Button>CHANGE</Button>
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
   &.leftText {
      margin-left: 10px;
   }
`
const StyledCard = styled.div`
   display: flex;
   flex-direction: column;
   @media (max-width: 375px) {
      margin: 29px 0 0 0;
      height: 200px;
      :nth-child(3) {
         padding: 0;
         width: 168px;
      }
   }
   :nth-child(3) {
      padding: 0;
      width: 260px;
      height: 37px;
      font-size: 14px;
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
const StyledDate = styled.p`
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
