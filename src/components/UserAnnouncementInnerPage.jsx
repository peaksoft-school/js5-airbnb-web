import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
   blockAnnouncementUser,
   deleteAnnouncements,
} from '../store/slices/adminApplicationActions'
import { deleteUserAnnouncement } from '../store/slices/getUserAnnouncement'
import {
   getCardById,
   leaveFeedback,
} from '../store/slices/LikeAndBookmarkSlice'
import DatesOfBookedAnnouncements from './DatesOfBookedAnnouncements'
import DatesOfBookingRequest from './DatesOfBookingRequest'
import FeedbackFiltered from './FeedbackFiltered'
import FeedbackApartmentHouse from './FeedbackForApartmentHouse'
import ImageSlider from './ImageSlider'
import BreadCrumbs from './UI/BreadCrumbs'
import Button from './UI/Button'
import ImagePicker from './UI/ImagePicker'
import Modal from './UI/Modal'
import Rating from './UI/Rating'

const UserAnnouncementInnerPage = (props) => {
   const [photos, setPhotos] = useState([])
   const [textState, setTextState] = useState('')
   const [ratingState, setRatingState] = useState('')
   const [isfeedbackModal, setIsFeedbackModal] = useState(false)
   const [modal, setmodal] = useState(false)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const location = useLocation()
   const id = location.pathname.split('/')[3]
   const store = useSelector((store) => store.likeandbookmark.getcard?.card)
   const status = useSelector((store) => store.getUserannouncementcard)
   useEffect(() => {
      dispatch(getCardById(id))
   }, [
      id,
      status.statusbookingAccept,
      status.statusbookingReject,
      status.statusbookingDelete,
   ])
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   const toogleOpenModalForFeedback = () => {
      dispatch(
         leaveFeedback({
            photos,
            data: {
               rating: +ratingState,
               description: textState,
               id,
            },
         })
      )
      setIsFeedbackModal((prevState) => !prevState)
      setPhotos([])
      setTextState('')
      setRatingState('')
   }
   const closeModalHandler = () => {
      setIsFeedbackModal((prevState) => !prevState)
   }
   const deletecards = (e) => {
      if (props.admin) {
         dispatch(deleteAnnouncements(e))
         navigate(-1)
         return
      }
      dispatch(deleteUserAnnouncement(e))
      navigate('/main/profile')
   }
   const blockAnnouncement = (e) => {
      dispatch(blockAnnouncementUser(e))
      navigate(-1)
   }
   const accepted = store[0]?.announcementBookings.filter(
      (e) => e.status === 'ACCEPTED'
   )
   const newbook = store[0]?.announcementBookings.filter(
      (i) => i.status === 'NEW'
   )
   console.log(store, 'store')
   return (
      <Container>
         {store?.map((data) => (
            <WrapperBlock key={data.id}>
               {modal ? (
                  <Modal open={modal} handleClose={() => setmodal((p) => !p)}>
                     <StyledModal>
                        <p>Do you want to delete?</p>
                        <StyledButton>
                           <Button
                              height="38px"
                              onClick={() => {
                                 setmodal(false)
                                 deletecards(data.id)
                              }}
                           >
                              Yes
                           </Button>
                           <Button
                              variant="contained"
                              height="38px"
                              onClick={() => setmodal(false)}
                           >
                              Not
                           </Button>
                        </StyledButton>
                     </StyledModal>
                  </Modal>
               ) : null}
               <BreadCrumbs
                  fontSize="16px"
                  location={location}
                  translate={data.title}
               />
               <AnnouncementTitle>{data.title}</AnnouncementTitle>
               <AnnouncementInformation>
                  <ImageSlider images={data.images} />
                  <ContainerDates>
                     <div>
                        <DivClikc>
                           <TextInDivClick1>{data.houseType}</TextInDivClick1>
                           <TextInDivClick2>
                              {data.maxGuests} guests
                           </TextInDivClick2>
                        </DivClikc>
                        <TitleHome>{data.title}</TitleHome>
                        <AdressHome>{data.location}</AdressHome>
                        <Description>{data.description}</Description>
                        <TextHome>{data.text}</TextHome>
                     </div>
                     {props.admin ? (
                        <Buttons>
                           <Button
                              width="196px"
                              height="37px"
                              variant="contained"
                              onClick={() => setmodal((p) => !p)}
                           >
                              DELETE
                           </Button>
                           <Button
                              width="196px"
                              height="37px"
                              onClick={() => blockAnnouncement(data.id)}
                           >
                              BLOCK
                           </Button>
                        </Buttons>
                     ) : (
                        <Buttons>
                           <Button
                              width="196px"
                              height="37px"
                              onClick={() => setmodal((p) => !p)}
                           >
                              DELETE
                           </Button>
                           <Button
                              width="196px"
                              height="37px"
                              onClick={() =>
                                 navigate(`/main/editanouncement=${data.id}`)
                              }
                           >
                              EDIT
                           </Button>
                        </Buttons>
                     )}
                  </ContainerDates>
               </AnnouncementInformation>
               {!props.admin ? (
                  <>
                     <DatesOfBookedAnnouncements
                        price={data.price}
                        booked={accepted}
                        id={data.id}
                     />
                     <DatesOfBookingRequest
                        price={data.price}
                        id={data.id}
                        booked={newbook}
                     />
                  </>
               ) : null}
               <FeedbackContainer>
                  <ContainerForFilter>
                     <FeedbackFiltered id={data.id} />
                  </ContainerForFilter>
                  <TitleFeedback>feedback</TitleFeedback>
                  {isfeedbackModal && (
                     <Modal open="open">
                        <ModalContainer>
                           <TitleModal>Leave feedback</TitleModal>
                           <ModalImagePicker>
                              <ImagePicker
                                 allPhotos={photos}
                                 getPhoto={setPhotos}
                              />
                           </ModalImagePicker>
                           <RatingModalContainer>
                              <RatingText>Rate</RatingText>
                              <ContainerRating>
                                 <Rating
                                    width="28px"
                                    height="28px"
                                    onChange={(i) => setRatingState(i)}
                                 />
                              </ContainerRating>
                           </RatingModalContainer>
                           <AddFeedback>
                              <TitleFeedbackInModal>
                                 Feedback
                              </TitleFeedbackInModal>
                              <TextareaForFeedback
                                 placeholder="Share your impressions about this place"
                                 value={textState}
                                 onChange={(e) => setTextState(e.target.value)}
                              />
                           </AddFeedback>
                           <ModalButtons>
                              <Button
                                 width="150px"
                                 widthMedia="105px"
                                 height="37px"
                                 fontSize="16px"
                                 lineHeight="19px"
                                 textTransform="uppercase"
                                 fontWeight="500"
                                 color="#828282"
                                 backgroundColor="outlined"
                                 variant="outlined"
                                 onClick={closeModalHandler}
                                 border="none"
                              >
                                 Cancel
                              </Button>
                              <Button
                                 width="196px"
                                 height="37px"
                                 widthMedia="147px"
                                 onClick={toogleOpenModalForFeedback}
                              >
                                 Publick
                              </Button>
                           </ModalButtons>
                        </ModalContainer>
                     </Modal>
                  )}
                  <AddFeedbackContainer>
                     <FeedbackApartmentHouse id={data.id} />
                  </AddFeedbackContainer>
                  <Button
                     onClick={closeModalHandler}
                     variant="outlined"
                     width="630px"
                     height="35px"
                     fontSize="16px"
                     lineHeight="19px"
                     textTransform="uppercase"
                     fontWeight="500"
                     color="#828282"
                     backgroundColor="outlined"
                     marginTop="46px"
                     marginBottom="150px"
                     widthMedia="343px !important"
                  >
                     Leave feedback
                  </Button>
               </FeedbackContainer>
            </WrapperBlock>
         ))}
      </Container>
   )
}
const StyledButton = styled.div`
   width: 350px;
   display: flex;
   justify-content: space-evenly;
`
const StyledModal = styled.div`
   width: 350px;
   height: 100px;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   @media (max-width: 375px) {
      width: 375px;
   }
`
const WrapperBlock = styled.div`
   width: 1240px;
   margin: 0 auto;
`
const Container = styled.div`
   background: #f7f7f7;
   margin: 0 auto;
   margin-top: 0px;
   width: 100%;
   height: auto;
   min-height: 1250px;
   padding-top: 40px;
   @media (max-width: 375px) {
      width: 375px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`
