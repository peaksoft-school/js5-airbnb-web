import styled from 'styled-components'

function Button(props) {
   return (
      <CustomButton
         onClick={props.onClick}
         width={props.width}
         height={props.height}
         fontSize={props.fontSize}
         variant={props.variant}
      >
         {props.children}
      </CustomButton>
   )
}
export default Button

const CustomButton = styled.button`
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   font-size: ${(props) => props.fontSize};
   background: ${(props) =>
      props.variant === 'outlined' ? 'white' : '#dd8a08'};
   border-radius: 2px;
   border: ${(props) =>
      props.variant === 'outlined' ? '1px solid #828282;' : 'none'};
   font-weight: 500;
   color: ${(props) => (props.variant === 'outlined' ? '#828282' : '#f7f7f7')};
   line-height: 17px;
   gap: 10px;
   cursor: pointer;
   &:hover {
      background-color: ${(props) =>
         props.variant === 'outlined' ? 'none' : '#a0522d'};
      border: ${(props) =>
         props.variant === 'outlined' ? '1px solid rgb(100, 98, 98)' : 'none'};
   }
   &:active {
      background-color: ${(props) =>
         props.variant === 'outlined' ? '#f4a460' : '#dd8a08'};
      color: #f7f7f7;
      border: none;
   }
   &:disabled {
      background-color: #a9a9a9;
   }

   @media screen and (max-width: 414px) {
      width: 106px !important;
   }
`
