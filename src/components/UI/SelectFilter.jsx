import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import styled, { css } from 'styled-components'

export default function SelectFilter(props) {
   const [title, settitle] = useState(false)
   useEffect(() => {
      if (props.value) {
         settitle(true)
         return
      }
      settitle(false)
   }, [props.value])
   return (
      <BoxWrapper text={title} left={props?.left}>
         <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
               <InputLabel
                  sx={{
                     '&.Mui-focused': {
                        color: '#615f5f',
                     },
                  }}
                  shrink={false}
                  id="demo-simple-select-label"
               >
                  {props.placeholder}
               </InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={props.value}
                  onChange={() => {
                     settitle(true)
                  }}
               >
                  {props?.data?.map((i) => (
                     <MenuItem
                        onClick={() => {
                           props.getvalue(i)
                        }}
                        value={i?.text || i?.regionName}
                        key={i.id}
                     >
                        {i?.text}
                        {i?.regionName}
                     </MenuItem>
                  ))}
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
   :focus {
      border: 2px solid purple;
   }
   :active {
      border: 2px solid purple;
   }
   & > div > div > label {
      border: none;
      color: #615f5f;
      top: -5px;
   }
   & > div > div > label {
      display: ${(props) => (props.value ? 'none' : 'block')};
   }
   & > div > div > div {
      border: none;
      & > div {
         padding: 9.5px 14px;
         border: none;
         ${(props) =>
            props.text
               ? null
               : css`
                    & > ::after {
                       content: 'All';
                       margin-left: ${(props) => props.left || '200px'};
                       color: black;
                    }
                 `}
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
         props.text
            ? css`
                 & > label {
                    display: none;
                 }
              `
            : css`
                 & > label {
                    display: block;
                 }
              `}
   }
`
