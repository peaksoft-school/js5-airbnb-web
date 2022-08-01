import { useState } from 'react'
import styled from 'styled-components'
import SkeletonUser from '../assets/icons/SkeletonUser.png'
import UserNavbar from '../layout/headers/AdminHeader/AdminNavbar/AdminNavbar'
import Button from './UI/Button'
import Modal from './UI/Modal'
import SnackBar from './UI/SnackBar'

const AdminApplicationsInnerPage = ({ arrayInnerPageDates }) => {
   const [isAccepted, setIsAccepted] = useState(false)
   const [isRejectModal, setIsRejectModal] = useState(false)
   const [isSent, setIsSent] = useState(false)
   const [selectImg, setSelectImage] = useState(arrayInnerPageDates.images[0])
   const togleHandlerAccept = () => {
      setIsAccepted(true)
   }
   const arrayImages = arrayInnerPageDates.images.filter((i) => i !== selectImg)
   const togleHandlerReject = () => {
      setIsRejectModal((prevState) => !prevState)
   }

   const togleHandlerSent = () => {
      setIsSent(true)
      setIsRejectModal(false)
   }

   return (
      <div>
         <UserNavbar />
         <NameApartment>{arrayInnerPageDates.titleName}</NameApartment>
         <GlobalContainer>
            <ContainerPhotos>
               <DateImg src={selectImg} alt="#" />
               <LittleContainerImage>
                  {arrayImages.map((i, index) => (
                     <Dateimg2
                        onClick={() => {
                           setSelectImage(i)
                        }}
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        src={i}
                     />
                  ))}
               </LittleContainerImage>
            </ContainerPhotos>
            <ContainerDates>
               <DivClikc>
                  <TextInDivClick1>Apartment</TextInDivClick1>
                  <TextInDivClick2>2 Guests</TextInDivClick2>
               </DivClikc>
               <TitleHome>{arrayInnerPageDates.title}</TitleHome>
               <AdressHome>{arrayInnerPageDates.adress}</AdressHome>
               <TextHome>{arrayInnerPageDates.text}</TextHome>
               <UserContainer>
                  <Img src={SkeletonUser} />
                  <UserInformationContainer>
                     <UserEmail>{arrayInnerPageDates.name}</UserEmail>
                     <UserName>{arrayInnerPageDates.gmail}</UserName>
                  </UserInformationContainer>
               </UserContainer>
               <ContainerButton>
                  <Button
                     onClick={togleHandlerReject}
                     border="1px solid #DD8A08"
                     variant="contained"
                     width="196px"
                     height="37px"
                  >
                     REJECT
                  </Button>
                  <Button
                     onClick={togleHandlerAccept}
                     width="196px"
                     height="37px"
                  >
                     ACCEPT
                  </Button>
               </ContainerButton>
               {isAccepted && (
                  <SnackBar
                     open="open"
                     text="Moderation successfully passed"
                     message="Accepted :)"
                     onClose={setIsAccepted}
                  />
               )}
               {isSent && (
                  <SnackBar
                     open="open"
                     message="Successfully sent :)"
                     onClose={setIsSent}
                     severity="success"
                  />
               )}
               {isRejectModal && (
                  <Modal open="open" handleClose={togleHandlerReject}>
                     <TitleTextModal>REJECT</TitleTextModal>
                     <TextAreaModal
                        type="text"
                        placeholder="Write the reason for your rejection"
                     />
                     <ContainerModalButtons>
                        <Button
                           onClick={togleHandlerReject}
                           variant="contained"
                           border="none"
                           width="150px"
                           height="33px"
                           hover="none"
                        >
                           CANCEL
                        </Button>
                        <Button
                           width="196px"
                           height="37px"
                           onClick={togleHandlerSent}
                        >
                           SEND
                        </Button>
                     </ContainerModalButtons>
                  </Modal>
               )}
            </ContainerDates>
         </GlobalContainer>
      </div>
   )
}

export default AdminApplicationsInnerPage

const GlobalContainer = styled.div`
   width: 1362px;
   height: 1024px;
   display: flex;
   justify-content: space-around;
   @media screen and (max-width: 375px) {
      transition: 0.8s all ease;
      width: 375px;
      display: flex;
      align-items: center;
      flex-direction: column;
   }
`

const NameApartment = styled.h1`
   width: 130px;
   height: 59px;
   display: flex;
   align-items: center;
   margin-left: 47px;
   margin-bottom: 30px;
   margin-top: 40px;
   line-height: 24px;
   font-weight: 500;
   font-size: 20px;
   text-transform: uppercase;
   color: #000000;
   @media (max-width: 375px) {
      margin-bottom: 30px;
      margin-top: 46px;
      margin-left: 15px;
   }
`

const ContainerDates = styled.div`
   width: 542px;
   height: 318px;
   @media (max-width: 375px) {
      transition: 0.8s all ease;
      width: 343px;
      margin-top: -152px;
   }
`

const ContainerPhotos = styled.div`
   @media (max-width: 375px) {
      transition: 0.8s all ease;
      width: 375px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
`

const DateImg = styled.img`
   width: 630px;
   height: 507px;
   @media (max-width: 375px) {
      transition: 0.8s all ease;
      width: 343px;
      height: 276px;
   }
`

const LittleContainerImage = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 10px;
   @media (max-width: 375px) {
      transition: 0.8s all ease;
      width: 343px;
   }
`

const Dateimg2 = styled.img`
   width: 196px;
   height: 137px;
   @media (max-width: 375px) {
      width: 105px;
      height: 57px;
   }
`
const UserContainer = styled.div`
   display: flex;
   margin-top: 49px;
`
const ContainerButton = styled.div`
   width: 415px;
   display: flex;
   justify-content: space-between;
   margin-top: 57px;
   @media (max-width: 375px) {
      width: 340px;
      display: flex;
      justify-content: space-around;
   }
`

const UserInformationContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 16px;
`

const UserEmail = styled.span``

const UserName = styled.span``

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

const DivClikc = styled.div`
   width: 210px;
   height: 25px;
   display: flex;
   justify-content: space-between;
   @media (max-width: 375px) {
      transition: 0.8s all ease;
      display: flex;
      align-items: center;
      width: 200px;
   }
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

const Img = styled.img`
   width: 36px;
   height: 36px;
`

const TitleTextModal = styled.h3`
   text-align: center;
   margin-bottom: 20px;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
`

const TextAreaModal = styled.textarea`
   resize: none;
   width: 414px;
   height: 104px;
   border: 1px solid #c4c4c4;
   border-radius: 2px;
   outline: none;
   &::placeholder {
      padding-left: 10px;
   }
`

const ContainerModalButtons = styled.div`
   width: 350px;
   height: 50px;
   display: flex;
   justify-content: space-between;
   align-items: flex-end;
   margin-left: 64px;
`
