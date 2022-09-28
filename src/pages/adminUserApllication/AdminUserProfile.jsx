import React from 'react'
import { useDispatch } from 'react-redux'
import styled, { css } from 'styled-components'
import { ReactComponent as BookmarkSvg } from '../../assets/icons/bookmarksvg.svg'
import { ReactComponent as LikeSvg } from '../../assets/icons/Like.svg'
import locationIcon from '../../assets/icons/locationIcon.png'
import star from '../../assets/icons/Star.png'
import PopUp from '../../components/UI/PopUp'
import {
   blockAnnouncementUser,
   deleteAnnouncements,
} from '../../store/slices/adminApplicationActions'

const AdminUserProfile = (props) => {
   console.log(props.data)
   const dispatch = useDispatch()
   const balls = [
      {
         text: 'delete',
         id: 1,
         onClick: () => {
            dispatch(deleteAnnouncements(props.data?.id))
            props?.onClick('delete', props.data?.id)
         },
      },
      {
         text: 'block',
         id: 2,
         onClick: () => {
            dispatch(blockAnnouncementUser(props.data?.id))
            props?.onClick('edit', props.data?.id)
         },
      },
   ]
   const num = {
      numbook: '',
      numlike: '',
   }
   if (`${props.data?.bookmarkCountAnnouncement}`.includes('-')) {
      num.numbook = `${props.data?.bookmarkCountAnnouncement}`.slice(1)
   } else {
      num.numbook = props.data?.bookmarkCountAnnouncement
   }
   if (`${props.data?.likeCountAnnouncement}`.includes('-')) {
      num.numlike = `${props.data?.likeCountAnnouncement}`.slice(1)
   } else {
      num.numlike = props.data?.likeCountAnnouncement
   }

   return (
      <StyledCard status={props.data?.status}>
         <WrapperBlock status={props.data?.status} />
         {props?.icons === 'true' ? (
            <StyledIcons status={props.data?.status}>
               <StyledData>
                  <BookmarkSvg />
                  <p>{num.numbook}</p>
               </StyledData>
               <StyledLike>
                  <LikeSvg />
                  <p>{num.numlike}</p>
               </StyledLike>
            </StyledIcons>
         ) : null}

         <StyledCardImage
            status={props.data?.status}
            src={props.data?.image}
            alt="card"
         />
         <Cont>
            <p>$ {props.data?.price} / day</p>
            <div>
               <img src={star} alt="star" />
               <p>{`${props.data?.rating}`.slice(0, 3)}</p>
            </div>
         </Cont>
         <Description>
            {props.data?.title.length > 24
               ? `${props.data?.title.slice(0, 24)}...`
               : props.data?.title}
         </Description>
         <Location>
            <img src={locationIcon} alt="locationIcon" />
            <p>{props.data?.location}</p>
         </Location>
         <Amount>
            <p>{props.data?.maxGuests} guests</p>
            {props?.meetballs === 'true' ? (
               <StyledMeatBalls onClick={(e) => e.stopPropagation()}>
                  <PopUp options={balls} />
               </StyledMeatBalls>
            ) : null}
         </Amount>
      </StyledCard>
   )
}

export default AdminUserProfile

const WrapperBlock = styled.div`
   display: ${(props) => (props.status === 'ACCEPTED' ? 'none' : 'block')};
   border: 2px solid red;
   overflow: hidden;
   width: 262.5px;
   height: 336px;
   z-index: 50;
   left: -2px;
   position: absolute;
`
const StyledMeatBalls = styled.div`
   position: absolute;
   left: 210px;
   bottom: 10px;
   z-index: 50;
   @media (max-width: 375px) {
      position: relative;
      left: 115px;
   }
`
const StyledCard = styled.div`
   width: 260px;
   cursor: pointer;
   height: 336px;
   border-radius: 4px;
   background: none;
   position: relative;
   z-index: 10;
   opacity: ${(props) => (props.status === 'ACCEPTED' ? 1 : 0.5)};
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
   opacity: ${(props) => (props.status === 'ACCEPTED' ? 1 : 0.7)};
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
      opacity: ${(props) => (props.status === 'ACCEPTED' ? 0.7 : 0.5)};
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
