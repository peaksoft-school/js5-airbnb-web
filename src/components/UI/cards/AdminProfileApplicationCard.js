import styled, { css } from 'styled-components'
import locationIcon from '../../../assets/icons/locationIcon.png'
import star from '../../../assets/icons/Star.png'
import cardPic from '../../../assets/images/cardPic.png'
import MeatBalls from '../MeatBalls'

const AdminProfileApplicationCard = (props) => {
   const { open, isViewed } = props
   return (
      <StyledCard open={open} isViewed={isViewed}>
         <StyledCardImage src={cardPic} open={open} alt="card" />
         <Cont>
            <p>
               ${props.price}22.4 / <StyledSpan>day</StyledSpan>
            </p>
            <div>
               <img src={star} alt="star" />
               <p>{props.ratings}3.4</p>
            </div>
         </Cont>
         <Description>
            {props.description}Beautiful and picturesque...
         </Description>
         <Location>
            <img src={locationIcon} alt="locationIcon" />
            <p>{props.location}12 Morris Ave, Toronto,...</p>
         </Location>
         <Amount>
            <p>{props.guestsAmount}2 guests</p>
            <MeatBalls />
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
`
const StyledCardImage = styled.img`
   width: 210px;
   height: 136px;
   background-color: black;
   opacity: ${(props) => (props.open === true ? '0.5' : '1')};
   border-radius: 4px 4px 0 0;
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
   padding: 12px;
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
`

const Location = styled.div`
   display: flex;
   align-items: center;
   padding: 8px 12px;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   & p {
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
`
