import React, { useState } from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import styled from 'styled-components'

export default function BasicSelect({ variant, onChange, arrayOptions }) {
   const [region, setRegion] = useState('')
   const handleChange = (event) => {
      setRegion(event.target.value)
      onChange(event.target.value)
   }

   return (
      <BoxStyled variant={variant}>
         <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
               {variant === 'sort' ? 'Sort by' : 'Please, select the region'}
            </InputLabel>
            <Select
               onChange={handleChange}
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={region}
               label={
                  variant === 'sort' ? 'Sort By' : 'Please, select the region'
               }
            >
               {arrayOptions?.map((item) => {
                  return (
                     <MenuItem key={item.id} value={item.region}>
                        {item.region}
                     </MenuItem>
                  )
               })}
            </Select>
         </FormControl>
      </BoxStyled>
   )
}

const BoxStyled = styled(Box)`
   width: ${(props) => (props.variant === 'sort' ? '271px' : '610px')};
   height: 262px;
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
