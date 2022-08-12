import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import AdminHeader from '../layout/headers/AdminHeader/AdminHeader'
import { slides } from '../slides'
import { sentMessageActions } from '../store/slices/sentMessageSlice'
import Button from './UI/Button'
import AdminProfileApplicationCard from './UI/cards/AdminProfileApplicationCard'
import Modal from './UI/Modal'
import Paginations from './UI/Pagination'
import SnackBar from './UI/SnackBar'

const CardData = [
   {
      id: 1,
      slides,
      price: 220,
      location: '12 Morris Ave, Toronto,...',
      description: 'Beautiful and picturesque...',
      guestsAmount: 5,
      ratings: 3.5,
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
      <div>
         <AdminHeader />
         <StyledAdminApplication>
            <StyledH3>APPLICATION</StyledH3>
            <StyledCards>
               <>
                  {cardData.map((item) => (
                     <AdminProfileApplicationCard
                        data={item}
                        onClick={optionsHandler}
                        key={item.id}
                        slides={item.slides}
                        price={item.price}
                        location={item.location}
                        description={item.description}
                        guestsAmount={item.guestsAmount}
                        ratings={item.ratings}
                     />
                  ))}
                  {isAccepted && (
                     <SnackBar
                        open="open"
                        text="Moderation successfully passed"
                        severity="success"
                        message="Accepted"
                        onClose={() => {
                           setIsAccepted()
                        }}
                     />
                  )}
                  {isRejected && (
                     <RejectModal open="open">
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
                              disabled={!messageValue}
                           >
                              SEND
                           </Button>
                        </StyledButtons>
                     </RejectModal>
                  )}
                  {isMessageSent && (
                     <SnackBar
                        open="open"
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
      </div>
   )
}

export default AdminApplication

const RejectModal = styled(Modal)`
   width: 474px;
   height: 260px;
`

const StyledAdminApplication = styled.div`
   margin: 0 40px;
   @media screen and (max-width: 375px) {
      margin: 0 16px;
   }
`

const StyledH3 = styled.h3`
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;
   margin: 50px 0 30px;
`
const StyledCards = styled.div`
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   grid-template-rows: repeat(3, 1fr);
   width: 100%;
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
   padding: 10px;
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
   @media (max-width: 375px) {
      justify-content: space-around;
   }
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
