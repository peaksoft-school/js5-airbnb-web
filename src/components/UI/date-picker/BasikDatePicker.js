import React from 'react'
import { Flex } from 'gestalt'
import DateRangePicker from 'gestalt-datepicker'
import 'gestalt/dist/gestalt.css'
import 'gestalt-datepicker/dist/gestalt-datepicker.css'

export default function BasicDatePicker({
   onChangeHandlerIn,
   onChangeHandlerOut,
   dates,
}) {
   const [startDate, setStartDate] = React.useState(undefined)
   const [endDate, setEndDate] = React.useState(undefined)

   const handleChangeIn = (value) => {
      setStartDate(value)
      onChangeHandlerIn(value)
   }
   const handleChangeOut = (value) => {
      setEndDate(value)
      onChangeHandlerOut(value)
   }

   return (
      <Flex gap={2}>
         <DateRangePicker
            rangeStartDate={startDate}
            rangeEndDate={endDate}
            label="Check In"
            onChange={({ value }) => handleChangeIn(value)}
            value={startDate}
            placeholder="Select date"
            excludeDates={dates}
         />
         <DateRangePicker
            rangeStartDate={startDate}
            rangeEndDate={endDate}
            label="Check Out"
            onChange={({ value }) => handleChangeOut(value)}
            value={endDate}
            placeholder="Select date"
            excludeDates={dates}
         />
      </Flex>
   )
}
