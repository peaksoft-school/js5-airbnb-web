import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import styled from 'styled-components'
import './Slider.css'

const properties = {
   duration: 5000,
   transitionDuration: 500,
   infinite: true,
   indicators: true,
   scale: 0.4,
   arrows: true,
}
const Slider = (props) => {
   return (
      <Box className="slider-wrapper">
         <Slide {...properties}>
            {props.images.map((each) => (
               <Styledimg src={each.url} key={each.id} alt={each.id} />
            ))}
         </Slide>
      </Box>
   )
}

export default Slider

const Box = styled.div`
   width: 295px;
   height: 191px;
   @media screen and (max-width: 375px) {
      width: 343px;
   }
   & > div {
      @media screen and (max-width: 375px) {
         width: 343px;
      }
      & > div {
         @media screen and (max-width: 375px) {
            width: 343px;
         }
         & > .slide {
            @media screen and (max-width: 375px) {
               width: 343px;
            }
            & > div {
               @media screen and (max-width: 376px) {
                  width: 343px;
               }
            }
         }
      }
   }
   & > button {
      display: none;
   }
   & :hover {
      & > button {
         display: block;
      }
   }
   & > ul {
      display: none;
   }
   & :hover {
      & > ul {
         display: block;
         padding-left: 127px;
         position: absolute;
         @media screen and (max-width: 375px) {
            padding-left: 151px;
            position: absolute;
         }
      }
   }
`
const Styledimg = styled.img`
   height: 100%;
   width: 100%;
`
