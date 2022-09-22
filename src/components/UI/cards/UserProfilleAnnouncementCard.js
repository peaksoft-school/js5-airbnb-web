import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import dateIcon from '../../../assets/icons/dateIcon.svg'
import likeIcon from '../../../assets/icons/Like.png'
import locationIcon from '../../../assets/icons/locationIcon.png'
import { ReactComponent as PopupSvg } from '../../../assets/icons/popupsvg.svg'
import starIcon from '../../../assets/icons/Star.png'
import { APLLICATION_STATUSES } from '../../../utils/helpers/apllicationStatuses'
import Button from '../Button'
import PopUp from '../PopUp'
import BlockedInfoMessage from './BlockedInfoMessage'

const UserProfileAnnouncementCard = (props) => {
   const balls = [
      {
         text: 'Edit',
         id: 1,
         onClick: () => {
            props.onEdit()
         },
      },
      {
         text: 'Delete',
         id: 2,
         onClick: () => {
            props.onDelete()
         },
      },
   ]

   const [showMessage, setShowMessage] = useState(false)
   const [openPopup, closePopup] = useState(false)
   const showMessageHandler = () => {
      setShowMessage((p) => !p)
   }
   const [position, setposition] = useState(null)
   const openpopup = (e) => {
      setposition(e.currentTarget)
      closePopup((p) => !p)
   }
   const closepopup = () => {
      setposition(null)
   }
   const { NEW } = APLLICATION_STATUSES
   const message = {
      message: '',
   }
   if (props.data.status === APLLICATION_STATUSES.NEW) {
      message.message = 'Your added application is reviewed by administration'
   }
   if (props.data.status === APLLICATION_STATUSES.REJECTED) {
      message.message =
         'Your application blocked by administration, please edite or delete this application'
   }
   return (
      <StyledCard
         onClick={(e) => {
            e.stopPropagation()
            props.innerPage()
         }}
         isBlocked={props.isBlocked}
         status={props.data?.status}
      >
         {props.data?.status !== APLLICATION_STATUSES.ACCEPTED && (
            <BlockedInfoMessage
               openMessage={showMessage}
               onOpenMessage={showMessageHandler}
               message={props.data?.messagesFromAdmin || message.message}
            />
         )}
         {props.bookmarkCountAnnouncement >= 1 && (
            <StyledData>
               <img src={dateIcon} alt="icone date" />
               <p>{props.bookmarkCountAnnouncement}</p>
            </StyledData>
         )}
         {props.likeCountAnnouncement >= 1 && (
            <StyledLike>
               <img src={likeIcon} alt="icone like" />
               <p>{props.likeCountAnnouncement}</p>
            </StyledLike>
         )}
         <StyledCardImage
            src={props.data?.image || props.data?.images}
            isBlocked={props.data.isBlocked}
            alt="card"
         />
         <Cont>
            <span>
               <p>${props.data.price}/</p>
               <StyledDay>day</StyledDay>
            </span>
            <div>
               <img src={starIcon} alt="star" />
               <p>{`${props.data.rating}`.slice(0, 3)}</p>
            </div>
         </Cont>
         <Description>{props.data.title}</Description>
         <Location>
            <img src={locationIcon} alt="locationIcon" />
            <p>{props.data.location}</p>
         </Location>
         <Amount>
            <p>{props.data.maxGuests} guests</p>
            {props.data?.status === NEW && (
               <StyledBlockButton>
                  <Button disabled>On Moderation</Button>
               </StyledBlockButton>
            )}
            {props.data.status === APLLICATION_STATUSES.REJECTED ||
            props.data.status === APLLICATION_STATUSES.BLOCKED ? (
               <StyledBlockButtonMeatbalse
                  onClick={(e) => {
                     e.stopPropagation()
                     openpopup(e)
                  }}
               >
                  {props.meetballs && (
                     <PopUp
                        openPopup={openPopup}
                        closePopup={(e) => {
                           openpopup(e)
                        }}
                        options={balls}
                        id={props.data.id}
                        position={position}
                     >
                        <Button variant="contained">BLOCK</Button>
                     </PopUp>
                  )}
               </StyledBlockButtonMeatbalse>
            ) : (
               <StyledMeatBalls
                  onClick={(e) => {
                     e.stopPropagation()
                     openpopup(e)
                  }}
               >
                  {props.meetballs && (
                     <PopUp
                        openPopup={openPopup}
                        closePopup={() => {
                           closepopup()
                        }}
                        options={balls}
                        id={props.data.id}
                        position={position || null}
                     >
                        <PopupSvg />
                     </PopUp>
                  )}
               </StyledMeatBalls>
            )}
         </Amount>
      </StyledCard>
   )
}

export default UserProfileAnnouncementCard

const StyledMeatBalls = styled.div`
   position: relative;
   left: 215px;
   bottom: 15px;
   @media (max-width: 375px) {
      position: relative;
      left: 115px;
   }
`

const StyledCard = styled.div`
   cursor: pointer;
   overflow: hidden;
   width: 260px;
   height: 336px;
   border-radius: 4px;
   background: ${({ status }) =>
      status !== APLLICATION_STATUSES.ACCEPTED ? '#D4D4D4' : 'none'};
   position: relative;
   z-index: 10;
   opacity: ${({ status, isBlocked }) =>
      status !== APLLICATION_STATUSES.ACCEPTED || isBlocked ? '0.7' : '1'};
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
const StyledBlockButtonMeatbalse = styled.div`
   position: absolute;
   bottom: 8px;
   left: 165px;
   & > button {
      padding: 0;
      width: 85px;
   }
`
const StyledBlockButton = styled.div`
   position: absolute;
   bottom: 8px;
   left: 100px;
   & > button {
      padding: 0;
   }
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
