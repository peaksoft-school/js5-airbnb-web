import { useState } from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as LeftArrow } from '../../../assets/icons/left-arr.svg'
import locationIcon from '../../../assets/icons/locationIcon.png'
import { ReactComponent as RightArrow } from '../../../assets/icons/right-arr.svg'
import star from '../../../assets/icons/Star.png'
import MeatBalls from '../MeatBalls'

const balls = [
   {
      text: 'Accept',
      id: 1,
   },
   {
      text: 'Delete',
      id: 2,
   },
   {
      text: 'Reject',
      id: 3,
   },
]

const AdminProfileApplicationCard = (props) => {
   const [currentSlide, setCurrentSlide] = useState(0)
   const { isViewed, slides } = props

   const nextSlideHandler = () => {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
   }
   const prevSlideHandler = () => {
      setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
   }

   return (
      <StyledCard isViewed={isViewed}>
         <ImageSlider>
            {slides.map((slide, index) => {
               return (
                  <div>
                     <StyledSlider>
                        {index === currentSlide && (
                           <StyledImagesAndArrows>
                              <StyledCardImage
                                 src={slide.image}
                                 alt="house images"
                              />
                              <StyledArrows>
                                 <LeftArrow onClick={prevSlideHandler} />
                                 <RightArrow onClick={nextSlideHandler} />
                              </StyledArrows>
                              <Indicators>
                                 {slides.map((slides, index) => (
                                    <StyledIndicator
                                       slideIndex={currentSlide}
                                       index={index}
                                    />
                                 ))}
                              </Indicators>
                           </StyledImagesAndArrows>
                        )}
                     </StyledSlider>
                  </div>
               )
            })}
         </ImageSlider>

         <Cont>
            <p>
               ${props.price} / <StyledSpan>day</StyledSpan>
            </p>
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
            <MeatBalls balls={balls} />
         </Amount>
      </StyledCard>
   )
}

export default AdminProfileApplicationCard

const Indicators = styled.div`
   display: flex;
   z-index: 10;
`

const StyledIndicator = styled.button`
   width: 6px;
   height: 6px;
   border: none;
   background: ${(props) =>
      props.slideIndex === props.index ? '#FFBE58' : ' #F7F7F7'};
   margin: 0.2em;
   border-radius: 50%;
   cursor: pointer;
`

const StyledSpan = styled.span`
   color: #6c6c6c;
`
const StyledImagesAndArrows = styled.div`
   display: block;
   /* width: 210px;
   height: 136px; */
   position: relative;
   & > :nth-child(2) {
      display: none;
   }
   :hover {
      & > :nth-child(2) {
         display: block;
      }
   }
   & > :nth-child(3) {
      display: none;
      position: absolute;
      bottom: 10px;
      left: 40%;
   }
   :hover {
      & > :nth-child(3) {
         display: block;
      }
   }
`
const StyledArrows = styled.div`
   width: 210px;
   position: absolute;
   top: 55px;
   cursor: pointer;

   & > :nth-child(2) {
      position: absolute;
      right: 5px;
      fill: #828282;
      & :hover {
         fill: #dd8a08;
      }
      & :active {
         fill: #dd8a08;
      }
   }
   & > :nth-child(1) {
      position: absolute;
      left: 5px;
      fill: #828282;
      & :hover {
         fill: #dd8a08;
      }
      & :active {
         fill: #dd8a08;
      }
   }
   @media screen and (max-width: 375px) {
      width: 316px;
      top: 80px;
   }
`
const StyledSlider = styled.div`
   position: absolute;
   cursor: pointer;
`
const ImageSlider = styled.div`
   display: flex;
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
      @media screen and (max-width: 375px) {
      width: 318px;
      height: 191px;
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
