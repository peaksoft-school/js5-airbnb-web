import styled from 'styled-components'

function RadioButton(props) {
   return (
      <Label>
         <Input
            type="radio"
            name="simple"
            onChange={(event) => props.onChange(event.target.value)}
            value={props.value}
            checked={props.checked}
         />
         <Span />
      </Label>
   )
}

export default RadioButton

const Label = styled.label`
   width: '20.16px';
   height: '20.16px';
   border-radius: 50%;
   background-color: whiet;
   border: 1px solid #c4c4c4;
   display: flex;
   justify-content: center;
   align-items: center;
`
const Span = styled.span`
   width: calc(97% - 3px);
   height: calc(97% - 3px);
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
