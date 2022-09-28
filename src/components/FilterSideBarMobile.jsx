import { useEffect, useState } from 'react'
import styled from 'styled-components'
import FilterButtonMobile from './UI/FilterButtonMobile'

const FilterSideBarMobile = (props) => {
   const [value, setvalue] = useState('')
   const [check, setcheck] = useState([])
   const getvalue = (e) => {
      props.getvalue(e)
      props.newvalue(false)
      setvalue(e.text)
   }

   useEffect(() => {
      const arr = props.radioBtn.map((i) => {
         if (value === i.text) {
            const obj = {
               text: i.text,
               checked: props.clear ? i.checked : !i.checked,
            }
            return obj
         }
         return i
      })
      setcheck(arr)
   }, [value, props.clear])
   return (
      <WrapperFilterBtn>
         <span>{props.title}</span>
         <div>
            {check.map((i, index) => (
               <FilterButtonMobile
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  text={i.text}
                  checked={i.checked}
                  onClick={() => {
                     getvalue(i)
                  }}
               />
            ))}
         </div>
      </WrapperFilterBtn>
   )
}
export default FilterSideBarMobile
const WrapperFilterBtn = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   & > div {
      display: flex;
      flex-direction: column;
      gap: 20px;
   }
`
