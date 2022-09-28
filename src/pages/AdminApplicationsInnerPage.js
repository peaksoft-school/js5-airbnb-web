import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import ImageSlider from '../components/ImageSlider'
import BreadCrumbs from '../components/UI/BreadCrumbs'
import Button from '../components/UI/Button'
import Modal from '../components/UI/Modal'
import SnackBar from '../components/UI/SnackBar'
import {
   acceptInnerPage,
   postStatusSee,
   rejectInnerPage,
} from '../store/slices/adminInnerPageActions'

const AdminApplicationsInnerPage = () => {
   const { findapplication } = useSelector((state) => state.applications)
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const path = useParams()
   const loc = useLocation()
   useEffect(() => {
      dispatch(postStatusSee(path.id))
   }, [])
   useEffect(() => {
      dispatch(postStatusSee(path.id))
   }, [path.id])
   const [isAccepted, setIsAccepted] = useState(false)
   const [isRejectModal, setIsRejectModal] = useState(false)
   const [isSent, setIsSent] = useState(false)
   const togleHandlerAccept = (announcementId) => {
      setIsAccepted(true)
      dispatch(acceptInnerPage(announcementId))
      navigate(-1)
   }
   const togleHandlerReject = () => {
      setIsRejectModal((prevState) => !prevState)
   }
   const [text, settext] = useState('')
   const togleHandlerSent = (announcementId) => {
      dispatch(rejectInnerPage({ id: announcementId, message: text }))
      navigate(-1)
      setIsSent(true)
      setIsRejectModal(false)
   }
   const [show, setshow] = useState(false)
   const [show2, setshow2] = useState(false)
   useEffect(() => {
      if (findapplication[0]?.status === 'SEEN') {
         setshow(true)
         setshow2(true)
      }
   }, [findapplication[0]?.status])
   console.log(findapplication, 'findapplication')
   return (
      <Container>
         {findapplication?.map((data) => (
            <Box>
               <BreadCrumbs
                  fontSize="16px"
                  location={loc}
                  translate={data.title}
               />
               <NameApartment>{data?.title}</NameApartment>
               <GlobalContainer>
                  <ImageSlider images={data?.images} />
                  <ContainerDates>
                     <DivClikc>
                        <TextInDivClick1>{data?.houseType}</TextInDivClick1>
                        <TextInDivClick2>
                           {data?.maxGuests} Guests
                        </TextInDivClick2>
                     </DivClikc>
                     <TitleHome>{data?.title}</TitleHome>
                     <AdressHome>{data?.location}</AdressHome>
                     <TextHome>{data?.description}</TextHome>
                     <UserContainer>
                        <Logo>
                           {data?.ownerFullName.charAt(0).toUpperCase()}
                        </Logo>
                        <UserInformationContainer>
                           <UserEmail>{data?.ownerFullName}</UserEmail>
                           <UserName>{data?.ownerEmail}</UserName>
                        </UserInformationContainer>
                     </UserContainer>
                     <ContainerButton>
                        {show ? (
                           <Button
                              onClick={togleHandlerReject}
                              border="1px solid #DD8A08"
                              variant="contained"
                              width="196px"
                              height="37px"
                           >
                              REJECT
                           </Button>
                        ) : null}
                        {show2 ? (
                           <Button
                              onClick={() => togleHandlerAccept(data.id)}
                              width="196px"
                              height="37px"
                           >
                              ACCEPT
                           </Button>
                        ) : null}
                     </ContainerButton>
                     {isAccepted && (
                        <SnackBar
                           open="open"
                           text="Moderation successfully passed"
                           message="Accepted :)"
                           onClose={setIsAccepted}
                           severity="success"
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
                              value={text}
                              onChange={(e) => {
                                 settext(e.target.value)
                              }}
                              type="text"
                              placeholder="Write the reason for your rejection"
                           />
                           <ContainerModalButtons>
                              <Button
                                 onClick={togleHandlerReject}
                                 variant="contained"
                                 border="none"
                                 width="197px"
                                 height="37px"
                                 hover="none"
                              >
                                 CANCEL
                              </Button>
                              <Button
                                 width="197px"
                                 height="37px"
                                 onClick={() => togleHandlerSent(data.id)}
                              >
                                 SEND
                              </Button>
                           </ContainerModalButtons>
                        </Modal>
                     )}
                  </ContainerDates>
               </GlobalContainer>
            </Box>
         ))}
      </Container>
   )
}

export default AdminApplicationsInnerPage
const Container = styled.div`
   width: 100%;
   background: #e5e5e5;
   min-height: 900px;
`
const Box = styled.div`
   margin: 0 auto;
   width: 1240px;
   overflow: hidden;
   padding-top: 46px;
`
const GlobalContainer = styled.div`
   display: flex;
   justify-content: space-between;
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
   margin-bottom: 30px;
   padding-top: 40px;
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
   width: 490px;
   word-break: break-all;
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

const Logo = styled.div`
   width: 36px;
   height: 36px;
   background: #c4c4c4;
   border-radius: 50%;
   font-style: normal;
   font-weight: 350;
   font-size: 22px;
   line-height: 35px;
   color: #ffffff;
   display: flex;
   align-items: center;
   justify-content: center;
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
   width: 412px;
   height: 104px;
   border: 1px solid #c4c4c4;
   border-radius: 2px;
   outline: none;
   padding: 10px 8px 10px 16px;
   @media (max-width: 375px) {
      width: 322px;
   }
`

const ContainerModalButtons = styled.div`
   width: 399px;
   height: 50px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-left: 14px;
   @media (max-width: 375px) {
      width: 246px;
   }
`
