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
         <StyledInputLabel>{label}</StyledInputLabel>
         <FormControl fullWidth>
            <SelectMui onChange={handleChange} value={value}>
               {options?.map((item) => {
                  return (
                     <MenuItem value={getOptionValue(item)}>
                        {getOptionLabel(item)}
                     </MenuItem>
                  )
               })}
            </SelectMui>
         </FormControl>
      </BoxStyled>
   )
}
export default Select

const BoxStyled = styled(Box)`
   width: ${(props) => (props.variant === 'sort' ? '271px' : '610px')};
   height: 120px;
   background: #ffffff;
   border-radius: 2px;
   & fieldset {
      border: 1px solid #c4c4c4 !important;
   }
   & div {
      width: 610px;
      margin: 0px;
      padding: 5px;
      height: 39px;
   }

   @media (max-width: 375px) {
      width: 343px;
      height: 120px;
      background: #ffffff;
      border-radius: 2px;
      margin: 16px;
      & div {
         width: 343px;
         height: 39px;
         margin: 0px;
         padding: 5px;
         height: 39px;
      }
   }
`
const StyledInputLabel = styled(InputLabel)`
   margin-bottom: 18px;
`
