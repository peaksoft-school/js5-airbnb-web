import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import icon from '../../../assets/icons/Vector.png'
import BasicDatePicker from './BasikDatePicker'

const DateRangePicker = ({
   bookTrip,
   information,
   totalAmount,
   totalQuantity,
   onAddDateRangePicker,
}) => {
   const [data, setData] = useState()
   const cardNumber = useRef(null)
   const totalCvc = useRef(null)
   const addDate = (date) => {
      setData(date)
   }
   const submitHandler = (e) => {
      e.preventDefault()
      const cardNumberValue = cardNumber.current.value
      const totalCvcValue = totalCvc.current.value
      const dateRangeObject = {
         data,
         cardNumberValue,
         totalCvcValue,
      }
      onAddDateRangePicker(dateRangeObject)
   }
   return (
      <DateRangeTrecker>
         <form onSubmit={submitHandler}>
            <DateRangeTrickerTrip>{bookTrip}</DateRangeTrickerTrip>
            <DateRangeTreckerTextParagraf>
               {information}
            </DateRangeTreckerTextParagraf>

            <DateRangeTreckerSummaParagraf>
               {totalQuantity}
            </DateRangeTreckerSummaParagraf>

            <DateRangeTreckerTotalAmountParagraf>
               {totalAmount}
            </DateRangeTreckerTotalAmountParagraf>
            <DateRangePickerInputDate>
               <StyledImg src={icon} alt="icon" />
               <StyledInput
                  ref={cardNumber}
                  type="number"
                  placeholder="Card Number"
               />
               <BasicDatePicker onAddDate={addDate} />
               <StyledInputCVC ref={totalCvc} type="number" placeholder="CVC" />
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
   display: flex;
   width: 423px;
   height: 39px;
   border: 1px solid #c4c4c4;
   border-radius: 2px;
   margin-left: 10px;
   margin-bottom: 22px;
`
const StyledImg = styled.img`
   padding-left: 2%;
   padding-top: 12px;
   padding-bottom: 12px;
`

const StyledInput = styled.input`
   width: 147px;
   height: 40px;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: black;
   background: none !important;
   border: none;
   outline: none;
   border: none;
   text-align: center;
`
const StyledInputCVC = styled.input`
   width: 100px;
   padding-top: 10px;
   padding-bottom: 10px;
   text-align: center;
   background: none !important;
   outline: none;
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
