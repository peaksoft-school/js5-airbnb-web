import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
   Outlet,
   useLocation,
   useNavigate,
   useSearchParams,
} from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import MainHeader from '../../components/headers/MainPageHeader/MainHeader'
import UserHeader from '../../components/headers/User-VendorHeader/UserHeader'
import UserSidebar from '../../components/headers/User-VendorHeader/UserNavbar/Sidebar/UserSidebar'
import { SignUp } from '../../components/SignUp'
import SignupAdmin from '../../components/SignupAdmin'
import Modal from '../../components/UI/Modal'

const UserLayout = () => {
   const user = useSelector((store) => store.login?.login?.jwt)
   const [searchParams, setsearchParams] = useSearchParams({})
   const navigate = useNavigate()
   const closesignup = () => {
      navigate(-2)
   }
   const closemodal = () => {
      navigate(-1)
   }
   useEffect(() => {
      if (user) {
         setsearchParams({})
      }
   }, [user])
   const adminsignup = () => {
      setsearchParams({ adminSignup: 'open' })
   }
   const adminSignupModal = !!searchParams.get('adminSignup')
   const userSignupModal = !!searchParams.get('userSignup')
   const mobileSidebar = !!searchParams.get('mobileSidebar')
   const location = useLocation()
   const showfooterandheader = location.pathname.split('/').filter(Boolean)
   return (
      <Box>
         {showfooterandheader.length === 1 ? <MainHeader /> : <UserHeader />}
         <Modal open={userSignupModal} handleClose={closemodal}>
            <SignUp adminsignup={adminsignup} />
         </Modal>
         <Modal open={adminSignupModal} handleClose={closesignup}>
            <SignupAdmin />
         </Modal>
         {mobileSidebar ? (
            <UserSidebar
               right="-20px"
               isOpen={mobileSidebar}
               mobileToggle={closemodal}
            />
         ) : null}
         <Section>
            <Outlet />
         </Section>
         {showfooterandheader.length !== 2 ? <Footer /> : null}
      </Box>
   )
}
export default React.memo(UserLayout)

const Box = styled.div`
   width: 100%;
   min-height: 700px;
   @media screen and (max-width: 375px) {
      overflow: hidden;
      width: 375px;
   }
`
const Section = styled.div`
   min-height: 700px;
   @media screen and (max-width: 375px) {
      overflow: hidden;
      width: 375px;
      min-height: 100vh;
   }
`
