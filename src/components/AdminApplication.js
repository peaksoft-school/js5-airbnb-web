import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import {
   acceptAnnouncements,
   deleteAnnouncements,
   getAllApplications,
   rejectAnnouncements,
} from '../store/slices/adminApplicationActions'
import Button from './UI/Button'
import AdminProfileApplicationCard from './UI/cards/AdminProfileApplicationCard'
import Modal from './UI/Modal'
import Paginations from './UI/Pagination'
import SnackBar from './UI/SnackBar'

const AdminApplication = () => {
   const { applications, accepted, rejected } = useSelector(
      (state) => state.applications
   )
   console.log(applications.pageAnnouncementResponseList)
   const [params, setParams] = useSearchParams()
   const page = params.get('page')
   const [pagination, setPagination] = useState(+page || 1)
   const [showNotification, setShowNotification] = useState(false)
   const [isRejected, setIsRejected] = useState(false)
   const [sendId, setSendId] = useState()

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllApplications({ pagination }))
      setParams({ page: pagination })
   }, [pagination])

   useEffect(() => {
      dispatch(getAllApplications({ pagination }))
   }, [])
   useEffect(() => {
      // eslint-disable-next-line no-unused-expressions
      rejected?.status === 'rejected' && setIsRejected(false)
   })

   const acceptAnnouncementHandler = (id) => {
      dispatch(acceptAnnouncements(id))
      setShowNotification(true)
   }

   const rejectAnnouncementHandler = (id) => {
      setSendId(id)
      setIsRejected(true)
   }
   const deleteAnnouncementHandler = (id) => {
      setIsRejected(false)
      dispatch(deleteAnnouncements(id))
   }

   const messageSentHandler = () => {
      setIsRejected(false)
      dispatch(rejectAnnouncements(sendId))
   }
   const cancelButtonHandler = () => {
      setIsRejected(false)
   }

   const paginationHandler = (_, value) => setPagination(value)
   const numberOfPages = Math.ceil(applications.allAnnouncementsSize / 15)
   return (
      <div>
         <StyledAdminApplication>
            <StyledH3>APPLICATION</StyledH3>
            <StyledCards>
               {applications.pageAnnouncementResponseList?.map((item) => {
                  return (
                     <AdminProfileApplicationCard
                        isViewed={item.status}
                        id={item.announcementId}
                        key={item.announcementId}
                        images={item.images}
                        price={item.price}
                        location={item.location}
                        title={item.title}
                        maxGuests={item.maxGuests}
                        rating={item.rating}
                        onAccept={acceptAnnouncementHandler}
                        onReject={rejectAnnouncementHandler}
                        onDelete={deleteAnnouncementHandler}
                     />
                  )
               })}
            </StyledCards>

            {accepted?.status === 'success' ? (
               <SnackBar
                  open={showNotification}
                  message="Accepted :)"
                  text="Moderation successfully passed"
                  severity="success"
                  onClose={setShowNotification}
               />
            ) : (
               ''
            )}
            {isRejected && (
               <RejectModal open="open" onclose={isRejected}>
                  <StyledText>REJECT</StyledText>
                  <StyledTextArea
                     type="text"
                     placeholder="Write the reason for your rejection"
                  />
                  <StyledButtons>
                     <Button
                        variant="outlined"
                        border="none"
                        width="196px"
                        height="37px"
                        hover="none"
                        onClick={cancelButtonHandler}
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
               </RejectModal>
            )}

            {applications.pageAnnouncementResponseList?.length > 1 ? (
               <StyledPagination>
                  <Paginations
                     count={numberOfPages}
                     page={pagination}
                     onChange={paginationHandler}
                  />
               </StyledPagination>
            ) : (
               ''
            )}
         </StyledAdminApplication>
      </div>
   )
}

export default AdminApplication

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
const RejectModal = styled(Modal)`
   width: 474px;
   height: 260px;
   @media (max-width: 375px) {
      width: 322px;
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
      width: 303px;
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
