import { useState } from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as LeftArrow } from '../assets/icons/left-arr.svg'
import { ReactComponent as RightArrow } from '../assets/icons/right-arr.svg'

const Slider = (props) => {
   const { slides } = props
   const [currentSlide, setCurrentSlide] = useState(0)

   const nextSlideHandler = () => {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
   }
   const prevSlideHandler = () => {
      setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
   }

   return (
      <ImageSlider>
         {slides.map((slide, index) => {
            return (
               <div>
                  <StyledSlider>
                     {index === currentSlide && (
                        <StyledImagesAndArrows>
                           <StyledCardImage
                              key={slide.id}
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
                                    key={slides.id}
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
   )
}

export default Slider
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

const StyledImagesAndArrows = styled.div`
   display: block;
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
