import ReactDOM from 'react-dom'
import styled from 'styled-components'

const NotificationCurrent = (props) => {
   const { text, textCurrent, open, onClose } = props
   return (
      <div>
         {open && (
            <DIV>
               <div>
                  <h3>{text}</h3>
                  <p>{textCurrent}</p>
               </div>
               <div>
                  <button onClick={() => onClose(false)}>X</button>
               </div>
            </DIV>
         )}
      </div>
   )
}
const NotificationCurrentMessage = (props) => {
   const { text, textCurrent, open, onClose } = props

   return (
      <>
         {ReactDOM.createPortal(
            <NotificationCurrent
               text={text}
               textCurrent={textCurrent}
               open={open}
               onClose={onClose}
            />,
            document.getElementById('modal')
         )}
      </>
   )
}

export default NotificationCurrentMessage

const DIV = styled.div`
   margin: 350px auto;
   display: flex;
   width: 600px;
   height: 66px;
   background: #f0fff1;
   padding: 20px;
   animation: current_slide 1s ease forwards;

   @keyframes current_slide {
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
   & div {
      margin-top: -30px;
   }
   & div button {
      cursor: pointer;
      padding-top: 30px;
      background: none;
      border: none;
   }
   & h3 {
      height: 19px;
      padding-left: 28px;
      padding-top: 12px;
      padding-bottom: 12px;
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
   @media (max-width: 375px) {
      width: 322px;
      height: 120px;
      background: #fff1f0;
      margin-top: 200px;
      margin-left: 15px;
      & p {
         width: 269px;
         height: 85px;
         left: 19px;
         padding-top: 10px;
         font-family: 'Inter';
         font-style: normal;
         font-weight: 400;
         font-size: 14px;
         line-height: 17px;

         /* Tertiary / dark gray */

         color: #646464;
      }
      & h3 {
         width: 246px;
         height: 19px;
         padding-top: 12px;

         font-family: 'Inter';
         font-style: normal;
         font-weight: 500;
         font-size: 16px;
         line-height: 19px;

         color: #000000;
      }
   }
`
