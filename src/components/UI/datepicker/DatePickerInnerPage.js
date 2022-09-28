import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'

function getWeeksAfter(date, amount) {
   return date ? date.add(amount, 'week') : undefined
}

export function MinMaxDateRangePicker() {
   const [value, setValue] = React.useState([null, null])

   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DateRangePicker
            disablePast
            value={value}
            maxDate={getWeeksAfter(value[0], 4)}
            onChange={(newValue) => {
               setValue(newValue)
            }}
            renderInput={(startProps, endProps) => (
               <>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
               </>
            )}
         />
      </LocalizationProvider>
   )
}
