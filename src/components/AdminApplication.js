import React, { useState } from 'react'
import styled from 'styled-components'
import AdminHeader from '../layout/headers/AdminHeader/AdminHeader'
import AdminProfileApplicationCard from './UI/cards/AdminProfileApplicationCard'
import NotViewedCard from './UI/cards/NotViewedCard'

const AdminApplication = (props) => {
   const [isViewed, setIsViewed] = useState(false)

   const openHandler = () => {
      setIsViewed(!isViewed)
   }
   // eslint-disable-next-line consistent-return, array-callback-return
   const newdata = props.CardData.filter((i, index) => {
      if (index <= 14) {
         return i
      }
   })
   return (
      <div>
         <AdminHeader />
         <StyledAdminApplication>
            <StyledH3>APPLICATION</StyledH3>
            <StyledCards>
               {newdata.map((item) => (
                  <AdminProfileApplicationCard
                     isViewed={isViewed}
                     slides={item.slides}
                     price={item.price}
                     location={item.location}
                     description={item.description}
                     guestsAmount={item.guestsAmount}
                     ratings={item.ratings}
                  />
               ))}
            </StyledCards>

            <button onClick={openHandler}>viewed</button>
            {isViewed && <NotViewedCard />}
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
   height: 858px;
   gap: 20px;
   @media screen and (max-width: 375px) {
      grid-template-columns: repeat(1, 1fr);
   }
`