const AnnouncementInformation = styled.div`
   display: flex;
   justify-content: space-between;
   @media (max-width: 375px) {
      width: 375px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 85px;
   }
`
const AddFeedbackContainer = styled.div`
   height: auto;
   @media (max-width: 375px) {
      width: 343px;
      margin-top: 50vh;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
   }
`
const ContainerForFilter = styled.div`
   width: 425px;
   padding-bottom: 100px;
   @media (max-width: 375px) {
      width: 343px;
      display: flex;
   }
`
const AnnouncementTitle = styled.h1`
   width: 700px;
   line-height: 24px;
   font-weight: 500;
   font-size: 20px;
   text-transform: uppercase;
   color: #000000;
   margin-top: 40px;
   margin-bottom: 30px;
   word-break: break-all;
   @media (max-width: 375px) {
   }
`
const ContainerDates = styled.div`
   width: 542px;
   height: 278px;
   @media (max-width: 375px) {
      width: 375px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 56px;
   }
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
   width: 490px;
   word-break: break-all;
`
const AdressHome = styled.span`
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #828282;
`
const Description = styled.div`
   margin-top: 20px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #363636;
`
const TextHome = styled.p`
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #363636;
   margin-top: 10px;
   @media (max-width: 375px) {
      width: 343px;
      height: 126px;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
   }
`
const Buttons = styled.div`
   width: 412px;
   display: flex;
   justify-content: space-between;
   margin-top: 57px;
`
const AddFeedback = styled.div`
   margin-top: 20px;
   @media (max-width: 375px) {
      width: 375px;
      margin-top: 290px;
      margin-right: 51px;
   }
`
const TitleFeedback = styled.h3`
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;
   text-transform: uppercase;
   color: #000000;
   margin-top: 60px;
`
const ModalContainer = styled.div`
   padding: 10px 10px 10px;
   width: 687px;
   height: 463px;
   background: #ffffff;
   border-radius: 2px;
   @media (max-width: 375px) {
      width: 322px;
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
`
const ModalImagePicker = styled.div`
   height: 140px;
   margin-top: 20px;
   @media (max-width: 375px) {
      width: 272px;
      display: flex;
      overflow-wrap: break-word;
   }
`
const TitleModal = styled.h3`
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   text-transform: uppercase;
   color: #363636;
   display: flex;
   align-items: center;
   justify-content: center;
`
const ContainerRating = styled.div`
   width: 182px;
   height: 31px;
`
const RatingText = styled.span`
   width: 35px;
   height: 19px;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #828282;
`
const RatingModalContainer = styled.div`
   width: 182px;
   height: 61px;
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
   flex-direction: column;
   margin-top: 22px;
`
const FeedbackContainer = styled.div`
   position: relative;
   min-height: 500px;
   & > :nth-child(1) {
      width: 425px;
      position: absolute;
      left: 750px;
      top: 65px;
   }
`
const TextareaForFeedback = styled.textarea`
   width: 670px;
   height: 76px;
   border: 1px solid #c4c4c4;
   border-radius: 2px;
   resize: none;
   display: flex;
   flex-direction: row;
   align-items: flex-start;
   padding: 10px 8px 10px 16px;
   margin-top: 12px;
   ::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #c4c4c4;
   }
   @media (max-width: 375px) {
      width: 272px;
   }
`
const TitleFeedbackInModal = styled.h4`
   width: 74px;
   height: 19px;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #828282;
`
const ModalButtons = styled.div`
   margin-top: 22px;
   margin-left: 150px;
   & > button {
      margin-left: 10px;
   }
   @media (max-width: 375px) {
      width: 272px;
      display: flex;
      justify-content: space-between;
   }
`
export default UserAnnouncementInnerPage
