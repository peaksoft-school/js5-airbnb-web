import styled from 'styled-components'

function RadioButton(props) {
   return (
      <Label variant={props.variant}>
         <Input type="radio" name="simple" onClick={props.onClick} />
         <Span />
      </Label>
   )
}

export default RadioButton

const Label = styled.label`
   width: ${(props) => (props.variant ? '20.16px' : '36px')};
   height: ${(props) => (props.variant ? '20.16px' : '36px')};
   border-radius: 50%;
   background-color: ${(props) => (props.variant ? 'white' : '#d3d3d3')};
   border: ${(props) => (props.variant ? '1px solid #d3d3d3' : 'none')};
   margin-left: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
`
const Span = styled.span`
   width: calc(100% - 3px);
   height: calc(100% - 3px);
   border-radius: 50%;
   background-color: orange;
   display: inline-block;
   opacity: 0;
   transition: opacity 0.5s ease;
`
const Input = styled.input`
   display: none;
   &:checked + Span {
      opacity: 1;
   }
`
