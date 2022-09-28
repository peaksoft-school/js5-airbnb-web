import { useState } from 'react'
import Calendar from 'react-calendar'
import styled from 'styled-components'
import 'react-calendar/dist/Calendar.css'

const DatePicker = () => {
   const [a, onChange] = useState(new Date())
   console.log(a)
   const day = a.getDate()
   console.log(day)
   const d = () => day === 0
   return (
      <Div>
         <Calendar value={a} onChange={onChange} tileDisabled={d} />
      </Div>
   )
}
export default DatePicker
// .react-calendar__tile--active
// tileDisabled={a}
// Function: ({activeStartDate, date, view }) => date.getDay() === 0
const Div = styled.div`
   width: auto;
   height: auto;
   & .react-calendar__tile--active {
      background-color: white;
      color: black;
      text-decoration: line-through;
   }
`
