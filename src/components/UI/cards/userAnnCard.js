import styled from 'styled-components'
import locationIcon from '../../../assets/icons/locationIcon.png'
import star from '../../../assets/icons/Star.png'
import cardPic from '../../../assets/images/cardPic.png'

const card = {
   price: '$26/day',
   ratings: 3.4,
   description: 'Beautiful and picturesque 2 ...',
   location: '12 Morris Ave, Toronto, ON, ...',
   guestsAmount: '2',
}

const userAnnCard = () => {
   return (
      <StyledCard>
         <img src={cardPic} alt="card" />
         <Cont>
            <p>{card.price}</p>
            <div>
               <img src={star} alt="star" />
               <p>{card.ratings}</p>
            </div>
         </Cont>
         <Descrip>{card.description}</Descrip>
         <Location>
            <img src={locationIcon} alt="locationIcon" />
            <p>{card.location}</p>
         </Location>
         <Amount>
            <p>{card.guestsAmount} guests</p>
         </Amount>
      </StyledCard>
   )
}

export default userAnnCard

const StyledCard = styled.div`
   width: 260px;
   padding: 0 12px;
   & img {
      border-radius: 2px;
   }
`

const Cont = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 16px 12px;
   & div {
      width: 62px;
      height: 25px;
      background: #828282;
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 3px 11px 4px;
      & p {
         color: white;
         font-family: sans-serif;
      }
      & img {
         height: 13px;
         margin-right: 4px;
      }
   }
`

const Location = styled.div`
   display: flex;
   align-items: center;
   padding: 8px 12px;
   & p {
      font-size: 14px;
      color: #828282;
      margin-left: 7px;
   }
`
const Descrip = styled.p`
   padding: 0 12px;
`
const Amount = styled.div`
   padding: 25px 12px;
   color: #939393;
   font-size: 14px;
`
