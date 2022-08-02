import styled from 'styled-components'
import SkeletonUser from '../assets/icons/SkeletonUser.png'
// import AdminNavbar from '../layout/headers/AdminHeader/AdminHeader'
import UserHeader from '../layout/headers/User-VendorHeader/UserHeader'
import DateRangePicer from './UI/date-picker/DateRangePicker'

const ApartmentHouseInnerPageFeedback = ({ arrayApartment }) => {
   return (
      <div>
         <UserHeader />
         <AraptmentName>{arrayApartment.titleName}</AraptmentName>
         <ContainerApartmenInformation>
            <ContainerPhotos>
               <h1>
                  fdsfdsfdsавыыыыыыыыыыыыыыыsdfff
                  <br />
                  dsfsssssssssssssssssssssssssss
               </h1>
               <LitleContainerPhotos>
                  <h1>1photo</h1>
                  <h1>2photo</h1>
                  <h1>3photo</h1>
               </LitleContainerPhotos>
            </ContainerPhotos>
            <ContainerDates>
               <DivClikc>
                  <TextInDivClick1>Apartment</TextInDivClick1>
                  <TextInDivClick2>2 Guests</TextInDivClick2>
               </DivClikc>
               <TitleHome>{arrayApartment.title}</TitleHome>
               <AdressHome>{arrayApartment.adress}</AdressHome>
               <TextHome>{arrayApartment.text}</TextHome>
               <UserContainer>
                  <Img src={SkeletonUser} />
                  <UserInformationContainer>
                     <UserName>{arrayApartment.name}</UserName>
                     <UserGmail>{arrayApartment.gmail}</UserGmail>
                  </UserInformationContainer>
               </UserContainer>
               <ContainerDateRange>
                  <DateRangePicer day="24" />
               </ContainerDateRange>
            </ContainerDates>
         </ContainerApartmenInformation>
         <div>
            <div>
               <h3>feedback</h3>
            </div>
         </div>
      </div>
   )
}

const ContainerApartmenInformation = styled.div`
   width: 1316px;
   /* height: 1024px; */
   border: 1px solid blue;
   margin-left: 85px;
   display: flex;
   justify-content: space-between;
`

const ContainerPhotos = styled.div`
   border: 1px solid red;
`

const LitleContainerPhotos = styled.div`
   width: 615px;
   display: flex;
   justify-content: space-between;
   border: 1px solid red;
`

const AraptmentName = styled.h1`
   width: 130px;
   height: 59px;
   display: flex;
   align-items: center;
   margin-left: 85px;
   margin-bottom: 30px;
   margin-top: 40px;
   line-height: 24px;
   font-weight: 500;
   font-size: 20px;
   text-transform: uppercase;
   color: #000000;
`

const ContainerDates = styled.div`
   width: 542px;
   height: 278px;
   border: 1px solid red;
`

const DivClikc = styled.div`
   width: 210px;
   height: 29px;
   display: flex;
   justify-content: space-between;
`

const TextInDivClick1 = styled.span`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 95px;
   height: 29px;
   background: #fff0f6;
   border: 1px solid #ffcbe0;
   font-size: 14px;
   color: #000000;
`

const TextInDivClick2 = styled.span`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 95px;
   height: 29px;
   background: #fff0f6;
   border: 1px solid #ffcbe0;
   font-size: 14px;
   color: #000000;
`

const TitleHome = styled.h3`
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;
   margin-top: 25px;
   color: #000000;
`
const AdressHome = styled.span`
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #828282;
`

const TextHome = styled.p`
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #363636;
   margin-top: 10px;
`

const UserContainer = styled.div`
   display: flex;
   margin-top: 49px;
`

const Img = styled.img`
   width: 36px;
   height: 36px;
`

const UserInformationContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 16px;
`

const UserGmail = styled.span``

const UserName = styled.span``

const ContainerDateRange = styled.div`
   border: 1px solid aqua;
   margin-top: 30px;
`

export default ApartmentHouseInnerPageFeedback
