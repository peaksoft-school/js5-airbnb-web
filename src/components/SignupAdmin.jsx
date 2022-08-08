import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getUserOrAdmin } from '../store/slices/LoginSlice'
import Button from './UI/Button'
import Input from './UI/Input'

const SignupAdmin = (props) => {
   const dispatch = useDispatch()
   const [adminlogin, setadminlogin] = useState('')
   const getadminlogin = (event) => {
      setadminlogin(event.target.value)
   }
   const [adminpassowrd, setadminpassword] = useState('')
   const getpasswordadmin = (event) => {
      setadminpassword(event.target.value)
   }
   const fetchlogin = () => {
      if ((adminlogin === '', adminpassowrd === '')) return
      dispatch(
         getUserOrAdmin({
            fetchrole: 'admin',
            body: {
               email: adminlogin,
               password: adminpassowrd,
            },
         })
      )
      props.closemodal()
   }
   return (
      <Div1>
         <P1>SIGN IN</P1>
         <DivInput>
            <Input
               placeholder="Login"
               padding="10px 0px 10px 14px"
               onChange={(event) => {
                  getadminlogin(event)
               }}
               name="adminlogin"
               type="text"
            />
         </DivInput>
         <DivInput>
            <Input
               type="password"
               name="adminpassword"
               placeholder="Password"
               onChange={(event) => {
                  getpasswordadmin(event)
               }}
               padding="10px 0px 10px 14px"
            />
         </DivInput>
         <DivBtn>
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
         </DivBtn>
      </Div1>
   )
}
export default SignupAdmin

const DivInput = styled.div`
   width: 414px;
   @media screen and (max-width: 375px) {
      width: 272px;
   }
`
const DivBtn = styled.div`
   width: 414px;
   height: 37px;
   @media screen and (max-width: 375px) {
      width: 272px;
      height: 37px;
   }
`
const P1 = styled.p`
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   text-transform: uppercase;
   color: #000000;
   margin-top: 25px;
   margin-bottom: 24px;
`
const Div1 = styled.div`
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
