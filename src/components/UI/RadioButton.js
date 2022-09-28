import styled from 'styled-components'

function RadioButton({ checked, value, onChange, ...props }) {
   return (
      <Label style={props}>
         <Input
            checked={checked}
            type="radio"
            name={props.name}
            onChange={(event) => onChange(event)}
            value={value}
            id={props.id}
         />
         <Span />
      </Label>
   )
}

export default RadioButton

const Label = styled.label`
   width: ${(props) => props.width || '20.16px'};
   height: 20.16px;
   border-radius: 50%;
   background-color: white;
   border: 1px solid #c4c4c4;
   display: flex;
   justify-content: center;
   align-items: center;
`
const Span = styled.span`
   width: 90%;
   height: 90%;
   border-radius: 50%;
   background-color: #dd8a08;
   opacity: 0;
   transition: opacity 0.5s ease;
`
const Input = styled.input`
   display: none;
   &:checked + Span {
      opacity: 1;
   }
`
