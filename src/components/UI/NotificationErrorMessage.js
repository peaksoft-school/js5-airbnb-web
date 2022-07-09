import ReactDOM from 'react-dom'
import styled from 'styled-components'

const NotificationError = (props) => {
   const { text, textError, open, onClose } = props

   return (
      <div>
         {open && (
            <DIV>
               <div>
                  <h1>{text}</h1>
                  <p>{textError}</p>
               </div>
               <div>
                  <button onClick={() => onClose(false)}>X</button>
               </div>
            </DIV>
         )}
      </div>
   )
}
const NotificationErrorMessage = (props) => {
   const { text, textError, open, onClose } = props

   return (
      <div>
         {ReactDOM.createPortal(
            <NotificationError
               text={text}
               textError={textError}
               open={open}
               onClose={onClose}
            />,
            document.getElementById('modal')
         )}
      </div>
   )
}

export default NotificationErrorMessage

const DIV = styled.div`
   display: flex;
   width: 600px;
   height: 100px;
   background: #fff1f0;
   padding: 20px;
   margin: 350px auto;
   animation: error_slide 1s ease forwards;
   @keyframes error_slide {
      0% {
         transform: translateX(100%);
      }
      40% {
         transform: translateX(-10%);
      }
      80% {
         transform: translateX(0%);
      }
      100% {
         transform: translateX(-10px);
      }
   }

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
      width: 322px;
      height: 134px;
      margin-left: 15px;
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
