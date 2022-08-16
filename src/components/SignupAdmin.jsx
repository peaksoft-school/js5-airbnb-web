import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getUserOrAdmin, LoginSliceAction } from '../store/slices/LoginSlice'
import { ErrorAdminLogin } from './ErrorAdminLogin'
import Button from './UI/Button'
import Input from './UI/Input'
import Modal from './UI/Modal'

const SignupAdmin = () => {
   const [adminlogin, setadminlogin] = useState('')
   const getadminlogin = (event) => {
      setadminlogin(event.target.value)
   }
   const [adminpassowrd, setadminpassword] = useState('')
   const getpasswordadmin = (event) => {
      setadminpassword(event.target.value)
   }
   const dispatch = useDispatch()
   const [errormessage, seterror] = useState({
      login: false,
      password: false,
   })
   const { modal } = useSelector((store) => store.login)
   const fetchlogin = () => {
      if (adminlogin === '') {
         seterror({ login: true })
         return
      }
      if (adminpassowrd === '') {
         seterror({ password: true })
         return
      }
      seterror({
         login: false,
         password: false,
      })
      dispatch(
         getUserOrAdmin({
            fetchrole: 'ADMIN',
            body: {
               email: adminlogin,
               password: adminpassowrd,
            },
         })
      )
   }
   return (
      <Container>
         <Title>SIGN IN</Title>
         <InputWrapper>
            <Input
               placeholder="Login"
               padding="10px 0px 10px 14px"
               onChange={(event) => {
                  getadminlogin(event)
               }}
               name="adminlogin"
               type="text"
            />
            {errormessage.login && <span>Login must not be empty</span>}
         </InputWrapper>
         <InputWrapper>
            <Input
               type="password"
               name="adminpassword"
               placeholder="Password"
               onChange={(event) => {
                  getpasswordadmin(event)
               }}
               padding="10px 0px 10px 14px"
            />
            {errormessage.password && <span>Password must not be empty</span>}
         </InputWrapper>
         <ButtonWrapper>
            <Button
               onClick={() => {
                  fetchlogin()
               }}
               width="100%"
               height="100%"
               variant="outlined"
               borderRadius="5px"
            >
               SIGN IN
            </Button>
         </ButtonWrapper>
         <Modal open={modal}>
            <ErrorAdminLogin
               tryagain={() => {
                  dispatch(LoginSliceAction.closemodal())
               }}
            />
         </Modal>
      </Container>
   )
}
export default SignupAdmin

const InputWrapper = styled.div`
   width: 414px;
   @media screen and (max-width: 375px) {
      width: 272px;
   }
`
const ButtonWrapper = styled.div`
   width: 414px;
   height: 37px;
   @media screen and (max-width: 375px) {
      width: 272px;
      height: 37px;
   }
`
const Title = styled.p`
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   text-transform: uppercase;
   color: #000000;
   margin-top: 25px;
   margin-bottom: 24px;
`
const Container = styled.div`
   width: 474px;
   height: 263px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   & > :nth-child(3) {
      margin-top: 16px;
      margin-bottom: 36px;
   }
   & > :nth-child(4) {
      margin-bottom: 25px;
   }
   @media screen and (max-width: 375px) {
      width: 322px;
      height: 263px;
   }
`
