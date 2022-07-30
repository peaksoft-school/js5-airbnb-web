import React from 'react'
import styled from 'styled-components'
import locationIcon from '../../assets/icons/locationIcon.png'
import star from '../../assets/icons/Star.png'
import Button from '../../components/UI/Button'
import Slider from './imageSlider/Slider'

const UserProfileApartmentCard = (props) => {
   return (
      <>
         {props.ApartmentInfo.map((value) => (
            <StyledCard key={value.id}>
               <Slider data={value} />
               <ApartmentInfoWrapper>
                  <Cont>
                     <StyledP>
                        <p>${value.price} /</p>
                        <span> day</span>
                     </StyledP>
                     <div>
                        <img src={star} alt="star" />
                        <p> {value.ratings}</p>
                     </div>
                  </Cont>
                  <Description>{value.description}</Description>
                  <Location>
                     <img src={locationIcon} alt="locationIcon" />
                     <p>{value.location}</p>
                  </Location>
                  <BottomWrap>
                     <Amount>
                        <p>{value.guestsAmount} guests</p>
                     </Amount>
                     <Button style={{ fontSize: '12px', height: '27px' }}>
                        BOOK
                     </Button>
                  </BottomWrap>
               </ApartmentInfoWrapper>
            </StyledCard>
         ))}
      </>
   )
}

export default UserProfileApartmentCard

const StyledCard = styled.div`
   width: 295px;
   height: 369px;
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
   }
`
const ApartmentInfoWrapper = styled.div`
   padding: 0 20px;
`
const Cont = styled.div`
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
const StyledP = styled.p`
   display: flex;
   gap: 5px;
   & span {
      color: #6c6c6c;
   }
`
const Description = styled.p`
   padding-top: 18px;
   font-size: 16px;
   line-height: 19.36px;
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
   }
`
const BottomWrap = styled.div`
   display: flex;
   justify-content: space-between;
   padding-top: 18px;
`
const Amount = styled.div`
   color: #939393;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
`
