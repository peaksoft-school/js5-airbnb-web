import styled from 'styled-components'

function Button(props) {
   return (
      <Btn
         onClick={props.onClick}
         style={{
            width: props.width,
            height: props.height,
            fontSize: props.fontSize,
         }}
      >
         {props.children}
      </Btn>
   )
}
export default Button

const Btn = styled.button`
   background: #dd8a08;
   border-radius: 2px;
   border: none;
   font-weight: 500;
   font-size: 12px;
   color: #f7f7f7;
   line-height: 17px;
   padding: 10px 16px;
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
