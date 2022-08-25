import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HouseCard from './HouseCards'

const PopularHouse = (props) => {
   return (
      <Container>
         <PopularHouseContainer>
            <TopDiv>
               <p>Popular house</p>
               <Link to="popularHouses">View all</Link>
            </TopDiv>
            <Link to={props.house.description}>
               <SectionDescription>
                  {props.house.description}
               </SectionDescription>
            </Link>
            <HouseCard card={props.house.card} />
         </PopularHouseContainer>
      </Container>
   )
}
export default PopularHouse
const Container = styled.div`
   width: 100%;
   background: #e5e5e5;
   margin: 0 auto;
`
const PopularHouseContainer = styled.div`
   width: 1240px;
   margin: 0 auto;
   padding-top: 170px;
   @media screen and (max-width: 375px) {
      width: 375px;
   }
`
const TopDiv = styled.div`
   width: 1240px;
   display: flex;
   justify-content: space-between;
   margin-bottom: 16px;
   @media screen and (max-width: 375px) {
      width: 375px;
      padding: 0 16px;
   }
   & p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
      color: #363636;
   }
   & a {
      color: #363636;
      font-family: 'Inter';
      font-style: normal;
      font-size: 18px;
      line-height: 22px;
   }
`
const SectionDescription = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #363636;
   margin-bottom: 60px;
   @media screen and (max-width: 375px) {
      width: 375px;
      padding: 0 16px;
      margin-bottom: 50px;
   }
`
