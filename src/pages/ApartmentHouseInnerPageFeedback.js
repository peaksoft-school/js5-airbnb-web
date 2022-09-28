import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import IconShape from '../assets/icons/IconShape.png'
import IsActiveLike from '../assets/icons/IsActiveLike.png'
import FeedbackFiltered from '../components/FeedbackFiltered'
import FeedbackApartmentHouse from '../components/FeedbackForApartmentHouse'
import ImageSlider from '../components/ImageSlider'
import BreadCrumbs from '../components/UI/BreadCrumbs'
import Button from '../components/UI/Button'
import DateRangePicer from '../components/UI/date-picker/DateRangePicker'
import ImagePicker from '../components/UI/ImagePicker'
import Modal from '../components/UI/Modal'
import Rating from '../components/UI/Rating'
import { closedDatesBooking } from '../store/slices/getUserAnnouncement'
import {
   leaveFeedback,
   postBooking,
   postLikeorDislike,
} from '../store/slices/LikeAndBookmarkSlice'

const ApartmentHouseInnerPageFeedback = (props) => {
   const [photos, setPhotos] = useState([])
   const [textState, setTextState] = useState('')
   const [ratingState, setRatingState] = useState('')
   const [isfeedbackModal, setIsFeedbackModal] = useState(false)
   const [isActive, setIsActive] = useState(false)
   const [, setregistr] = useSearchParams()
   const login = useSelector((s) => s?.login?.login)
   const data = useSelector(
      (s) => s.getUserannouncementcard?.closeddatesBooking
   )
   const [user, setuser] = useState(false)
   const [date, setdate] = useState({
      checkIn: '',
      checkOut: '',
   })
   const arr = data?.takenDates?.map((i) => new Date(i))
   console.log(data, arr, 'props.data?.id')
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(closedDatesBooking(props.data?.id))
   }, [props.data?.id])
   const checkin = (e) => {
      const newdate = new Date(e)
      const alldate = new Intl.DateTimeFormat('en-US', {
         year: 'numeric',
         day: '2-digit',
         month: '2-digit',
      })
         .format(newdate)
         .split('/')
         .reverse('')
      const day = alldate.splice(1, 1)
      const yearmonth = alldate
      setdate({
         ...date,
         checkIn: `${yearmonth[0]}-${yearmonth[1]}-${day[0]}`,
      })
   }

   const checkout = (e) => {
      const newdate = new Date(e)
      const alldate = new Intl.DateTimeFormat('en-US', {
         year: 'numeric',
         day: '2-digit',
         month: '2-digit',
      })
         .format(newdate)
         .split('/')
         .reverse('')
      const day = alldate.splice(1, 1)
      const yearmonth = alldate
      setdate({
         ...date,
         checkOut: `${yearmonth[0]}-${yearmonth[1]}-${day[0]}`,
      })
   }
   // console.log(checkin, checkout)
   const postbooking = () => {
      if (date.checkIn && date.checkOut) {
         dispatch(
            postBooking({
               announcementId: props.data.id,
               checkIn: date.checkIn,
               checkOut: date.checkOut,
            })
         )
      }
   }
   const toogleOpenModalForFeedback = () => {
      dispatch(
         leaveFeedback({
            photos,
            data: {
               rating: +ratingState,
               description: textState,
               id: props.data.id,
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
   const handleClick = () => {
      setIsActive((prevState) => !prevState)
      dispatch(postLikeorDislike({ id: props.data?.id, bool: !isActive }))
   }
   const getlogin = () => {
      setregistr({ userSignup: 'open' })
   }
   useEffect(() => {
      if (login?.jwt) {
         setuser(true)
         return
      }
      setuser(false)
   }, [login?.jwt])
   return (
      <ContainerWrapper>
         <Div>
            <BreadCrumbs
               location={useLocation()}
               translate={props.data?.title}
            />
            <AraptmentName>{props.data?.title}</AraptmentName>
            <ContainerApartmenInformation>
               <ImageSlider images={props.data?.images} />
               <ContainerDates>
                  <div>
                     <DivClikc>
                        <TextInDivClick1>
                           {props.data?.houseType}
                        </TextInDivClick1>
                        <TextInDivClick2>
                           {props.data?.maxGuests} Guests
                        </TextInDivClick2>
                     </DivClikc>
                     <TitleHome>{props.data?.title}</TitleHome>
                     <AdressHome>{props.data?.location}</AdressHome>
                     <TextHome>{props.data?.description}</TextHome>
                     <UserContainer>
                        <Logo>
                           {props.data?.ownerFullName?.charAt(0).toUpperCase()}
                        </Logo>
                        <UserInformationContainer>
                           <UserName>{props.data?.ownerFullName}</UserName>
                           <UserGmail>{props.data?.ownerEmail}</UserGmail>
                        </UserInformationContainer>
                     </UserContainer>
                  </div>
                  <ContainerDateRange>
                     <DateRangePicer
                        day={props.data?.price}
                        dayNow="day"
                        checkin={checkin}
                        checkout={checkout}
                        blocked={arr}
                     />
                     <ContainerRequestToBookAndLike>
                        {user ? (
                           <Link to="/main/profile">
                              <Button
                                 width="423px"
                                 widthMedia="272px !important"
                                 height="37px"
                                 fontSize="14px"
                                 lineHeight="17px"
                                 textTransform="uppercase"
                                 fontWeight="500"
                                 onClick={postbooking}
                              >
                                 request to book
                              </Button>
                           </Link>
                        ) : (
                           <Button
                              width="423px"
                              widthMedia="272px !important"
                              height="37px"
                              fontSize="14px"
                              lineHeight="17px"
                              textTransform="uppercase"
                              fontWeight="500"
                              onClick={() => {
                                 getlogin()
                              }}
                           >
                              request to book
                           </Button>
                        )}
                        <ContainerLiked>
                           <Liked
                              onClick={() => {
                                 if (user) {
                                    handleClick()
                                 } else {
                                    getlogin()
                                 }
                              }}
                              src={isActive ? IsActiveLike : IconShape}
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
                     <FeedbackFiltered id={props.data?.id} />
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
                           <TitleFeedbackInModal>Feedback</TitleFeedbackInModal>
                           <TextareaForFeedback
                              placeholder="Share your impressions about this place"
                              value={textState}
                              onChange={(e) => setTextState(e.target.value)}
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
                              disabled={isfeedbackModal}
                           >
                              Publick
                           </Button>
                        </ModalButtons>
                     </ModalContainer>
                  </Modal>
               )}
               <ContainerAddFeedback>
                  <FeedbackApartmentHouse id={props.data.id} />
               </ContainerAddFeedback>
               <Button
                  onClick={() => {
                     if (user) {
                        closeModalHandler()
                     } else {
                        getlogin()
                     }
                  }}
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
                  marginBottom="100px"
                  widthMedia="343px !important"
               >
                  leave feedback
               </Button>
            </ContainerFeedback>
         </Div>
      </ContainerWrapper>
   )
}
const Logo = styled.div`
   width: 36px;
   height: 36px;
   background: #c4c4c4;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   font-style: normal;
   font-weight: 500;
   font-size: 24px;
   text-transform: uppercase;
   color: #ffffff;
   @media (max-width: 375px) {
   }
`
const ContainerWrapper = styled.div`
   background: #f7f7f7;
   margin: 0 auto;
   margin-top: 0px;
   width: 100%;
   height: auto;
   min-height: 1250px;
   padding-top: 40px;
`
const Div = styled.div`
   width: 1240px;
   margin: 0 auto;
   height: auto;
   @media (max-width: 375px) {
      width: 375px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`

const ContainerApartmenInformation = styled.div`
   width: 1240px;
   display: flex;
   justify-content: space-between;
   margin: 0 auto;
   @media (max-width: 375px) {
      width: 375px;
      display: flex;
      flex-direction: column;
      align-items: center;
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
   margin-top: 165px;
   padding-bottom: 100px;
   @media (max-width: 375px) {
      width: 343px;
      display: flex;
   }
`

const AraptmentName = styled.h1`
   width: 130px;
   height: 59px;
   display: flex;
   align-items: center;
   /* margin-left: 85px; */
   margin-bottom: 30px;
   margin-top: 20px;
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
   cursor: pointer;
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
   width: 1240px;
   /* margin-left: 85px; */
   @media (max-width: 375px) {
      width: 375px;
      margin-top: 290px;
      /* margin-right: 51px; */
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
// 672
// 463

const ModalContainer = styled.div`
   width: 710px;
   height: 500px;
   background: #ffffff;
   border-radius: 2px;
   padding: 25px 20px;
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
