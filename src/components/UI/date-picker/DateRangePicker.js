import React from 'react'
import styled from 'styled-components'
import BasikDatePicker from './BasikDatePicker'
// eslint-disable-next-line import/no-unresolved
import 'gestalt-datepicker/dist/gestalt-datepicker.css'

const DateRangePicker = (props) => {
   const { onDateRangeDates, day } = props

   const dateSubmitHandler = (e) => {
      e.preventDefault()
      onDateRangeDates()
   }
   return (
      <StyledContainer>
         <StyledH4>${day}</StyledH4>
         <form onSubmit={dateSubmitHandler}>
            <BasikDatePicker />
            <StyledButton>REQUEST TO BOOK</StyledButton>
         </form>
      </StyledContainer>
   )
}

const StyledContainer = styled.div`
   width: 494px;
   height: 269px;
   background: #ffffff;
   padding: 20px;
   & div svg {
      color: #c4c4c4;
   }

   & div input {
      box-shadow: none !important;
   }
   & ._gestalt .react-datepicker__day--range-start {
      background-color: orange !important;
   }
   & ._gestalt .react-datepicker__day--range-end {
      background-color: orange !important;
   }
   & ._gestalt .react-datepicker__day--highlighted {
      background-color: orange !important;
   }
   @media only screen and (max-width: 375px) {
      width: 343px;
      height: 331px;
      background: #ffffff;
      border-radius: 2px;
      text-align: center;
   }
`
const StyledH4 = styled.h4`
   width: 48px;
   height: 24px;
   padding: 20px 239px 40px 198px;
   margin-bottom: 20px;
   border-bottom: 1px solid #c4c4c4;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 20px;
   line-height: 24px;
   color: #000000;

   @media only screen and (max-width: 375px) {
      width: 311px;
      text-align: center;
      height: 22px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      padding: 0px;
      margin-bottom: 20px;
      color: #6c6c6c;
   }
`

const StyledButton = styled.button`
   padding: 10px 16px;
   gap: 10px;
   width: 454px;
   height: 37px;
   border: none;
   background: #dd8a08;
   border-radius: 2px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
   color: #f7f7f7;
   margin-top: 40px;
   @media only screen and (max-width: 375px) {
      width: 311px;
      height: 37px;
      background: #dd8a08;
      border-radius: 2px;
   }
`
export default DateRangePicker
