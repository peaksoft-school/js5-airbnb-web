import styled from 'styled-components'
import UserProfileAnnouncementCard from '../UI/cards/UserProfilleAnnouncementCard'

function OnModeration(props) {
   return (
      <Announcement>
         {props.data.map((el) => {
            return (
               <StyledUserProfile key={el.id}>
                  <UserProfileAnnouncementCard
                     data={el}
                     message="Your added application is reviewed by administration"
                  />
               </StyledUserProfile>
            )
         })}
      </Announcement>
   )
}

export default OnModeration
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
   margin-right: 15px;
   @media (max-width: 375px) {
      margin-top: 15px;
   }
`
