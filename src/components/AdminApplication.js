import styled from 'styled-components'
import AdminHeader from '../layout/headers/AdminHeader/AdminHeader'
import AdminProfileApplicationCard from './UI/cards/AdminProfileApplicationCard'
import Paginations from './UI/Pagination'

const AdminApplication = (props) => {
   return (
      <div>
         <AdminHeader />
         <StyledAdminApplication>
            <StyledH3>APPLICATION</StyledH3>
            <StyledCards>
               <>
                  {props.CardData.map((item) => (
                     <AdminProfileApplicationCard
                        key={item.id}
                        slides={item.slides}
                        price={item.price}
                        location={item.location}
                        description={item.description}
                        guestsAmount={item.guestsAmount}
                        ratings={item.ratings}
                     />
                  ))}
               </>
            </StyledCards>
            <StyledPagination>
               <Paginations />
            </StyledPagination>
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
