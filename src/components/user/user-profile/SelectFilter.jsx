import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import styled, { css } from 'styled-components'

export default function SelectFilter(props) {
   const [text, settext] = useState('')
   const [btn, setbtn] = useState(false)
   const [btn2, setbtn2] = useState(false)
   const handleChange = (event) => {
      settext(event.target.value)
      setbtn2(true)
   }
   useEffect(() => {
      if (props.clearvalue) return
      settext('')
   }, [props.clearvalue])

   return (
      <BoxWrapper btn={btn} btn2={btn2}>
         <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
               <InputLabel
                  sx={{
                     '&.Mui-focused': {
                        color: '#615f5f',
                     },
                  }}
                  shrink={btn}
                  id="demo-simple-select-label"
               >
                  {props.placeholder}
               </InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={text}
                  label="Age"
                  onChange={(e) => {
                     setbtn(true)
                     props?.getvalue(e.target.value)
                     handleChange(e)
                  }}
               >
                  {props?.data?.map((i) => (
                     <MenuItem value={i?.text || i?.regionName} key={i.id}>
                        {i?.text}
                        {i?.regionName}
                     </MenuItem>
                  ))}
                  <MenuItem>+ Добавить праздник</MenuItem>
               </Select>
            </FormControl>
         </Box>
      </BoxWrapper>
   )
}
const BoxWrapper = styled.div`
   border: 2px solid #adabab;
   border-radius: 5px;
   :hover {
      border: 2px solid #615f5f;
   }
   & > div > div > label {
      border: none;
      color: #615f5f;
      top: -5px;
   }
   & > div > div > div {
      border: none;
      & > div {
         padding: 9.5px 14px;
         border: none;
         width: 151px;
      }
      & > input {
         border: none;
      }
      & > fieldset {
         border: none;
      }
   }
   & > div > div {
      border: none;

      ${(props) =>
         props.btn
            ? null
            : css`
                 & > label::after {
                    content: 'All';
                    color: black;
                    margin-left: 175px;
                 }
              `}
      ${(props) =>
         props.btn2
            ? css`
                 & > label {
                    display: none;
                 }
              `
            : ''}
   }
`
