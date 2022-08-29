import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { getAllApplications } from '../store/slices/adminApplicationActions'
import AdminProfileApplicationCard from './UI/cards/AdminProfileApplicationCard'
import Paginations from './UI/Pagination'

const AdminApplication = () => {
   const { applications } = useSelector((state) => state.applications)
   const [params, setParams] = useSearchParams()
   const page = params.get('page')
   const [pagination, setPagination] = useState(+page || 1)

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllApplications({ pagination }))
      setParams({ page: pagination })
   }, [pagination])
   useEffect(() => {
      dispatch(getAllApplications({ pagination }))
   }, [])

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
                        id={item.id}
                        key={item.id}
                        images={item.images}
                        price={item.price}
                        location={item.location}
                        title={item.title}
                        maxGuests={item.maxGuests}
                        rating={item.rating}
                     />
                  )
               })}
            </StyledCards>
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
   /* grid-template-rows: repeat(3, 1fr); */
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