import React from 'react'
import styled from 'styled-components'

const ModalCurrent = (props) => {
   const { text, textCurrent } = props
   return (
      <div>
         <DIV>
            <div>
               <h3>{text}</h3>
               <p>{textCurrent}</p>
            </div>
            <DIVX>
               <button>X</button>
            </DIVX>
         </DIV>
      </div>
   )
}

export default ModalCurrent

const DIV = styled.div`
   display: flex;
   width: 600px;
   height: 66px;
   background: #f0fff1;
   padding: 20px;
   & div {
      margin-top: -30px;
   }
   & h3 {
      height: 19px;
      padding-left: 28px;
      padding-top: 12px;
   }
   & p {
      padding-left: 28px;
      padding-bottom: 15px;
      width: 556px;
      height: 17px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #646464;
   }
   @media only screen and (max-width: 375px) {
      & DIV {
         width: 300px;
         height: 134px;
         background: #f0fff1;
      }
   }
`
const DIVX = styled.div`
   & button {
      cursor: pointer;
      padding-top: 30px;
      background: none;
      border: none;
   }
`
