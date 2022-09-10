import { Link } from 'react-router-dom'
import styled from 'styled-components'
import likeIcon from '../../../assets/icons/LikeBtn.svg'
import locationIcon from '../../../assets/icons/locationIcon.png'
import star from '../../../assets/icons/Star.png'
import Button from '../Button'

const FavoritesCard = (props) => {
   const DeleteFromFavoritesHandler = (id) => {
      props.like(id)
   }
   return (
      <FavoritesCards>
         {props.data.map((data) => (
            <StyledCard key={data.id}>
               <Img src={data.image} alt={data.images} />
               <InfoWrapper>
                  <AmountRatingsContainer>
                     <StyledSpan>
                        <p>${data.price} /</p>
                        <span> day</span>
                     </StyledSpan>
                     <div>
                        <img src={star} alt="star" />
                        <p> {data.ratings}</p>
                     </div>
                  </AmountRatingsContainer>
                  <Description>{data.description}</Description>
                  <Location>
                     <img src={locationIcon} alt="locationIcon" />
                     <p>{data.location}</p>
                  </Location>
                  <BottomWrap>
                     <Amount>
                        <p>{data.guestsAmount} guests</p>
                     </Amount>
                     <div>
                        <Link to="BookPage">
                           <Button>BOOK</Button>
                        </Link>
                        <Likebutton
                           onClick={() => DeleteFromFavoritesHandler(data.id)}
                        >
                           <img src={likeIcon} alt="liked" />
                        </Likebutton>
                     </div>
                  </BottomWrap>
               </InfoWrapper>
            </StyledCard>
         ))}
      </FavoritesCards>
   )
}

export default FavoritesCard

const FavoritesCards = styled.div`
   margin: 0 auto;
   width: 1240px;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   row-gap: 20px;
   @media screen and (max-width: 375px) {
      grid-template-columns: 1fr;
   }
`
const StyledCard = styled.div`
   width: 295px;
   height: 362px;
   border-radius: 4px;
   background: #f7f7f7;
   position: relative;
   z-index: 10;
   & div {
      align-items: center;
   }
   :hover {
      background: white;
   }
   @media screen and (max-width: 376px) {
      width: 343px;
      margin: 0 16px;
      overflow: hidden;
   }
`
const Img = styled.img`
   width: 295px;
   height: 191px;
   @media screen and (max-width: 376px) {
      width: 343px;
      overflow: hidden;
   }
`
const InfoWrapper = styled.div`
   padding: 0 20px;
`
const AmountRatingsContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-top: 19px;
   & div {
      width: 62px;
      height: 25px;
      background: #828282;
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 4px 11px;
      & p {
         color: white;
         font-family: 'Inter';
         font-style: normal;
         font-weight: 500;
         font-size: 14px;
         line-height: 17px;
         padding-left: 4.34px;
      }
      & img {
         height: 13px;
      }
   }
`
const StyledSpan = styled.span`
   display: flex;
   gap: 5px;
   & span {
      color: #6c6c6c;
   }
`
const Description = styled.p`
   padding-top: 18px;
   font-size: 14px;
   line-height: 17px;
`
const Location = styled.div`
   display: flex;
   align-items: center;
   padding-top: 8px;
   & p {
      color: #828282;
      margin-left: 7px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      height: 17px;
      text-overflow: ellipsis;
   }
`
const BottomWrap = styled.div`
   display: flex;
   justify-content: space-between;
   padding-top: 18px;
   & div {
      display: flex;
      gap: 10px;
      align-items: center;
      & button:nth-child(1) {
         width: 102px;
         height: 27px;
         padding-top: 6px;
      }
   }

   @media screen and (max-width: 376px) {
      width: 303px;
      justify-content: space-between;
   }
`
const Amount = styled.div`
   color: #939393;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
`
const Likebutton = styled.button`
   border: 1px solid #dd8a08;
   width: 40px;
   height: 27px;
   border-radius: 2px;
   align-items: center;
   box-sizing: border-box;
   justify-content: center;
   padding: 6px 8px;
`
