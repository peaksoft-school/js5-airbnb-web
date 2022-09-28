import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import slides2 from '../../../assets/images/Rectangle 7 (5).png'
import { getUserAnnouncementCard } from '../../../store/slices/getUserAnnouncement'
import UserProfileAnnouncementCard from '../../cards/UserProfilleAnnouncementCard'

function OnModeration(props) {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getUserAnnouncementCard())
   }, [])

   return (
      <Announcement>
         {props.data?.map((el) => {
            return (
               <StyledUserProfile key={el.id}>
                  <UserProfileAnnouncementCard
                     img={slides2}
                     price={el.price}
                     ratings={el.ratings}
                     description={el.description}
                     location={el.location}
                     guestsAmount={el.guestsAmount}
                     open="true"
                     moderation="true"
                     data={el}
                     status={el.status}
                  />
               </StyledUserProfile>
            )
         })}
      </Announcement>
   )
}

export default OnModeration
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
      row-gap: 160px;
      grid-template-columns: auto auto;
      margin: 20px 0 0 0;
   }
`
const StyledUserProfile = styled.div`
   @media (max-width: 375px) {
      margin-top: 15px;
   }
`
// const StyledModal = styled.div`
//    width: 350px;
//    height: 100px;
//    display: flex;
//    flex-direction: column;
//    justify-content: space-evenly;
//    align-items: center;
//    @media (max-width: 375px) {
//       width: 300px;
//    }
// `
// const StyledButton = styled.div`
//    width: 350px;
//    display: flex;
//    justify-content: space-evenly;
// `
