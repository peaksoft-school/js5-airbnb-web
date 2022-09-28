import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as Blockedsvg } from '../../assets/icons/blockedsvg.svg'
import { ReactComponent as BookmarkSvg } from '../../assets/icons/bookmarksvg.svg'
import { ReactComponent as LikeSvg } from '../../assets/icons/Like.svg'
import locationIcon from '../../assets/icons/locationIcon.png'
import star from '../../assets/icons/Star.png'
import Button from '../UI/Button'
import PopUp from '../UI/PopUp'

const UserProfileAnnouncementCard = (props) => {
   const balls = [
      {
         text: 'delete',
         id: 1,
         onClick: () => {
            props?.onDelete()
         },
      },
      {
         text: 'edit',
         id: 2,
         onClick: () => {
            props?.onEdit()
         },
      },
   ]

   const [message, setmessage] = useState(false)

   const showmessage = () => {
      setmessage((p) => !p)
   }

   return (
      <StyledCard
         status={props.status}
         onClick={() => {
            showmessage()
         }}
      >
         <StyledIcons status={props.status}>
            {props.data?.bookmarkCountAnnouncement > 0 && (
               <StyledData>
                  <BookmarkSvg />
                  <p>{props.data?.bookmarkCountAnnouncement}</p>
               </StyledData>
            )}
            {props.data?.likeCountAnnouncement > 0 && (
               <StyledLike>
                  <LikeSvg />
                  <p>{props.data?.likeCountAnnouncement}</p>
               </StyledLike>
            )}
         </StyledIcons>
         {props?.status !== 'ACCEPTED' ? (
            <BlockMessageWrapper onClick={(e) => e.stopPropagation()}>
               <Blockedsvg onClick={showmessage} />
               {message && props?.moderation ? (
                  <TextMessage>
                     <p>Your added application is reviewed by administration</p>
                  </TextMessage>
               ) : null}
               {message && props?.status === 'BLOCK' ? (
                  <TextMessage>
                     <p>
                        Your application blocked by administration, please edite
                        or delete this application
                     </p>
                  </TextMessage>
               ) : null}
               {message && props?.bookingpage && props.status === 'NEW' ? (
                  <TextMessage>
                     <p>Your request is reviewed by owner</p>
                  </TextMessage>
               ) : null}
               {message && props?.bookingpage && props.status === 'REJECTED' ? (
                  <TextMessage>
                     <p>Your request is rejected by owner</p>
                  </TextMessage>
               ) : null}
               {message && props.status === 'REJECTED' ? (
                  <TextMessage>
                     <p>{props.data?.messagesFromAdmin}</p>
                  </TextMessage>
               ) : null}
            </BlockMessageWrapper>
         ) : null}

         <StyledCardImage
            src={props.data.image || props.data.images[0]}
            status={props.data?.status}
            alt="card"
         />
         <Cont>
            <p>$ {props.data.price} / day</p>
            <div>
               <img src={star} alt="star" />
               <p>
                  {props.data?.rating !== 'NaN' && props.data?.rating
                     ? `${props.data?.rating}`.slice(0, 3)
                     : null}
               </p>
            </div>
         </Cont>
         <Description>{props.data?.title.substring(0, 25)}...</Description>
         <Location>
            <img src={locationIcon} alt="locationIcon" />
            <p>{props.data?.location}</p>
         </Location>
         <Amount>
            <p>{props.data?.maxGuests} guests</p>
            {props.data?.status === 'NEW' ? (
               <StyledBlockButton onClick={(e) => e.stopPropagation()}>
                  <Button disabled="true" fontSize="12px">
                     on Moderation
                  </Button>
               </StyledBlockButton>
            ) : null}
            {props?.meetballs === 'true' &&
            props.data?.status === 'ACCEPTED' ? (
               <StyledMeatBalls onClick={(e) => e.stopPropagation()}>
                  <PopUp options={balls} />
               </StyledMeatBalls>
            ) : null}
            {props?.meetballs === 'true' &&
            props.data?.status !== 'ACCEPTED' ? (
               <StyledMeatBalls2 onClick={(e) => e.stopPropagation()}>
                  <PopUp opacity={1} options={balls} />
               </StyledMeatBalls2>
            ) : null}
         </Amount>
      </StyledCard>
   )
}

export default UserProfileAnnouncementCard

const BlockMessageWrapper = styled.div`
   position: absolute;
   & > :nth-child(1) {
      position: absolute;
      top: 15px;
      left: 230px;
      cursor: pointer;
      z-index: 20;
   }
   & > :nth-child(2) {
      z-index: 20;
   }
`
const StyledMeatBalls = styled.div`
   position: relative;
   left: 210px;
   bottom: 10px;
   width: 50px;
   @media (max-width: 375px) {
      position: relative;
      left: 115px;
   }
`
const StyledMeatBalls2 = styled.div`
   position: relative;
   left: 85px;
   bottom: 27px;
   width: 50px;
   height: 30px;
   & > img {
      width: 155px;
      height: 30px;
      border-radius: 5px;
   }
   & > img:hover {
      border: 1px solid orange;
   }
   & > img:active {
      border: 1px solid orange;
   }
   @media (max-width: 375px) {
      position: relative;
      left: 115px;
   }
`

const StyledCard = styled.div`
   width: 260px;
   height: 336px;
   border-radius: 4px;
   background: ${({ status }) => (status === 'ACCEPTED' ? 'none' : '#D4D4D4')};
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
const StyledCardImage = styled.img`
   width: 260px;
   height: 168px;
   background-color: black;
   opacity: ${(props) => (props.status === 'ACCEPTED' ? '1' : '0.8')};
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
      opacity: ${(props) => (props.status === 'ACCEPTED' ? 0.7 : 0.3)};
      z-index: 5;
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
