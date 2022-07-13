import React from 'react'
import styled from 'styled-components'
import icon from '../../../assets/icons/Vector.png'
import BasicDatePicker from './BasikDatePicker'

const DateRangePicker = (props) => {
   const { BookTrip, Information, totalAmount, CardNumber, Totalquantity } =
      props
   return (
      <DateRangeTrecker>
         <form>
            <DateRangeTrickerTrip>{BookTrip}</DateRangeTrickerTrip>
            <DateRangeTreckerTextParagraf>
               {Information}
            </DateRangeTreckerTextParagraf>

            <DateRangeTreckerSummaParagraf>
               {Totalquantity}
            </DateRangeTreckerSummaParagraf>

            <DateRangeTreckerTotalAmountParagraf>
               {totalAmount}
            </DateRangeTreckerTotalAmountParagraf>
            <DateRangePickerInputDate>
               <img src={icon} alt="icon" />
               <h3>{CardNumber}</h3>
               <h4>CVC</h4>
               <BasicDatePicker />
            </DateRangePickerInputDate>
            <DateRangeTrekerButton>Book</DateRangeTrekerButton>
         </form>
      </DateRangeTrecker>
   )
}

export default DateRangePicker

const DateRangeTrecker = styled.div`
   width: 424px;
   height: 66px;
   background: #ffffff;
   border-radius: 2px;
`
const DateRangeTrickerTrip = styled.h1`
   height: 22px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   text-align: center;
   text-transform: uppercase;
   color: #000000;
   margin-bottom: 24px;
`
const DateRangeTreckerTextParagraf = styled.p`
   width: 424px;
   height: 57px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   text-align: center;
   color: #828282;
   margin-bottom: 44px;
`
const DateRangeTreckerSummaParagraf = styled.p`
   height: 19px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   text-align: center;
   color: #646464;
   margin-bottom: 14px;
`
const DateRangeTreckerTotalAmountParagraf = styled.p`
   height: 22px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   text-align: center;
   color: #363636;
   margin-bottom: 16px;
`
const DateRangePickerInputDate = styled.div`
   width: 423px;
   height: 39px;
   border: 1px solid #c4c4c4;
   border-radius: 2px;
   margin-left: 10px;
   margin-bottom: 22px;
   & input {
      position: relative;
      width: 424px;
      height: 39px;
      border-radius: 2px;
      outline: none;
   }
   & img {
      padding-left: 4.33%;
      padding-right: 8.33%;
      padding-top: 12px;
      padding-bottom: 12px;
   }
   & h1 span {
      color: black;
   }
   & p span {
      color: black;
   }
   & span svg {
      color: black;
   }
   & button svg {
      color: black;
   }
   & div {
      border-radius: 15px;
   }
   & h3 {
      position: absolute;
      width: 236px;
      height: 19px;
      left: 120px;
      top: 249px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #c4c4c4;
   }
   & h4 {
      position: absolute;
      top: 248px;
      left: 380px;
   }
`
const DateRangeTrekerButton = styled.button`
   text-align: center;
   padding: 10px 16px;
   margin-top: 10px;
   margin-left: 10px;
   width: 424px;
   height: 39px;
   background: #dd8a08;
   border: none;
   border-radius: 2px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
   color: #f7f7f7;
`
