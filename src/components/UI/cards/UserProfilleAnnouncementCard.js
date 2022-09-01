/* eslint-disable import/order */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import locationIcon from '../../../assets/icons/locationIcon.png'
import star from '../../../assets/icons/Star.png'
import date from '../../../assets/icons/Frame (2).svg'
import MeatBalls from '../MeatBalls'
import BlockedInfoMessage from './BlockedInfoMessage'
import like from '../../../assets/icons/Like.png'

const UserProfileAnnouncementCard = (props) => {
   // const { isBlocked, img } = props

   const balls = [
      {
         text: 'delet',
         id: 1,
         onClick: (text, id) => {
            props.onClick(text, id)
         },
      },
      {
         text: 'edit',
         id: 2,
         onClick: (text, id) => {
            props.onClick(text, id)
         },
      },
   ]

   const [showMessage, setShowMessage] = useState(false)

   const showMessageHandler = () => {
      setShowMessage(!showMessage)
   }

   return (
      <StyledCard isBlocked={props.isBlocked} open={props.open}>
         {props.isBlocked && (
            <BlockedInfoMessage
               onClick={showMessageHandler}
               openMessage={showMessage}
               onOpenMessage={setShowMessage}
            />
         )}
         {props.icons === 'true' ? (
            <StyledIcons>
               <StyledData>
                  <img src={date} />
                  <p>{props.bookingQuantity}</p>
               </StyledData>
               <StyledLike>
                  <img src={like} />
                  <p>{props.likeQuantity}</p>
               </StyledLike>
            </StyledIcons>
         ) : null}
         <StyledCardImage
            src={props.data.img}
            isBlocked={props.data.isBlocked}
            alt="card"
         />
         <Cont>
            <p>{props.data.price}</p>
            <div>
               <img src={star} alt="star" />
               <p>{props.data.ratings}</p>
            </div>
         </Cont>
         <Description>{props.data.description}</Description>
         <Location>
            <img src={locationIcon} alt="locationIcon" />
            <p>{props.data.location}</p>
         </Location>
         <Amount>
            <p>{props.data.guestsAmount} guests</p>
            {props.meetballs === 'true' ? (
               <StyledMeatBalls>
                  <MeatBalls
                     state={props.opens}
                     setState={props.setOpen}
                     balls={balls}
                     id={props.data.id}
                  />
               </StyledMeatBalls>
            ) : null}
         </Amount>
      </StyledCard>
   )
}

export default UserProfileAnnouncementCard

const StyledMeatBalls = styled.div`
   position: relative;
   left: 210px;
   bottom: 10px;
   @media (max-width: 375px) {
      position: relative;
      left: 115px;
   }
`

const StyledCard = styled.div`
   width: 260px;
   height: 320px;
   border-radius: 4px;
   background: ${({ open }) => open || 'white'};
   position: relative;
   z-index: 10;
   opacity: 1;
   ${(props) =>
      props.width &&
      css`
         width: ${props.width};
      `}
   ${(props) =>
      props.height &&
      css`
         height: ${props.height};
      `}
   @media (max-width: 375px) {
      width: 168px;
      height: 110px;
   }
`
const StyledCardImage = styled.img`
   width: 260px;
   height: 168px;
   background-color: black;
   opacity: ${(props) => (props.open === true ? '0.5' : '1')};
   border-radius: 2px;
   ${(props) =>
      props.widthImg &&
      css`
         width: ${props.widthImg};
      `}
   ${(props) =>
      props.heightImg &&
      css`
         width: ${props.heightImg};
      `}
   @media (max-width: 375px) {
      width: 168px;
      height: 108px;
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
      @media (max-width: 375px) {
         font-size: 12px;
      }
   }
   @media (max-width: 375px) {
      padding: 0;
   }
`
const Description = styled.p`
   padding: 0 12px;
   @media (max-width: 375px) {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      padding: 0;
   }
`
const Amount = styled.div`
   padding: 25px 12px 21px;
   color: #939393;
   font-size: 14px;
`

const StyledIcons = styled.div`
   & img {
      width: 16px;
      height: 16px;
   }
   & p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #f7f7f7;
   }
   & div {
      background: #1c2e20;
      position: absolute;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      border-radius: 2px;
   }
`
const StyledData = styled.div`
   width: 45px;
   height: 27px;
   top: 12px;
   left: 12px;
`
const StyledLike = styled.div`
   width: 52px;
   height: 27px;
   top: 12px;
   left: 67px;
`
