import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { sentMessageActions } from '../../store/slices/sentMessageSlice'
import { slides } from '../../utils/constants/image-constants/ImageConstants'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import Paginations from '../UI/Pagination'
import SnackBar from '../UI/SnackBar'
import AdminProfileApplicationCard from './AdminProfileAplicationCard'

export const CardData = [
   {
      id: 1,
      slides,
      price: 220,
      location: 'vhvhhb',
      description:
         'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels.',

      guestsAmount: 5,
      ratings: 3,
      title: 'hi',
      titleName: 'home1',
      name: 'almaz1',
      gmail: 'almaz@test.com',
   },
   {
      id: 2,
      slides,
      price: 220,
      location: 'vhvhhb',
      description:
         'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels.',

      guestsAmount: 5,
      ratings: 3,
      titleName: 'home2',
      title: 'hi',
      name: 'almaz2',
      gmail: 'almaz@test.com',
   },
   {
      id: 3,
      slides,
      price: 220,
      location: 'vhvhhb',
      description:
         'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels.',

      guestsAmount: 5,
      ratings: 3,
      titleName: 'home3',
      title: 'hi',
      name: 'almaz3',
      gmail: 'almaz@test.com',
   },
   {
      id: 4,
      slides,
      price: 220,
      location: 'vhvhhb',
      description:
         'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels.',

      guestsAmount: 5,
      titleName: 'home4',
      ratings: 3,
      title: 'hi',
      name: 'almaz4',
      gmail: 'almaz@test.com',
   },
   {
      id: 5,
      slides,
      price: 220,
      location: 'vhvhhb',
      description:
         'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels.',

      guestsAmount: 5,
      ratings: 3,
      titleName: 'home5',
      title: 'hi',
      name: 'almaz5',
      gmail: 'almaz@test.com',
   },
   {
      id: 6,
      slides,
      price: 220,
      location: 'vhvhhb',
      description:
         'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels.',

      guestsAmount: 5,
      titleName: 'home6',
      ratings: 3,
      title: 'hi',
      name: 'almaz6',
      gmail: 'almaz@test.com',
   },
   {
      id: 7,
      slides,
      price: 220,
      location: 'vhvhhb',
      description:
         'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels.',

      guestsAmount: 5,
      ratings: 3,
      titleName: 'home7',
      title: 'hi',
      name: 'almaz7',
      gmail: 'almaz@test.com',
   },
   {
      id: 8,
      slides,
      price: 220,
      location: 'vhvhhb',
      description:
         'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels.',

      guestsAmount: 5,
      ratings: 3,
      title: 'hi',
      titleName: 'home8',
      name: 'almaz8',
      gmail: 'almaz@test.com',
   },
   {
      id: 9,
      slides,
      price: 220,
      location: 'vhvhhb',
      description:
         'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels.',

      titleName: 'home9',
      guestsAmount: 5,
      ratings: 3,
      title: 'hi',
      name: 'almaz9',
      gmail: 'almaz@test.com',
   },
   {
      id: 10,
      slides,
      price: 220,
      location: 'vhvhhb',
      description:
         'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels.',

      guestsAmount: 5,
      ratings: 3,
      titleName: 'home10',
      title: 'hi',
      name: 'almaz10',
      gmail: 'almaz@test.com',
   },
   {
      id: 11,
      slides,
      price: 220,
      location: 'vhvhhb',
      description:
         'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels.',

      guestsAmount: 5,
      ratings: 3,
      titleName: 'home11',
      title: 'hi',
      name: 'almaz11',
      gmail: 'almaz@test.com',
   },
   {
      id: 12,
      slides,
      price: 220,
      location: 'vhvhhb',
      description:
         'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels.',

      guestsAmount: 5,
      ratings: 3,
      title: 'hi',
      titleName: 'home12',
      name: 'almaz12',
      gmail: 'almaz@test.com',
   },
   {
      id: 13,
      slides,
      price: 220,
      location: 'vhvhhb',
      description:
         'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels.',

      guestsAmount: 5,
      titleName: 'home13',
      ratings: 3,
      title: 'hi',
      name: 'almaz13',
      gmail: 'almaz@test.com',
   },
   {
      id: 14,
      slides,
      price: 220,
      location: 'vhvhhb',
      description:
         'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels.',

      guestsAmount: 5,
      ratings: 3,
      title: 'hi',
      name: 'almaz14',
      gmail: 'almaz@test.com',
      titleName: 'home14',
   },
   {
      id: 15,
      slides,
      price: 220,
      location: 'vhvhhb',
      description:
         'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels.',
      guestsAmount: 5,
      ratings: 3,
      title: 'hi',
      name: 'almaz15',
      gmail: 'almaz@test.com',
      titleName: 'home15',
   },
]
const AdminApplication = () => {
   const [cardData, setCardData] = useState(CardData)
   const [cardId, setCardId] = useState('')
   const [getCardId, setGetCardId] = useState('')
   const [isAccepted, setIsAccepted] = useState(false)
   const [isRejected, setIsRejected] = useState(false)
   const [isMessageSent, setIsMessageSent] = useState(false)
   const [messageValue, setMessageValue] = useState('')
   const dispatch = useDispatch()
   const optionsHandler = (text, id) => {
      if (text === 'Delete') {
         setCardId(id)
      }
      if (text === 'Accept') {
         setIsAccepted(true)
      }
      if (text === 'Reject') {
         setIsRejected(true)
         setGetCardId(id)
      }
   }
   const messageSentHandler = () => {
      setIsMessageSent(true)
      setIsRejected(false)
      dispatch(
         sentMessageActions.saveMessage({
            getCardId,
            message: messageValue,
         })
      )
      setMessageValue('')
   }
   const messageValueHandler = (e) => {
      setMessageValue(e.target.value)
   }
   const rejectHandler = () => {
      setIsRejected((prev) => !prev)
   }
   useEffect(() => {
      const deleteArray = cardData.filter((el) => el.id !== +cardId)
      setCardData(deleteArray)
      setGetCardId(cardId)
   }, [cardId])
   return (
      <Container>
         {/* <AdminHeader /> */}
         <StyledAdminApplication>
            <StyledH3>APPLICATION</StyledH3>
            <StyledCards>
               <>
                  {cardData.map((item) => (
                     <div key={item.id}>
                        <AdminProfileApplicationCard
                           data={item}
                           onClick={optionsHandler}
                           slides={item.slides}
                           price={item.price}
                           location={item.location}
                           description={item.description}
                           guestsAmount={item.guestsAmount}
                           ratings={item.ratings}
                        />
                     </div>
                  ))}
                  {isAccepted && (
                     <SnackBar
                        open={isAccepted}
                        text="Moderation successfully passed"
                        severity="success"
                        message="Accepted"
                        onClose={() => {
                           setIsAccepted()
                        }}
                     />
                  )}
                  {isRejected && (
                     <RejectModal open={isRejected}>
                        <ModalWrapper>
                           <StyledText>REJECT</StyledText>
                           <StyledTextArea
                              value={messageValue}
                              onChange={messageValueHandler}
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
                                 onClick={rejectHandler}
                              >
                                 CANCEL
                              </Button>
                              <Button
                                 width="196px"
                                 height="37px"
                                 onClick={messageSentHandler}
                              >
                                 SEND
                              </Button>
                           </StyledButtons>
                        </ModalWrapper>
                     </RejectModal>
                  )}
                  {isMessageSent && (
                     <SnackBar
                        open={isMessageSent}
                        severity="success"
                        message="Successfully sent"
                        onClose={() => {
                           setIsMessageSent()
                        }}
                     />
                  )}
               </>
            </StyledCards>
            {cardData.length > 0 ? (
               <StyledPagination>
                  <Paginations />
               </StyledPagination>
            ) : (
               ''
            )}
         </StyledAdminApplication>
      </Container>
   )
}
export default AdminApplication
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
const Container = styled.div`
   width: 100%;
   background: #e5e5e5;
`
const RejectModal = styled(Modal)`
   width: 474px;
   height: 260px;
`
const StyledAdminApplication = styled.div`
   margin: 0 auto;
   width: 1240px;
   padding: 50px 0 30px;
`
const StyledH3 = styled.h3`
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;
   margin-bottom: 30px;
   /* margin: 50px 0 30px; */
`
const StyledCards = styled.div`
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   grid-template-rows: repeat(3, 1fr);
   width: 1240px;
   margin: 0 auto;
   gap: 20px;
   @media screen and (max-width: 375px) {
      grid-template-columns: repeat(1, 1fr);
   }
`
const StyledPagination = styled.div`
   margin: 60px 0;
   display: flex;
   justify-content: center;
   @media screen and (max-width: 375px) {
      display: none;
   }
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
