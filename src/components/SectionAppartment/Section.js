import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as LeftArrow } from '../../assets/icons/LeftArrow.svg'
import locationIcon from '../../assets/icons/locationIcon2.svg'
import { ReactComponent as RightArrow } from '../../assets/icons/RightArrow.svg'

const Section1 = (props) => {
   const [currentFilter, setCurrentFilter] = useState(0)
   const [array, setarr] = useState([])
   const length = props.apartment.length - 1
   useEffect(() => {
      // eslint-disable-next-line consistent-return, array-callback-return
      const arr = props.apartment.filter((el, i) => {
         if (currentFilter + 1 === i || currentFilter + 2 === i) {
            return el
         }
      })
      if (arr.length === 1) {
         arr.push(props.apartment[0])
      }
      if (arr.length === 0) {
         arr.push(props.apartment[0])
         arr.push(props.apartment[1])
      }
      setarr(arr)
   }, [currentFilter])
   const nextFilter = () => {
      setCurrentFilter(currentFilter === length ? 0 : currentFilter + 1)
   }
   const prevFilter = () => {
      setCurrentFilter(currentFilter === 0 ? length : currentFilter - 1)
   }
   return (
      <Container>
         <div>
            {props.apartment.map(
               (data, i) =>
                  i === currentFilter && (
                     <Div>
                        <Img alt={data.id} src={data.image} key={data.id} />
                        <Text>
                           <Title>{data.title}</Title>
                           <Description>{data.description}</Description>
                           <Location>
                              <img src={locationIcon} alt="locationIcon" />
                              <Link to={data.location}>
                                 <p>{data.location}</p>
                              </Link>
                           </Location>
                           <Link to={data.description}>Read more</Link>
                        </Text>
                        <Imgs>
                           {array.map((data) => (
                              <Image
                                 key={data.id}
                                 alt={data.id}
                                 src={data.image}
                              />
                           ))}
                        </Imgs>
                     </Div>
                  )
            )}
         </div>
         <Navigators>
            <LeftArrow onClick={prevFilter} />
            <P>
               0{currentFilter + 1} / 0{length + 1}
            </P>
            <RightArrow onClick={nextFilter} />
         </Navigators>
      </Container>
   )
}
export default Section1
const Container = styled.div`
   position: relative;
   background: #4f7755;
   width: 1240px;
   @media screen and (max-width: 375px) {
      width: 375px;
      height: 1015px;
      padding: 0 16px;
   }
`
const Div = styled.div`
   display: flex;
   flex-direction: row;
   gap: 20px;
`
const Img = styled.img`
   width: 425px;
   height: 456px;
   @media screen and (max-width: 375px) {
      width: 343px;
      height: 212px;
   }
`
const Title = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-size: 18px;
   line-height: 22px;
   color: #ffffff;
`
const Text = styled.div`
   @media screen and (max-width: 375px) {
      position: absolute;
      top: 182px;
   }
   padding-top: 75px;
   & a {
      color: #ffbe58;
      font-size: 16px;
      line-height: 20px;
   }
`
const Description = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-size: 16px;
   line-height: 21px;
   color: #f7f7f7;
   width: 309px;
   height: 105px;
   padding-top: 28px;
`
const Location = styled.div`
   display: flex;
   flex-direction: row;
   gap: 10px;
   padding: 35px 0;
   & p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #97c69e;
   }
`
const Imgs = styled.div`
   display: flex;
   width: 468px;
   overflow: hidden;
   gap: 18px;
   @media screen and (max-width: 375px) {
      display: none;
   }
`
const Image = styled.img`
   width: 224px;
   height: 317px;
`
const Navigators = styled.div`
   position: absolute;
   top: 397px;
   left: 874px;
   justify-content: space-between;
   align-items: center;
   display: flex;
   width: 224px;
   & svg:hover > path {
      stroke: white;
   }
   & svg:hover > line {
      stroke: white;
   }
   @media screen and (max-width: 375px) {
      position: absolute;
      top: 568px;
      left: 0;
      width: 375px;
      padding: 0 75px;
   }
`
const P = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 21px;
   color: #ffffff;
`
