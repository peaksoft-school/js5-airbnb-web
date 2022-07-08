import React from 'react'
import styled from 'styled-components'

const ModalError = (props) => {
   const { text, textError } = props

   return (
      <div>
         <DIV>
            <div>
               <h1>{text}</h1>
               <p>{textError}</p>
            </div>
            <div>
               <button>X</button>
            </div>
         </DIV>
      </div>
   )
}

export default ModalError

const DIV = styled.div`
   display: flex;
   width: 600px;
   height: 100px;
   background: #fff1f0;
   padding: 20px;
   & h1 {
      width: 246px;
      height: 19px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
   }
   & p {
      width: 556px;
      height: 51px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #646464;
   }
   & div button {
      background: none;
      border: none;
      padding-top: -40px;
      color: #828282;
      padding-left: 20px;
      cursor: pointer;
   }
   @media only screen and (max-width: 375px) {
      & DIV {
         height: 134px;
         padding: 0;
         background: #fff1f0;
      }
      & h1 {
         width: 246px;
         height: 19px;
         padding-left: 19px;
         font-family: 'Inter';
         font-style: normal;
         font-weight: 500;
         font-size: 16px;
         line-height: 19px;
         color: #000000;
      }
      & p {
         width: 269px;
         height: 85px;
         padding-left: 19px;
         font-family: 'Inter';
         font-style: normal;
         font-weight: 400;
         font-size: 14px;
         line-height: 17px;
         color: #646464;
      }
   }
`
