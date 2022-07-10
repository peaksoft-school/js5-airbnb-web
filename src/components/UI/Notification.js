import ReactDOM from 'react-dom'
import styled from 'styled-components'

const NotificationCurrent = (props) => {
   const { variant, Current, textCurrent, open, onClose } = props
   return (
      <div>
         {open && (
            <DIV variant={variant}>
               <div>
                  <h3>{Current}</h3>
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
   position: absolute;
   left: 50%;
   top: 12px;
   display: flex;
   width: 600px;
   height: ${(props) => (props.variant === 'error' ? '120px' : '66px')};
   background: ${(props) =>
      props.variant === 'error' ? ' #FFF1F0;' : '#f0fff1'};
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
      position: absolute;
      top: 12px;
      left: 15px;
      width: 322px;
      height: ${(props) => (props.variant === 'error' ? '120px' : '66px')};
      background: ${(props) =>
         props.variant === 'error' ? '#fff1f0' : '#f0fff1'};
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
