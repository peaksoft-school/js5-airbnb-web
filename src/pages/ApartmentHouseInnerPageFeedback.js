import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import IconShape from '../assets/icons/IconShape.png'
import IsActiveLike from '../assets/icons/IsActiveLike.png'
import FeedbackFiltered from '../components/FeedbackFiltered'
import FeedbackApartmentHouse from '../components/FeedbackForApartmentHouse'
import ImageSlider from '../components/ImageSlider'
import Button from '../components/UI/Button'
import DateRangePicer from '../components/UI/date-picker/DateRangePicker'
import ImagePicker from '../components/UI/ImagePicker'
import Modal from '../components/UI/Modal'
import Rating from '../components/UI/Rating'
import UserHeader from '../layout/headers/User-VendorHeader/UserHeader'
import { apartmentHouseInnerPage } from '../store/slices/getApartmentHouseInnerPage'
import { postFeedbackInnerPage } from '../store/slices/postFeedbackInnerPageSlice'
// import { postAnnouncementsLike } from '../store/slices/postLikesInnerPageFeedback'

const ApartmentHouseInnerPageFeedback = () => {
   const [photos, setPhotos] = useState([])
   const [textState, setTextState] = useState('')
   const [ratingState, setRatingState] = useState('')
   const [isfeedbackModal, setIsFeedbackModal] = useState(false)
   const [like, setLike] = useState(IconShape)
   // const [disLike, setDisLike] = useState(false)
   const { datas } = useSelector((state) => state.getApartmentHouseInnerpage)
   // const colorLike = useSelector((store) => store.getFeedback)
   const dispatch = useDispatch()

   const getDates = () => {
      dispatch(apartmentHouseInnerPage(3))
   }

   const toogleOpenModalForFeedback = () => {
      setIsFeedbackModal((prevState) => !prevState)
      const Object = {
         images: photos,
         rating: ratingState,
         description: textState,
      }
      dispatch(postFeedbackInnerPage(Object))

      setPhotos([])
      setTextState('')
      setRatingState('')
   }
   const closeModalHandler = () => {
      setIsFeedbackModal((prevState) => !prevState)
   }

   const likeHandler = () => {
      // dispatch(dispatch(postAnnouncementsLike(id)))
      setLike(IsActiveLike)
      // setDisLike((prevState) => !prevState)
   }

   return (
      <div>
         <button
            onClick={() => {
               getDates()
            }}
         >
            GETDATES
         </button>
         {datas?.map((data) => (
            <div>
               <Div>
                  <UserHeader />
                  <AraptmentName>{data.houseType}</AraptmentName>
                  <ContainerApartmenInformation>
                     <ImageSlider images={data.images} />
                     <ContainerDates>
                        <div>
                           <DivClikc>
                              <TextInDivClick1>
                                 {data.houseType}
                              </TextInDivClick1>
                              <TextInDivClick2>
                                 {data.maxGuests} Guests
                              </TextInDivClick2>
                           </DivClikc>
                           <TitleHome>{data.houseType}</TitleHome>
                           <AdressHome>{data.location}</AdressHome>
                           <TextHome>{data.description}</TextHome>
                           <UserContainer>
                              <Logo>{`${data.ownerFullName
                                 .charAt(0)
                                 .toUpperCase()}`}</Logo>
                              <UserInformationContainer>
                                 <UserName>{data.ownerFullName}</UserName>
                                 <UserGmail>{data.ownerEmail}</UserGmail>
                              </UserInformationContainer>
                           </UserContainer>
                        </div>
                        <ContainerDateRange>
                           <DateRangePicer day="26" dayNow="day" />
                           <ContainerRequestToBookAndLike>
                              <Button
                                 width="423px"
                                 widthMedia="272px !important"
                                 height="37px"
                                 fontSize="14px"
                                 lineHeight="17px"
                                 textTransform="uppercase"
                                 fontWeight="500"
                              >
                                 request to book
                              </Button>
                              <ContainerLiked>
                                 <Liked
                                    onClick={likeHandler}
                                    src={like}
                                    alt="like"
                                 />
                              </ContainerLiked>
                           </ContainerRequestToBookAndLike>
                           <ContainerDateText>
                              <DataText>
                                 You have to be signed in to book a listing!
                              </DataText>
                           </ContainerDateText>
                        </ContainerDateRange>
                        <ContainerForFilter>
                           <FeedbackFiltered id={data.id} />
                        </ContainerForFilter>
                     </ContainerDates>
                  </ContainerApartmenInformation>
                  <ContainerFeedback>
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
                              <FeedbackContainer>
                                 <TitleFeedbackInModal>
                                    Feedback
                                 </TitleFeedbackInModal>
                                 <TextareaForFeedback
                                    placeholder="Share your impressions about this place"
                                    value={textState}
                                    onChange={(e) =>
                                       setTextState(e.target.value)
                                    }
                                 />
                              </FeedbackContainer>
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
                     <ContainerAddFeedback>
                        <FeedbackApartmentHouse id={data.id} />
                     </ContainerAddFeedback>
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
                        widthMedia="343px !important"
                     >
                        leave feedback
                     </Button>
                  </ContainerFeedback>
               </Div>
            </div>
         ))}
      </div>
   )
}

const Div = styled.div`
   background: #f7f7f7;
   @media (max-width: 375px) {
      width: 375px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`

const ContainerApartmenInformation = styled.div`
   width: 1316px;
   margin-left: 85px;
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

const ContainerAddFeedback = styled.div`
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
   margin-left: 33px;
   margin-top: 231px;
   @media (max-width: 375px) {
      width: 343px;
      display: flex;
      margin-right: 33px;
   }
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
   @media (max-width: 375px) {
      margin-right: 53vh;
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

const ContainerLiked = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 55px;
   height: 37px;
   border: 1px solid #dd8a08;
   border-radius: 2px;
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
   @media (max-width: 375px) {
      width: 343px;
      height: 126px;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
   }
`

const UserContainer = styled.div`
   display: flex;
   margin-top: 49px;
`

const UserInformationContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 16px;
`

const UserGmail = styled.span``

const UserName = styled.span``

const ContainerDateRange = styled.div`
   margin-top: 30px;
   @media (max-width: 375px) {
      width: 343px;
      height: 273px;
      background: #ffffff;
      border-radius: 2px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
   }
`

const ContainerRequestToBookAndLike = styled.div`
   width: 494px;
   display: flex;
   justify-content: space-between;
   margin-top: 16px;
   @media (max-width: 375px) {
      width: 375px;
      display: flex;
      justify-content: space-evenly;
      /* border: 1px solid red; */
   }
`

const Liked = styled.img`
   width: 22.75px;
   height: 19.5px;
   /* background-color: ${({ isActive }) => (isActive ? 'red' : '')}; */
`

const ContainerDateText = styled.div`
   margin-top: 20px;
   margin-bottom: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
`

const DataText = styled.span`
   width: 275px;
   height: 17px;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #828282;
`

const ContainerFeedback = styled.div`
   width: 1316px;
   margin-left: 85px;
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
   width: 672px;
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
   width: 670px;
   height: 107px;
   margin-top: 22px;
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
   display: flex;
   flex-direction: row;
   justify-content: flex-end;
   left: 499px;
   top: 401px;
   margin-top: 22px;
   @media (max-width: 375px) {
      width: 272px;
      display: flex;
      justify-content: space-between;
   }
`

export default ApartmentHouseInnerPageFeedback
