import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
   Outlet,
   useLocation,
   useNavigate,
   useSearchParams,
} from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../../components/footer/Footer'
import UserHeader from '../../components/headers/innerheader/UserHeader'
import UserSidebar from '../../components/headers/innerheader/UserNavbar/Sidebar/UserSidebar'
import MainHeader from '../../components/headers/userheader/MainHeader'
import SignupGoogle from '../../components/SignupGoogle'
import ToastifySnackbar from '../../components/ToastifySnackbar'
import Modal from '../../components/UI/Modal'
import SignUp from '../../components/UI/SignUp'
import SignupPhoneNumber from '../../components/UI/SignupPhoneNumber'

const UserLayout = () => {
   const user = useSelector((store) => store.login?.login)
   const [searchParams, setsearchParams] = useSearchParams({})
   const location = useLocation()
   const navigate = useNavigate()
   const closesignup = () => {
      navigate(-2)
   }
   const closemodal = () => {
      navigate(-1)
   }
   useEffect(() => {
      if (!user?.phoneNumber && user?.jwt) {
         setsearchParams({ phoneNumber: 'open' })
      }
      if (user?.jwt && user?.phoneNumber) {
         setsearchParams({})
      }
   }, [user?.jwt, user?.phoneNumber])
   const adminsignup = () => {
      setsearchParams({ adminSignup: 'open' })
   }
   const adminSignupModal = !!searchParams.get('adminSignup')
   const userSignupModal = !!searchParams.get('userSignup')
   const mobileSidebar = !!searchParams.get('mobileSidebar')
   const phonenumber = !!searchParams.get('phoneNumber')
   const showfooterandheader = location.pathname.split('/').filter(Boolean)
   return (
      <Box>
         {showfooterandheader.length === 1 ? <MainHeader /> : <UserHeader />}
         <Modal open={userSignupModal} handleClose={closemodal}>
            <SignUp adminsignup={adminsignup} />
         </Modal>
         <Modal open={phonenumber} handleClose={closesignup}>
            <SignupPhoneNumber />
         </Modal>
         <Modal open={adminSignupModal} handleClose={closesignup}>
            <SignupGoogle />
         </Modal>
         {mobileSidebar && (
            <UserSidebar
               right="-20px"
               isOpen={mobileSidebar}
               mobileToggle={closemodal}
            />
         )}
         <ToastifySnackbar />
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
