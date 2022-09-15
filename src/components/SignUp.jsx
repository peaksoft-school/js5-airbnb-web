import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { ReactComponent as Google } from '../assets/icons/logo-google.svg'
import { getUserOrAdmin } from '../store/slices/LoginSlice'
import Button from './UI/Button'
import Input from './UI/Input'

const SignUp = (props) => {
   const dispatch = useDispatch()
   const [phonenumber, setphonenumber] = useState('')
   const signupfirebase = () => {
      if (phonenumber.length === 0) {
         setphonenumber('error')
         return
      }
      if (phonenumber.length > 9) return
      dispatch(getUserOrAdmin({ fetchrole: 'USER', phonenumber }))
      props?.close()
      setphonenumber('')
   }
   return (
      <Container>
         <Title1>Join us</Title1>
         <Title2>
            Sign in with Google to start booking available listings!
         </Title2>
         <WrapperGoogleBox show={phonenumber}>
            <span>+996</span>
            <Input
               placeholder="Phone number: "
               onChange={(e) => setphonenumber(e.target.value)}
               value={phonenumber}
               type="number"
            />
            <span>phone number not be more 9 symbols</span>
            <span>phone numder required to fill out</span>
            <Button
               variant="outlined"
               width="100%"
               height="100%"
               fontSize="18px"
               borderRadius="5px"
               onClick={signupfirebase}
            >
               <WrapperGoogle>
                  <Google />
                  <p>Google</p>
               </WrapperGoogle>
            </Button>
         </WrapperGoogleBox>
         <ButtonAdmin
            onClick={() => {
               props.adminsignup()
            }}
         >
            log in as admin
         </ButtonAdmin>
      </Container>
   )
}
export default React.memo(SignUp)
const ButtonAdmin = styled.button`
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   margin-top: 36px;
   border: none;
   border-bottom: 1px solid #266bd3;
   background: none;
   cursor: pointer;
   color: #266bd3;
   :hover {
      border-bottom: 1px solid #4b87e0;
      color: #4b87e0;
   }
   :active {
      border-bottom: 1px solid #dd8a08;
      color: #dd8a08;
   }
`
const Container = styled.div`
   width: 474px;
   height: 238px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   @media screen and (max-width: 375px) {
      width: 322px;
      height: 262px;
   }
`
const Title1 = styled.p`
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   text-transform: uppercase;
   color: #000000;
`
const Title2 = styled.p`
   color: #828282;
   margin-top: 24px;
   margin-bottom: 20px;
   @media screen and (max-width: 375px) {
      text-align: center;
      width: 250px;
   }
`
const WrapperGoogle = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 30px;
   & > :nth-child(1) {
      margin-right: 8px;
   }
   & > :nth-child(2) {
      margin-left: 8px;
   }
`
const WrapperGoogleBox = styled.div`
   display: flex;
   flex-direction: column;
   position: relative;
   & > :nth-child(1) {
      display: ${(props) =>
         props.show !== 'error' && props.show !== '' ? 'block' : 'none'};
      position: absolute;
      top: 8px;
      left: 16px;
      font-size: 16px;
   }
   & > :nth-child(2) {
      font-size: 16px;
      width: 450px;
      height: 35px;
      margin-bottom: 15px;
      padding-left: ${(props) =>
         props.show !== 'error' && props.show !== '' ? '60px' : '10px'};
   }
   & > :nth-child(3) {
      display: ${(props) => (props.show.length > 9 ? 'block' : 'none')};
      position: absolute;
      top: 32px;
      left: 80px;
   }
   & > :nth-child(4) {
      display: ${(props) => (props.show === 'error' ? 'block' : 'none')};
      position: absolute;
      top: 32px;
      left: 100px;
   }
   & > :nth-child(5) {
      width: 450px;
      height: 60px;
   }
   @media screen and (max-width: 375px) {
      width: 272px;
      height: 50px;
   }
`
