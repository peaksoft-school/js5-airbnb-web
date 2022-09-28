import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import AdminProfileApplicationCard from '../components/cards/AdminProfileApplicationCard'
import LoadingSpinner from '../components/LoadingSpinner'
import Button from '../components/UI/Button'
import Modal from '../components/UI/Modal'
import Paginations from '../components/UI/Pagination'
import {
   acceptAnnouncements,
   deleteAnnouncements,
   rejectAnnouncements,
} from '../store/slices/adminApplicationActions'
import { getAdminFilterCard } from '../store/slices/adminCatalogSlice'
import AllFousingFilterCard from './AllFousingFilterCards'

const AdminGetAllHousing = () => {
   const store = useSelector(
      (store) => store?.getAllHousingAdminCatalog?.response
   )
   const status = useSelector((store) => store.applications)
   console.log(status, 'status need')
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [path, setpath] = useSearchParams()
   const [data, setdata] = useState({
      booked: '',
      kind: '',
      type: '',
      price: '',
      page: 1,
   })
   const getvalue = (value) => {
      setdata({
         ...data,
         booked: value.fetchbooked,
         kind: value.fetchpopular,
         price: value.fetchprice,
         type: value.fetchapartment,
      })
   }
   const page = (_, value) => {
      setdata({
         ...data,
         page: value,
      })
   }

   console.log(store, 'store?.adminPageHousingResponseList')

   useEffect(() => {
      if (data.booked || data.type) {
         setdata({
            ...data,
            page: 1,
         })
      }
   }, [data.booked, data.type])
   useEffect(() => {
      const filterurl = {}
      if (data.booked) {
         filterurl.bookedType = data.booked
      }
      if (data.type) {
         filterurl.housingType = data.type
      }
      if (data.kind) {
         filterurl.kind = data.kind
      }
      if (data.price) {
         filterurl.price = data.price
      }
      if (data.page) {
         filterurl.page = data.page
      }
      setpath(filterurl)
   }, [data.kind, data.page, data.booked, data.type, data.price])

   useEffect(() => {
      dispatch(getAdminFilterCard(path.toString()))
   }, [
      path.toString(),
      status.accepted.status,
      status.accepted.bool,
      status.deleted.status,
      status.deleted.bool,
      status.rejected.status,
      status.rejected.bool,
   ])
   const [open, setopen] = useState(0)
   const [rejectmodal, setrejectmodal] = useState(0)
   const [reject, setreject] = useState('')
   const acceptedannouncement = (id) => {
      dispatch(acceptAnnouncements(id))
   }
   const deletedannouncement = (id) => {
      dispatch(deleteAnnouncements(id))
   }
   const rejectannouncement = (idannouncement) => {
      dispatch(
         rejectAnnouncements({
            id: idannouncement,
            message: reject,
         })
      )
   }
   const count = {
      num: '',
   }
   if (store.adminPageAllHousingResponseListSize / 16 === 0) {
      count.num = Math.ceil(store.adminPageAllHousingResponseListSize / 16)
   } else {
      const num = Math.ceil(store.adminPageAllHousingResponseListSize / 16)
      count.num = num + 1
   }
   console.log(count, 'count')
   return (
      <>
         {store.status === 'pending' ? <LoadingSpinner color="black" /> : null}
         <Wrapper>
            <RejectModal open={rejectmodal} handleClose={setrejectmodal}>
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
                     onClick={() => setrejectmodal(0)}
                  >
                     CANCEL
                  </Button>
                  <Button
                     width="196px"
                     height="37px"
                     onClick={() => {
                        rejectannouncement(rejectmodal)
                        setrejectmodal(0)
                     }}
                  >
                     SEND
                  </Button>
               </StyledButtons>
            </RejectModal>
            <Modal open={open} handleClose={setopen}>
               <WrapperImModal>
                  <p>Are you sure?</p>
                  <div>
                     <Button
                        variant="contained"
                        onClick={() => {
                           deletedannouncement(open)
                           setopen(0)
                        }}
                     >
                        Yes
                     </Button>
                     <Button onClick={() => setopen(0)}>No</Button>
                  </div>
               </WrapperImModal>
            </Modal>
            <ContentWrapper>
               <ContentFilter>
                  <AllFousingFilterCard
                     getvalueselect={getvalue}
                     size={store.adminPageAllHousingResponseListSize}
                  />
               </ContentFilter>
               <WrapperCard>
                  {store?.adminPageHousingResponseList?.map((item) => {
                     return (
                        <Box
                           onClick={() =>
                              navigate(`/users/card/${item?.announcementId}`)
                           }
                           key={item?.announcementId}
                        >
                           <AdminProfileApplicationCard
                              isViewed={item?.status}
                              id={item?.announcementId}
                              images={item?.images}
                              price={item?.price}
                              location={item?.location}
                              title={item?.title}
                              maxGuests={item?.maxGuests}
                              rating={item?.rating}
                              onAccept={() =>
                                 acceptedannouncement(item?.announcementId)
                              }
                              onReject={() =>
                                 setrejectmodal(item.announcementId)
                              }
                              onDelete={() => setopen(item.announcementId)}
                           />
                        </Box>
                     )
                  })}
               </WrapperCard>
               <WrapperPagination>
                  {store.adminPageAllHousingResponseListSize > 16 ? (
                     <Paginations
                        count={count.num}
                        page={data.page}
                        onChange={page}
                     />
                  ) : null}
               </WrapperPagination>
            </ContentWrapper>
         </Wrapper>
      </>
   )
}
export default AdminGetAllHousing

const Box = styled.div``
const RejectModal = styled(Modal)`
   width: 524px;
   height: 340px;
   padding: 30px 20px;
   @media (max-width: 375px) {
      width: 322px;
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
const WrapperImModal = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   width: 350px;
   height: 80px;
   gap: 20px;
   & > div > button {
      padding: 0px;
   }
   & > div {
      display: flex;
      gap: 10px;
      flex-direction: row;
   }
`
const WrapperCard = styled.div`
   display: flex;
   align-items: center;
   margin: 0 auto;
   flex-wrap: wrap;
   width: 1240px;
   gap: 41px;
`
const WrapperPagination = styled.div`
   margin-top: 60px;
   padding-bottom: 197px;
   width: 1240px;
   display: flex;
   justify-content: center;
`
const ContentFilter = styled.div`
   display: flex;
   align-items: center;
   align-content: center;
   width: 1240px;
   justify-content: space-between;
`
const ContentWrapper = styled.div`
   width: 1240px;
   margin: 0 auto;
   padding-top: 40px;
`
const Wrapper = styled.div`
   width: 100%;
   min-height: 700px;
   background: #e5e5e5;
`
// const Div = styled.div`
//    /* width: 1240px; */
//    /* margin: 0 auto; */
//    /* margin-top: 30px; */
//    font-style: normal;
//    font-weight: 500;
//    font-size: 20px;
//    line-height: 24px;
//    text-transform: uppercase;
//    /* border-bottom: 1px solid grey; */
// `
// const Block = styled.div`
//    width: 240px;
//    height: 35px;
//    @media screen and (max-width: 375px) {
//       display: none;
//    }
// `
