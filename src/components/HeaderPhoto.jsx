import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
   HeaderImages1,
   HeaderImages2,
} from '../utils/constants/image-constants/ImageConstants'

const HeaderPhoto = () => {
   return (
      <>
         <DivPhotos>
            {HeaderImages1.map((i) => {
               return (
                  <Link to={`catalog?regionId=${i.id}&page=1`} key={i.id}>
                     <DivImg>
                        <img src={i.img} alt={i.text} />
                        <p>{i.text}</p>
                     </DivImg>
                  </Link>
               )
            })}
         </DivPhotos>
         <DivPhotos2>
            {HeaderImages2.map((i) => {
               return (
                  <Link key={i.id} to={`catalog?regionId=${i.id}&page=1`}>
                     <Div5>
                        <img src={i.img} alt={i.text} />
                        <p>{i.text}</p>
                     </Div5>
                  </Link>
               )
            })}
         </DivPhotos2>
      </>
   )
}
export default React.memo(HeaderPhoto)

const DivPhotos2 = styled.div`
   margin-top: 60px;
   margin-bottom: 154px;
`
const DivPhotos = styled.div`
   box-sizing: border-box;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 20px;
   margin: 0 auto;
   margin-top: 60px;
   margin-bottom: 170px;
   width: 1240px;
   & > :nth-child(1) {
      grid-column: 1 / 1;
      grid-row: 1 / 3;
      overflow: hidden;
      width: 505px;
      height: 621px;
      & img {
         width: 505px;
         height: 621px;
      }
   }
   & > :nth-child(2) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      overflow: hidden;
      width: 347px;
      height: 302px;
      & img {
         width: 347px;
         height: 302px;
      }
   }
   & > :nth-child(3) {
      grid-column: 3 / 3;
      grid-row: 1 / 2;
      overflow: hidden;
      width: 347px;
      height: 302px;
      & img {
         width: 347px;
         height: 302px;
      }
   }
   & > :nth-child(4) {
      grid-column: 2 / 4;
      grid-row: 2 / 2;
      overflow: hidden;
      width: 715px;
      height: 299px;
      & img {
         width: 715px;
         height: 299px;
      }
   }
   & > :nth-child(5) {
      grid-column: 1 / 1;
      grid-row: 3 / 3;
      overflow: hidden;
      width: 347px;
      height: 302px;
      & img {
         width: 347px;
         height: 302px;
      }
   }
   & > :nth-child(6) {
      grid-column: 2 / 3;
      grid-row: 3 / 3;
      margin-left: -157px;
      overflow: hidden;
      width: 347px;
      height: 302px;
      & img {
         width: 347px;
         height: 302px;
      }
   }
   & > :nth-child(7) {
      grid-column: 3 / 3;
      grid-row: 3 / 5;
      margin-left: -157px;
      overflow: hidden;
      width: 505px;
      height: 621px;
      & img {
         width: 505px;
         height: 621px;
      }
   }
   & > :nth-child(8) {
      grid-column: 1 / 3;
      grid-row: 4 / 5;
      overflow: hidden;
      width: 715px;
      height: 299px;
      & img {
         width: 715px;
         height: 299px;
      }
   }
`
const DivImg = styled.div`
   cursor: pointer;
   position: relative;
   & img:hover {
      transition-duration: 0.3s;
      transform: scale(1.08, 1.08);
   }
   & p {
      position: absolute;
      bottom: 20px;
      left: 20px;
      color: #ffffff;
      text-transform: uppercase;
   }
`
const Div5 = styled.div`
   position: relative;
   margin-bottom: 16px;
   overflow: hidden;
   & > img:hover {
      transition-duration: 0.3s;
      transform: scale(1.08, 1.08);
   }
   & > p {
      position: absolute;
      bottom: 14px;
      left: 14px;
      text-transform: uppercase;
      color: #ffffff;
   }
`
