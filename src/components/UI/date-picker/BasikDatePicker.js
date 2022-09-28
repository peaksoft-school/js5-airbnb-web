import React from 'react'
import { Flex } from 'gestalt'
import DateRangePicker from 'gestalt-datepicker'
import { useSelector } from 'react-redux'
import 'gestalt/dist/gestalt.css'
import 'gestalt-datepicker/dist/gestalt-datepicker.css'
import { useSearchParams } from 'react-router-dom'

export default function BasicDatePicker({
   onChangeHandlerIn,
   onChangeHandlerOut,
   excludedDates,
}) {
   const [startDate, setStartDate] = React.useState(undefined)
   const [endDate, setEndDate] = React.useState(undefined)
   const login = useSelector((store) => store.login.login?.jwt)
   const [, setSearchParams] = useSearchParams()
   const handleChangeIn = (value) => {
      if (!login) {
         setSearchParams({ userSignup: 'open' })
      } else {
         setStartDate(value)
         onChangeHandlerIn(value)
      }
   }
   const handleChangeOut = (value) => {
      if (!login) {
         setSearchParams({ userSignup: 'open' })
      } else {
         setEndDate(value)
         onChangeHandlerOut(value)
      }
   }
   console.log(login)

   return (
      <Flex gap={2}>
         <DateRangePicker
            rangeStartDate={startDate}
            rangeEndDate={endDate}
            label="Check In"
            onChange={({ value }) => handleChangeIn(value)}
            value={startDate}
            placeholder="Select date"
            excludeDates={excludedDates}
            minDate={new Date()}
            disabled={!login}
            localeDataCode="en-US"
         />
         <DateRangePicker
            rangeStartDate={startDate}
            rangeEndDate={endDate}
            label="Check Out"
            onChange={({ value }) => handleChangeOut(value)}
            value={endDate}
            placeholder="Select date"
            excludeDates={excludedDates}
            minDate={new Date()}
            disabled={!login}
            localeDataCode="en-US"
         />
      </Flex>
   )
}
