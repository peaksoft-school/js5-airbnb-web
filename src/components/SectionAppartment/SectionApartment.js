import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PopularHouse from './PopularHouse'
import Section from './Section'

const SectionApartment = (props) => {
   return (
      <>
         <ContainerApartments>
            <PopularApartments>
               <TopDiv>
                  <p>Popular Apartments</p>
                  <Link to="PopularApartments">View all</Link>
               </TopDiv>
               <Section apartment={props.apartment} />
            </PopularApartments>
         </ContainerApartments>
         <PopularHouse house={props.house} />
         <ContainerLastest>
            <Lastest>
               <TopDiv2>
                  <p>the lastest</p>
                  <Link to="TheLastest">View all</Link>
               </TopDiv2>
               <BottomDiv>
                  <Section apartment={props.lastest} />
               </BottomDiv>
            </Lastest>
         </ContainerLastest>
      </>
   )
}
export default SectionApartment
const ContainerApartments = styled.div`
   width: 100%;
   background: #4f7755;
`
const PopularApartments = styled.div`
   width: 1240px;
   height: 880px;
   overflow: hidden;
   margin: 0 auto;
   @media screen and (max-width: 375px) {
      position: relative;
      width: 375px;
      height: 1015px;
   }
`
const TopDiv = styled.div`
   display: flex;
   justify-content: space-between;
   width: 1240px;
   margin-top: 170px;
   margin-bottom: 60px;
   @media screen and (max-width: 375px) {
      width: 375px;
      padding: 0 16px;
   }
   & a {
      color: #ffbe58;
      font-size: 16px;
      line-height: 20px;
   }
   & p {
      color: #f7f7f7;
      font-family: 'Inter';
      text-transform: uppercase;
      font-size: 20px;
      line-height: 24px;
   }
`
const BottomDiv = styled.div`
   & > div {
      background: #e5e5e5;
   }
   & p:first-child {
      color: #363636;
   }
   & p:nth-child(2) {
      color: #6a6a6a;
   }
   & div:nth-child(3) > p {
      color: #97c69e;
      @media screen and (max-width: 375px) {
         color: #828282;
      }
   }
   & div:nth-child(3) > svg > path {
      @media screen and (max-width: 375px) {
         fill: #828282;
      }
   }
   & a {
      color: #8a8a8a;
   }
   & > div {
      > :nth-child(2) > p {
         color: black;
      }
      > :nth-child(2) > svg > path {
         stroke: black;
      }
      > :nth-child(2) > svg > line {
         stroke: black;
      }
   }
`
const ContainerLastest = styled.div`
   width: 100%;
   background: #e5e5e5;
`
const Lastest = styled.div`
   width: 1240px;
   height: 880px;
   margin: 0 auto;
   overflow: hidden;
   @media screen and (max-width: 375px) {
      width: 375px;
      height: 1015px;
   }
`
const TopDiv2 = styled.div`
   display: flex;
   justify-content: space-between;
   width: 1240px;
   margin-top: 170px;
   margin-bottom: 60px;
   & a {
      font-family: 'Inter';
      font-style: normal;
      font-size: 18px;
      line-height: 22px;
      color: #363636;
   }
   & p {
      font-family: 'Inter';
      font-style: normal;
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
      color: #363636;
   }
   @media screen and (max-width: 375px) {
      width: 375px;
      padding: 0 16px 60px;
      gap: 48px;
   }
`
