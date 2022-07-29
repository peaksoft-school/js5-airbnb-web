import React from 'react'
import styled from 'styled-components'
import UserProfileApartmentCard from './UserProfileApartmentCard'
import { UserProfileData } from './UserProfileData'

const UserApartmentBody = () => {
   return (
      <ApartmentCont>
         <UserProfileApartmentCard datas={UserProfileData} />
      </ApartmentCont>
   )
}

export default UserApartmentBody

const ApartmentCont = styled.div`
   padding: 40px 100px;
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
   width: 1440px;
   @media screen and (max-width: 376px) {
      padding: 16px;
      width: fit-content;
      margin: 0;
   }
`
