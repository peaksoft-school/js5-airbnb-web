/* eslint-disable no-nested-ternary */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import locationIcon from '../../../assets/icons/locationIcon.png'
import star from '../../../assets/icons/Star.png'
import date from '../../../assets/icons/Frame (2).svg'
import BlockedInfoMessage from './BlockedInfoMessage'
import like from '../../../assets/icons/Like.png'
import vector from '../../../assets/icons/vector.svg'
import Button from '../Button'
import PopUp from '../PopUp'

const UserProfileAnnouncementCard = (props) => {
   const balls = [
      {
         text: 'delet',
         id: 1,
         onClick: () => {
            props.onClick('delet', props.data.id)
            // props.getId(props.id)
         },
      },
      {
         text: 'edit',
         id: 2,
         onClick: () => {
            props.onEdit()
         },
      },
   ]

   // eslint-disable-next-line no-unused-vars
   // const [blockMessage, setBlockMessage] = useState(props.status)
   const [showMessage, setShowMessage] = useState(false)

   const showMessageHandler = () => {
      setShowMessage(!showMessage)
   }
   return (
      <StyledCard
         isBlocked={props.isBlocked}
         open={props.open}
         status={props.data.status}
      >
         {props.isBlocked && (
            <BlockedInfoMessage
               onClick={showMessageHandler}
               openMessage={showMessage}
               onOpenMessage={setShowMessage}
            />
         )}
         {props.bookmarkCountAnnouncement >= 1 ? (
            <StyledData>
               <img src={date} />
               <p>{props.bookmarkCountAnnouncement}</p>
            </StyledData>
         ) : null}
         {props.likeCountAnnouncement >= 1 ? (
            <StyledLike>
               <img src={like} />
               <p>{props.likeCountAnnouncement}</p>
            </StyledLike>
         ) : null}
         {props.data.status === 'NEW' ? (
            <>
               <BlockMessage src={vector} />
               <TextMessage>
                  <p>
                     Your application has been blocked, please contact the
                     administrator
                  </p>
               </TextMessage>
            </>
         ) : null}

         <StyledCardImage
            src={props.data.image}
            isBlocked={props.data.isBlocked}
            alt="card"
         />
         <Cont>
            <span>
               <p>${props.data.price}/</p>
               <StyledDay>day</StyledDay>
            </span>
            <div>
               <img src={star} alt="star" />
               <p>{props.data.ratings}</p>
            </div>
         </Cont>
         <Description>{props.data.title}</Description>
         <Location>
            <img src={locationIcon} alt="locationIcon" />
            <p>{props.data.location}</p>
         </Location>
         <Amount>
            <p>{props.data.maxGuests} guests</p>
            {props.data.status === 'NEW' ? (
               <StyledBlockButton>
                  <Button disabled fontSize="12px">
                     Blocked
                  </Button>
               </StyledBlockButton>
            ) : null}
            {props.meetballs === 'true' ? (
               <StyledMeatBalls>
                  <PopUp
                     // state={props.opens}
                     setState={props.setOpen}
                     options={balls}
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
   overflow: hidden;
   width: 260px;
   height: 336px;
   border-radius: 4px;
   background: ${({ open, status }) =>
      status === 'NEW' ? '#D4D4D4' : open === 'true' ? 'none' : 'white'};
   position: relative;
   z-index: 10;
   opacity: ${({ status }) => (status === 'NEW' ? '0.7' : '1')};
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
const BlockMessage = styled.img`
   position: absolute;
   top: 12px;
   left: 224px;
   color: red;
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
const StyledBlockButton = styled.div`
   position: absolute;
   bottom: 8px;
   left: 100px;
`
const Cont = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 16px 12px;
   & div {
      width: 62px;
      display: flex;
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
   & span {
      display: flex;
   }
   &.price {
      display: flex;
   }
`
const StyledDay = styled.p`
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #6c6c6c;
   margin-left: 5px;
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
const StyledData = styled.div`
   background: #1c2e20;
   position: absolute;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   border-radius: 2px;
   width: 45px;
   height: 27px;
   top: 12px;
   left: 12px;
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
`
const StyledLike = styled.div`
   background: #1c2e20;
   position: absolute;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   border-radius: 2px;
   width: 52px;
   height: 27px;
   top: 12px;
   left: 67px;
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
`
const TextMessage = styled.div`
   width: 214px;
   height: 34px;
   position: absolute;
   top: 42px;
   left: 34px;
   border-radius: 4px;
   background: #646464;

   & p {
      width: 201px;
      height: 24px;
      color: #ffffff;
      font-family: 'Inter';
      font-style: normal;
      margin: 5px;
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
   }
`
