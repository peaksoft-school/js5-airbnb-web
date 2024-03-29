import styled from 'styled-components'
import windowBackgroundMedia from '../assets/images/Rectangle 111.png'
import windowBackground from '../assets/images/windowback.png'
import RegionRenderImages from '../components/RegionRenderImages'
import Checkbox from '../components/UI/Checkbox'
import SearchInput from '../components/UI/SearchInput'

const MainPage = () => {
   return (
      <>
         <BoxWrapper>
            <MediaBackImg>
               <Image src={windowBackground} alt="#" />
               <Image src={windowBackgroundMedia} alt="#" />
            </MediaBackImg>
            <Title>FIND A PLACE YOU`LL LOVE TO STAY AT</Title>
            <SearchWrapper>
               <Container>
                  <SearchInput
                     width="700px"
                     placeholder="Region, city, apartment, house..."
                  />
               </Container>
               <Checkbox label="search nearby" color="#EDEDED" />
            </SearchWrapper>
         </BoxWrapper>
         <BoxWrapperRegion>
            <ContainerRegionTitle>
               <h2>Regions in kyrgystan</h2>
               <p>
                  You can visit the site any day and be sure that you will find
                  everything for a great vacation.
               </p>
            </ContainerRegionTitle>
            <RegionRenderImages />
         </BoxWrapperRegion>
      </>
   )
}
export default MainPage

const BoxWrapper = styled.div`
   text-align: center;
   margin-top: 277px;
`
const SearchWrapper = styled.div`
   display: flex;
   width: 725px;
   margin: 0 auto;
   flex-direction: column;
   align-items: flex-end;
   @media screen and (max-width: 375px) {
      overflow: hidden;
      width: 343px;
   }
`
const BoxWrapperRegion = styled.div`
   width: 1240px;
   margin: 0 auto;
   & > :nth-child(3) {
      display: none;
   }
   @media screen and (max-width: 375px) {
      width: 343px;
      overflow: hidden;
      margin: 0 auto;
      & > :nth-child(2) {
         display: none;
      }
      & > :nth-child(3) {
         display: flex;
         align-items: center;
         flex-direction: column;
         width: 343px;
      }
   }
`
const ContainerRegionTitle = styled.div`
   margin-top: 451px;
   & > :nth-child(1) {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
      color: #363636;
   }
   & > :nth-child(2) {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #363636;
      margin-top: 14px;
   }
`
const MediaBackImg = styled.div`
   & > :nth-child(1) {
      display: block;
   }
   & > :nth-child(2) {
      display: none;
   }
   @media screen and (max-width: 375px) {
      & > :nth-child(1) {
         display: none;
      }
      & > :nth-child(2) {
         display: block;
      }
   }
`
const Image = styled.img`
   padding: 0;
   width: 100%;
   height: 820px;
   z-index: -1;
   position: absolute;
   top: 0;
   left: 0;
`
const Container = styled.div`
   width: 725px;
   @media screen and (max-width: 375px) {
      width: 343px;
      height: 42px;
      overflow: hidden;
   }
`
const Title = styled.h1`
   font-family: 'Jenriv Titling';
   font-style: normal;
   font-weight: 400;
   font-size: 37px;
   line-height: 48px;
   margin-bottom: 50px;
   text-transform: uppercase;
   color: #ffffff;
   @media screen and (max-width: 375px) {
      font-weight: 400;
      font-size: 26px;
      line-height: 31px;
   }
`
