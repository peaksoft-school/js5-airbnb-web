import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import locationIcon from '../../../assets/icons/locationIcon.png'
import star from '../../../assets/icons/Star.png'
import BlockedCard from './BlockedCard'

const UserProfileAnnouncementCard = (props) => {
   const { open, img } = props

   const [showMessage, setShowMessage] = useState(false)

   const showMessageHandler = () => {
      setShowMessage(!showMessage)
   }
   return (
      <StyledCard open={open}>
         {open && (
            <BlockedCard
               onClick={showMessageHandler}
               openMessage={showMessage}
               onOpenMessage={setShowMessage}
            />
         )}
         <StyledCardImage src={img} open={open} alt="card" />
         <Cont>
            <p>{props.price}</p>
            <div>
               <img src={star} alt="star" />
               <p>{props.ratings}</p>
            </div>
         </Cont>
         <Description>{props.description}</Description>
         <Location>
            <img src={locationIcon} alt="locationIcon" />
            <p>{props.location}</p>
         </Location>
         <Amount>
            <p>{props.guestsAmount} guests</p>
         </Amount>
      </StyledCard>
   )
}

export default UserProfileAnnouncementCard

const StyledCard = styled.div`
   width: 260px;
   height: 320px;
   border-radius: 4px;
   background: ${(props) =>
      props.open === true ? 'rgba(212, 212, 212, 0.4)' : 'white'};
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
const Description = styled.p`
   padding: 0 12px;
`
const Amount = styled.div`
   padding: 25px 12px 21px;
   color: #939393;
   font-size: 14px;
`
