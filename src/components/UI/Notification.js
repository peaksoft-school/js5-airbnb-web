import ReactDOM from 'react-dom'
import styled from 'styled-components'

const NotificationCurrent = (props) => {
   const { variant } = props
   return (
      <div>
         <DIV variant={variant}>
            <div>
               <h3>Current</h3>
               <p>textCurrent</p>
            </div>
            <div>
               <button>X</button>
            </div>
         </DIV>
      </div>
   )
}

const Notification = (props) => {
   const { variant, Current, textCurrent, open, onClose } = props

   return (
      <>
         {ReactDOM.createPortal(
            <NotificationCurrent
               Current={Current}
               textCurrent={textCurrent}
               open={open}
               onClose={onClose}
               variant={variant}
            />,
            document.getElementById('modal')
         )}
      </>
   )
}

export default Notification

const DIV = styled.div`
   display: flex;
   width: 600px;
   height: ${(props) => (props.variant === 'error' ? '120px' : '66px')};
   background: #f0fff1;
   padding: 20px;
   margin-top: 50px;
   margin-left: 50%;
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
      padding: 30px 0 12px 28px;
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
      height: ${(props) => (props.variant === 'error' ? '120px' : '100px')};
      /* height: 120px; */
      background: #fff1f0;
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
         color: #646464;
      }
      & h3 {
         width: 246px;
         height: 19px;
         padding-top: 30px;

         font-family: 'Inter';
         font-style: normal;
         font-weight: 500;
         font-size: 16px;
         line-height: 19px;

         color: #000000;
      }
   }
`
