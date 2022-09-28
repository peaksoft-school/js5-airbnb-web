import React from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import SelectMui from '@mui/material/Select'
import styled from 'styled-components'

function Select({
   label,
   value,
   variant,
   onChange,
   options,
   getOptionLabel,
   getOptionValue,
}) {
   const handleChange = (event) => {
      onChange(event.target.value)
   }

   return (
      <BoxStyled variant={variant}>
         <Label>{label}</Label>
         <Form fullWidth>
            <SelectMui onChange={handleChange} value={value}>
               {options?.map((item) => {
                  return (
                     <MenuItem value={getOptionValue(item)} key={item.id}>
                        {getOptionLabel(item)}
                     </MenuItem>
                  )
               })}
            </SelectMui>
         </Form>
      </BoxStyled>
   )
}
export default Select

const Label = styled(InputLabel)`
   margin-bottom: 15px;
   color: black !important;
`
const Form = styled(FormControl)`
   & > div {
      height: 39px;
   }
`
const BoxStyled = styled(Box)`
   width: ${(props) => (props.variant === 'sort' ? '271px' : '610px')};
   height: 120px;
   background: #ffffff;
   border-radius: 2px;
   & fieldset {
      border: 1px solid #c4c4c4 !important;
   }
   @media (max-width: 375px) {
      width: 343px;
      height: 262px;
      background: #ffffff;
      border-radius: 2px;
      margin: 20px;
   }
`
