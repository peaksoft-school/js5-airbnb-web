import React from 'react'
import DatePicker from 'gestalt-datepicker'
import 'gestalt/dist/gestalt.css'
import 'gestalt-datepicker/dist/gestalt-datepicker.css'
import styles from './BasicDatePicker.module.css'

export default function BasicDatePicker({ onAddDate }) {
   const handleChange = (event) => {
      onAddDate(event)
   }

   return (
      <div className={styles.datepickercontainer}>
         <DatePicker
            calendarClassName={styles['react-datepicker']}
            dayClassName={() => styles['react-datepicker__days']}
            id="example-page-header"
            onChange={(event) => handleChange(event)}
            value={new Date()}
         />
      </div>
   )
}
