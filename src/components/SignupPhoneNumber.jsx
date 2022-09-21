import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { sendPhoneNumber } from '../store/slices/LoginSlice'
import Button from './UI/Button'
import Input from './UI/Input'

const SignupPhoneNumber = () => {
   const dispatch = useDispatch()
   const [phonenumber, setphonenumber] = useState(' ')
   const [, setsearch] = useSearchParams()
   const signupfirebase = () => {
      if (phonenumber.length === 0) {
         setphonenumber('error')
         return
      }
      if (phonenumber.length > 9) return
      if (phonenumber.length < 8) {
         setphonenumber('')
         return
      }
      dispatch(sendPhoneNumber(phonenumber))
      setsearch({})
      setphonenumber('')
   }
   return (
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
         <Button onClick={signupfirebase}>Submit</Button>
      </WrapperGoogleBox>
   )
}
export default SignupPhoneNumber

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
