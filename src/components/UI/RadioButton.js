import styled from 'styled-components'

function RadioButton({ ...props }) {
   return (
      <Label width={props.width} height={props.height}>
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
   width: ${(props) => (props.width ? props.width : '22px')};
   height: ${(props) => (props.height ? props.height : '22px')};
   border-radius: 50%;
   background-color: whiet;
   border: 1px solid #c4c4c4;
   display: flex;
   justify-content: center;
   align-items: center;
`
const Span = styled.span`
   width: calc(100% - 3px);
   height: calc(100% - 3px);
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
