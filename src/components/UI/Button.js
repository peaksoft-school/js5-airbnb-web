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
         {props.children.toUpperCase()}
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
      props.variant === 'outlined' ? '1px solid #7D7D7D;' : 'none'};
   font-weight: 500;
   color: ${(props) => (props.variant === 'outlined' ? '#828282' : '#f7f7f7')};
   line-height: 17px;
   padding: ${(props) =>
      props.variant === 'outlined' ? '8px 16px' : '10px 16px'};
   gap: 10px;
   cursor: pointer;
   &:hover {
      background-color: ${(props) =>
         props.variant === 'outlined' ? 'none' : '#BB7200'};
      border: ${(props) =>
         props.variant === 'outlined' ? '1.5px solid #363636' : 'none'};
   }
   &:active {
      background-color: ${(props) =>
         props.variant === 'outlined' ? '#DD8A08' : '#F2B75B'};
      color: #ffffff;
      border: none;
   }
   &:disabled {
      background-color: #a9a9a9;
   }

   @media screen and (max-width: 414px) {
      width: 106px !important;
   }
`
