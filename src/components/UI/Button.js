import styled from 'styled-components'

function Button(props) {
   return (
      <CustomButton
         onClick={props.onClick}
         width={props.width}
         height={props.height}
         fontSize={props.fontSize}
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
   background: #dd8a08;
   border-radius: 2px;
   border: none;
   font-weight: 500;
   color: #f7f7f7;
   line-height: 17px;
   gap: 10px;
   cursor: pointer;
   &:hover {
      background-color: #a0522d;
   }
   &:active {
      background-color: #f4a460;
   }
   &:disabled {
      background-color: #a9a9a9;
   }

   @media screen and (max-width: 414px) {
      width: 106px !important;
   }
`
