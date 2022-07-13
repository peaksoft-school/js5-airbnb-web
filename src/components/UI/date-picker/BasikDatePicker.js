import React from 'react'
import SingleCalendar from 'react-single-calendar'
import classes from './BasicDatePicker.module.css'

const BasicDatePicker = () => {
   const range = true
   const dateInput = true
   return (
      <SingleCalendar
         range={range}
         dateInput={dateInput}
         format="dd/mm"
         cssClass={classes['form-control']}
      />
   )
}
export default BasicDatePicker
