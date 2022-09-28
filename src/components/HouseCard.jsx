import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import locationIcon from '../assets/icons/locationIcon.png'
import star from '../assets/icons/Star.png'
import { getPopularHouse } from '../store/slices/SelectFilterInnerPageUserActions'

const HouseCard = () => {
   const store = useSelector((store) => store?.selectfilterData?.popularHouse)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getPopularHouse())
   }, [])
   const nav = useNavigate()
   return (
      <Cards>
         {store.map((each) => (
            <Container
               key={each.id}
               onClick={() => {
                  nav(`/main/catalog/${each.id}`)
               }}
            >
               <IMG src={each.images[0]} alt={each.title} />
               <Title>{each.title}</Title>
               <Location>
                  <img src={locationIcon} alt="locationIcon" />
                  <p>{each.location}</p>
               </Location>
               <Price>
                  $<p>{each.price}</p>
                  <span>/ day</span>
               </Price>
               <Rating>
                  <img src={star} alt="star" />
                  <p>{each.rating}</p>
               </Rating>
            </Container>
         ))}
      </Cards>
   )
}
export default HouseCard

const Cards = styled.div`
   display: flex;
   width: 1240px;
   margin: 0 auto;
   gap: 20px;
   @media screen and (max-width: 375px) {
      flex-direction: column;
      width: 375px;
      padding: 0 16px;
   }
`
const Container = styled.div`
   position: relative;
   width: 400px;
   height: 583px;
   @media screen and (max-width: 375px) {
      width: 375px;
      height: 434px;
   }
`
const IMG = styled.img`
   width: 400px;
   height: 484px;
   @media screen and (max-width: 375px) {
      width: 343px;
      height: 321px;
   }
`
const Rating = styled.div`
   position: absolute;
   top: 24px;
   left: 322px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 5px 11px;
   background: rgba(52, 52, 52, 0.5);
   border-radius: 2px;
   width: 62px;
   height: 25px;
   @media screen and (max-width: 375px) {
      top: 22px;
      left: 275px;
      width: 53px;
      height: 23px;
   }
   & p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
   }
   & img {
      height: 13px;
      width: 13px;
   }
`
const Title = styled.p`
   padding-top: 14px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   color: #363636;
`
const Location = styled.div`
   padding-top: 10px;
   display: flex;
   align-items: center;
   & p {
      padding-left: 8px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #757575;
   }
`
const Price = styled.span`
   padding-top: 16px;
   display: flex;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   color: #363636;
   & span {
      padding-left: 4px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #757575;
   }
`
