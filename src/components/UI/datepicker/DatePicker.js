/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { it } from 'date-fns/locale'
import 'gestalt/dist/gestalt.css'
import 'gestalt-datepicker/dist/gestalt-datepicker.css'
import { Flex } from 'gestalt'
import DatePicker from 'gestalt-datepicker'

function Datepicker() {
   const [startDate, setStartDate] = React.useState(undefined)
   const [endDate, setEndDate] = React.useState(undefined)
   const endDateInput = React.useRef(null)
   const startDateInput = React.useRef(null)

   return (
      <Flex gap={2}>
         <DatePicker
            localeDataCode="en-US"
            placeholder="Select date"
            localeData={it}
            rangeStartDate={startDate}
            rangeEndDate={endDate}
            id="example-start-date"
            label="Check In"
            nextRef={endDateInput}
            idealDirection="down"
            onChange={({ value }) => {
               setStartDate(value)
            }}
            rangeSelector="start"
            value={startDate}
            ref={startDateInput}
         />
         <DatePicker
            localeDataCode="en-US"
            placeholder="Select date"
            localeData={it}
            rangeStartDate={startDate}
            rangeEndDate={endDate}
            id="example-end-date"
            label="Check Out"
            nextRef={startDateInput}
            idealDirection="down"
            onChange={({ value }) => setEndDate(value)}
            rangeSelector="end"
            value={endDate}
            ref={endDateInput}
         />
      </Flex>
   )
}

export default Datepicker
