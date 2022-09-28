import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import AdminProfileApplicationCard from '../components/cards/AdminProfileApplicationCard'
import LoadingSpinner from '../components/LoadingSpinner'
import Button from '../components/UI/Button'
import Modal from '../components/UI/Modal'
import Paginations from '../components/UI/Pagination'
import SnackBar from '../components/UI/SnackBar'
import {
   acceptAnnouncements,
   deleteAnnouncements,
   getAllApplications,
   rejectAnnouncements,
} from '../store/slices/adminApplicationActions'

const AdminApplication = () => {
   const data = useSelector((state) => state.applications)
   console.log(data, 'status')
   // eslint-disable-next-line consistent-return, array-callback-return
   const newdata = data?.applications.filter((i) => {
      if (i.status === 'NEW') {
         return i
      }
   })
   // eslint-disable-next-line consistent-return, array-callback-return
   const lastdata = data?.applications.filter((i) => {
      if (i.status !== 'NEW') {
         return i
      }
   })
   const newfilterdata = newdata.concat(lastdata)
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
   }, [
      pagination,
      data.accepted?.bool,
      data.rejected?.bool,
      data.deleted?.bool,
   ])

   useEffect(() => {
      if (data?.status === 'rejected') {
         setIsRejected(false)
      }
   }, [data?.status])

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
   const [reject, setreject] = useState('')

   const messageSentHandler = () => {
      setIsRejected(false)
      dispatch(rejectAnnouncements({ id: sendId, message: reject }))
   }
   const cancelButtonHandler = () => {
      setIsRejected(false)
   }

   const paginationHandler = (_, value) => setPagination(value)
   const numberOfPages = Math.ceil(data.size / 15)
   const nav = useNavigate()
   const go = (e, i) => {
      e.stopPropagation()
      nav(`/application/${i.announcementId}`)
   }
   return (
      <Box>
         {data?.status === 'pending' ? <LoadingSpinner color="black" /> : null}
         <StyledAdminApplication>
            <StyledH3>APPLICATION</StyledH3>
            <StyledCards>
               {newfilterdata?.map((item) => {
                  return (
                     // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                     <div
                        onClick={(e) => {
                           go(e, item)
                        }}
                        key={item.announcementId}
                     >
                        <AdminProfileApplicationCard
                           isViewed={item.status}
                           id={item.announcementId}
                           images={item.images}
                           price={item.price}
                           location={item.location}
                           title={item.title}
                           maxGuests={item.maxGuests}
                           rating={item.rating}
                           onAccept={() =>
                              acceptAnnouncementHandler(item.announcementId)
                           }
                           onReject={() =>
                              rejectAnnouncementHandler(item.announcementId)
                           }
                           onDelete={() =>
                              deleteAnnouncementHandler(item.announcementId)
                           }
                        />
                     </div>
                  )
               })}
            </StyledCards>

            {data?.status === 'success' ? (
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
            {data?.deleted?.status === 'success' ? (
               <SnackBar
                  open={showNotification}
                  message="Deleted :("
                  text="Successfully deleted"
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
                     value={reject}
                     onChange={(e) => {
                        setreject(e.target.value)
                     }}
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

            {data?.applications?.length > 15 ? (
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
      </Box>
   )
}

export default AdminApplication
const Box = styled.div`
   width: 100%;
   background: #e5e5e5;
   padding-top: 50px;
   padding-bottom: 160px;
   min-height: 700px;
`
const StyledAdminApplication = styled.div`
   width: 1240px;
   margin: 0 auto;
   @media screen and (max-width: 375px) {
      width: 375px;
   }
`

const StyledH3 = styled.h3`
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;
   margin-bottom: 40px;
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
   width: 524px;
   height: 340px;
   padding: 30px 20px;
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
