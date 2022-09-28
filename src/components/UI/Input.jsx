import React from 'react'
import styled from 'styled-components'

const Input = React.forwardRef(
   ({ onChange, onBlur, value, name, type, ...props }, ref) => {
      return (
         <StyledInput
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            type={type}
            name={name}
            ref={ref}
            {...props}
         />
      )
   }
)

export default Input

const StyledInput = styled.input`
   width: ${(props) => props.width || '100%'};
   height: 39px;
   padding: ${(props) => props.padding || '10px 8px 10px 16px'};
   &:hover {
      border: 1px solid #828282;
      border-radius: 2px;
   }
   &:active {
      border: 1px solid #828282;
      border-radius: 2px;
   }
   border: 1px solid #c4c4c4;
   border-radius: 2px;
   outline: none;
   &::placeholder {
      font-family: 'Inter';
      font-weight: 400;
      font-size: 16px;
      color: #c4c4c4;
   }
`
