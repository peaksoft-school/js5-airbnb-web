import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import SkeletonUser from '../../assets/icons/SkeletonUser.png'
import BreadCrumbs from '../UI/BreadCrumbs'
import Button from '../UI/Button'
import ImageSlider from '../UI/ImageSlider'
import Modal from '../UI/Modal'
import SnackBar from '../UI/SnackBar'

const AdminApplicationsInnerPage = ({ data }) => {
   const [isAccepted, setIsAccepted] = useState(false)
   const [isRejectModal, setIsRejectModal] = useState(false)
   const [isSent, setIsSent] = useState(false)
   const togleHandlerAccept = () => {
      setIsAccepted(true)
   }
   const togleHandlerReject = () => {
      setIsRejectModal((prevState) => !prevState)
   }

   const togleHandlerSent = () => {
      setIsSent(true)
      setIsRejectModal(false)
   }
   console.log(data.images)
   return (
      <div>
         <WrapperNav>
            <BreadCrumbs
               fontSize="18px"
               location={useLocation()}
               translate={data?.title}
            />
         </WrapperNav>
         <NameApartment>{data?.title}</NameApartment>
         <GlobalContainer>
            <ImageSlider images={data?.images} />
            <ContainerDates>
               <DivClikc>
                  <TextInDivClick1>Apartment</TextInDivClick1>
                  <TextInDivClick2>{data?.maxGuests} Guests</TextInDivClick2>
               </DivClikc>
               <TitleHome>{data?.title}</TitleHome>
               <AdressHome>{data?.location}</AdressHome>
               <TextHome>{data?.description}</TextHome>
               <UserContainer>
                  <Img src={SkeletonUser} />
                  <UserInformationContainer>
                     <UserEmail>{data?.ownerEmail}</UserEmail>
                     <UserName>{data?.ownerFullName}</UserName>
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
                     open={isAccepted}
                     text="Moderation successfully passed"
                     message="Accepted :)"
                     onClose={setIsAccepted}
                  />
               )}
               {isSent && (
                  <SnackBar
                     open={isSent}
                     message="Successfully sent :)"
                     onClose={setIsSent}
                     severity="success"
                  />
               )}
               {isRejectModal && (
                  <Modal open="open" handleClose={togleHandlerReject}>
                     <ModalWrapper>
                        <StyledText>REJECT</StyledText>
                        <StyledTextArea
                           // value={messageValue}
                           // onChange={messageValueHandler}
                           type="text"
                           placeholder="Write the reason for your rejection "
                        />
                        <StyledButtons>
                           <Button
                              variant="outlined"
                              border="none"
                              width="196px"
                              height="37px"
                              hover="none"
                              onClick={togleHandlerReject}
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
                        </StyledButtons>
                     </ModalWrapper>
                  </Modal>
               )}
            </ContainerDates>
         </GlobalContainer>
      </div>
   )
}

export default AdminApplicationsInnerPage
const WrapperNav = styled.div`
   margin-top: 40px;
   font-size: 18px;
   margin-left: 50px;
`
const StyledButtons = styled.div`
   margin-top: 22px;
   display: flex;
   justify-content: space-between;
   width: 416px;
`
const StyledText = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   color: #000;
   margin-bottom: 25px;
   text-align: center;
`

const StyledTextArea = styled.textarea`
   resize: none;
   width: 414px;
   height: 104px;
   border: 1px solid #c4c4c4;
   border-radius: 2px;
   outline: none;
   padding: 10px 16px;
   &::placeholder {
      color: #c4c4c4;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      @media (max-width: 375px) {
         font-size: 14.5px;
      }
   }
   @media (max-width: 375px) {
      width: 272px;
      height: 104px;
   }
`
const ModalWrapper = styled.div`
   width: 474px;
   height: 259px;
   background: #ffffff;
   padding: 30px 25px 25px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   @media screen and (max-width: 375px) {
      width: 322px;
      height: 259px;
   }
`
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
