import { useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'
import locationIcon from '../../../assets/icons/locationIcon.png'
import star from '../../../assets/icons/Star.png'
import MeatBalls from '../../UI/MeatBalls'
import Slider from '../Slider'

const AdminProfileApplicationCard = (props) => {
   const meatBallsOptions = [
      {
         text: 'Accept',
         id: 1,
         onClick: (option, id) => {
            props.onClick(option, id)
         },
      },
      {
         text: 'Delete',
         id: 2,
         onClick: (option, id) => {
            props.onClick(option, id)
         },
      },
      {
         text: 'Reject',
         id: 3,
         onClick: (option, id) => {
            props.onClick(option, id)
         },
      },
   ]
   const { isViewed } = props
   const nav = useNavigate()
   return (
      <StyledCard
         isViewed={isViewed}
         onClick={() => {
            nav(`/application/${props.id}`)
         }}
      >
         <Slider images={props.images} />
         <Cont>
            <p>
               ${props.price} / <StyledSpan>day</StyledSpan>
            </p>
            <div>
               <img src={star} alt="star" />
               <p>{`${props.rating}`?.slice(0, 3)}</p>
            </div>
         </Cont>
         <Description>{props.title}</Description>
         <Location>
            <img src={locationIcon} alt="locationIcon" />
            <p>{props.location}</p>
         </Location>
         <Amount>
            <p>{props.maxGuests} guests</p>
            <MeatBalls balls={meatBallsOptions} id={props.id} />
         </Amount>
      </StyledCard>
   )
}

export default AdminProfileApplicationCard

const StyledSpan = styled.span`
   color: #6c6c6c;
`

const StyledCard = styled.div`
   width: 215px;
   height: 270px;
   background: white;
   border-radius: 4px;
   background: white;
   border: ${(props) =>
      props.isViewed === true ? '3px solid rgba(255, 0, 0, 0.18)' : ''};
   outline: ${(props) => (props.isViewed === true ? '3px solid #FF0000' : '')};
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
      @media screen and (max-width: 375px) {
      width: 320px;
      height: 340px;
      border: ${(props) =>
         props.isViewed === true ? '1px solid rgba(255, 0, 0, 0.18)' : ''};
      outline: ${(props) =>
         props.isViewed === true ? '3px solid #FF0000' : ''};
   }
`

const Cont = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 12px;
   margin-top: 135px;
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
         font-weight: 500;
         font-size: 14px;
         line-height: 17px;
      }
      & img {
         height: 13px;
         margin-right: 4px;
      }
   }
   @media screen and (max-width: 375px) {
      margin-top: 190px;
   }
`

const Location = styled.div`
   display: flex;
   align-items: center;
   padding: 8px 12px;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   & p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      font-size: 14px;
      color: #828282;
      margin-left: 7px;
   }
`
const Description = styled.p`
   padding: 0 12px;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
`
const Amount = styled.div`
   padding: 0 12px;
   color: #939393;
   font-size: 14px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   @media screen and (max-width: 375px) {
      padding: 12px;
   }
`
