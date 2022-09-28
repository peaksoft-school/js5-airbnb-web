import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as ApartmenttypeSvg } from '../../assets/icons/apartmenttype.svg'
import { ReactComponent as BookmarkSvg } from '../../assets/icons/bookmark.svg'
import { ReactComponent as HousetypeSvg } from '../../assets/icons/housetype.svg'
import IconShape from '../../assets/icons/IconShape.png'
import IsActiveLike from '../../assets/icons/IsActiveLike.png'
import locationIcon from '../../assets/icons/locationIcon.png'
import star from '../../assets/icons/Star.png'
import {
   postBookmark,
   postLikeorDislike,
} from '../../store/slices/LikeAndBookmarkSlice'
import { showSuccessMessage } from '../../utils/helpers/ToastyfyFunction'
import Button from '../UI/Button'
import Slider from './imageSlider/Slider'

const ClientApartmentCard = (props) => {
   const login = useSelector((s) => s?.login?.login?.jwt)
   const dispatch = useDispatch()
   const [like, setlike] = useState(false)
   const [booking, setbooking] = useState(false)
   const location = useLocation()
   const name = location.pathname.split('/')[2]
   console.log(name, 'pathname')
   const bookmark = () => {
      setbooking((p) => !p)
      if (name !== 'favorite') {
         if (!booking) {
            dispatch(
               postBookmark({
                  id: props.data.id,
                  bool: !booking,
               })
            )
            showSuccessMessage(
               'Successfully added in your favorite announcement'
            )
         } else {
            dispatch(
               postBookmark({
                  id: props.data.id,
                  bool: !booking,
               })
            )
            showSuccessMessage(
               'Successfully deleted in your favorite announcement'
            )
         }
      } else {
         dispatch(
            postBookmark({
               id: props.data.id,
               bool: !booking,
            })
         )
         showSuccessMessage(
            'Successfully deleted in your favorite announcement'
         )
      }
   }

   const [, setopensignup] = useSearchParams()

   const handleClick = () => {
      if (login) {
         setlike((p) => !p)
         if (!like) {
            dispatch(postLikeorDislike({ id: props.data.id, bool: !like }))
            showSuccessMessage('Successfully liked')
         } else {
            dispatch(postLikeorDislike({ id: props.data.id, bool: !like }))
            showSuccessMessage('Successfully disliked')
         }
      } else {
         setopensignup({ userSignup: 'open' })
      }
   }

   return (
      <StyledCard>
         {props.data?.type === 'HOUSE' ? (
            <Type>
               <HousetypeSvg />
            </Type>
         ) : (
            <Type>
               <ApartmenttypeSvg />
            </Type>
         )}
         <WrapperSlide onClick={(e) => e.stopPropagation()}>
            <Slider images={props.data?.images || props.data?.image} />
         </WrapperSlide>
         <ApartmentInfoWrapper>
            <AmountRatingsContainer>
               <StyledSpan>
                  <p>${props.data?.price} /</p>
                  <span> day</span>
               </StyledSpan>
               <div>
                  <img src={star} alt="star" />
                  <p>
                     {props.data?.rating !== 'NaN'
                        ? `${props.data?.rating}`.slice(0, 3)
                        : null}
                  </p>
               </div>
            </AmountRatingsContainer>
            <Description>{props.data?.title}</Description>
            <Location>
               <img src={locationIcon} alt="locationIcon" />
               <p>{props.data?.location}</p>
            </Location>
            <BottomWrap bool={login}>
               <Amount>
                  <p>{props.data?.maxGuests} guests</p>
               </Amount>
               <Link to={`${props.data?.id}`}>
                  <Button>BOOK</Button>
               </Link>
               <WrapperSlide onClick={(e) => e.stopPropagation()}>
                  <Liked
                     onClick={handleClick}
                     src={like ? IsActiveLike : IconShape}
                     alt="like"
                  />
                  <p>Add like or dislike</p>
               </WrapperSlide>
               {login && (
                  <WrapperSlide onClick={(e) => e.stopPropagation()}>
                     <BookmarkSvg onClick={bookmark} />
                     <p>Add in favorite</p>
                  </WrapperSlide>
               )}
            </BottomWrap>
         </ApartmentInfoWrapper>
      </StyledCard>
   )
}

export default ClientApartmentCard
const WrapperSlide = styled.div``
const Liked = styled.img`
   width: 22.75px;
   height: 19.5px;
   cursor: pointer;
`
const Type = styled.span`
   position: absolute;
   width: 22px;
   height: 22px;
   display: flex;
   align-items: center;
   justify-content: center;
   top: 5px;
   left: 5px;
   z-index: 20;
   background-color: orange;
   border-radius: 50%;
   & > :hover {
      & > svg {
         width: 30px;
         height: 30px;
      }
   }
   & > svg {
      width: 15px;
      height: 15px;
   }
`
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
      margin: 0 16px;
      overflow: hidden;
   }
`
const ApartmentInfoWrapper = styled.div`
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
   bottom: 10px;
   width: 260px;
   align-items: center;
   display: flex;
   position: absolute;
   justify-content: space-between;
   flex-direction: row;
   align-content: center;
   & > a > button {
      padding: 0;
      width: 120px;
   }
   & > :nth-child(4) {
      position: relative;
      cursor: pointer;
      & > p {
         display: none;
      }
   }
   & > :nth-child(4):hover {
      & > p {
         display: flex;
         width: 150px;
         position: absolute;
         left: -80px;
         top: -30px;
         color: orange;
         font-family: 'Inter';
      }
   }
   & > :nth-child(3) {
      position: relative;
      cursor: pointer;
      & > p {
         display: none;
      }
   }
   & > :nth-child(3):hover {
      & > p {
         display: ${({ bool }) => (bool ? 'flex' : 'none')};
         width: 150px;
         position: absolute;
         left: -80px;
         top: -30px;
         color: orange;
         font-family: 'Inter';
      }
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
