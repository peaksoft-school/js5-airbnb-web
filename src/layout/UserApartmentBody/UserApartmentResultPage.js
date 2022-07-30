import { Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import BreadCrumbs from '../../components/UI/BreadCrumbs'
import UserHeader from '../headers/User-VendorHeader/UserHeader'
import UserApartmentBody from './UserApartmentBody'
import UserApartmentFilter from './UserApartmentFilter'

const UserApartmentResultPage = () => {
   return (
      <>
         <UserHeader />
         <PageWrapper>
            <BreadCrumbs
               firstpath="main"
               location={useLocation()}
               translate="naryn"
            />
            {/* <Link to="naryn">home</Link> */}
            <Outlet />
            <UserApartmentFilter />
            <UserApartmentBody />
         </PageWrapper>
      </>
   )
}

export default UserApartmentResultPage

const PageWrapper = styled.div`
   padding: 0 100px;
   @media screen and (max-width: 376px) {
      padding: 0 16px;
   }
`
