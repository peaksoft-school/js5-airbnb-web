import ReactDOM from 'react-dom'
import styled from 'styled-components'

const NotificationCurrent = (props) => {
   const { Current, textCurrent, open, onClose } = props
   return (
      <div>
         {open && (
            <DIV>
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
const NotificationError = (props) => {
   const { Error, textError, open, onClose } = props

   return (
      <div>
         {open && (
            <DIVERRORNOTIFICATION>
               <div>
                  <h1>{Error}</h1>
                  <p>{textError}</p>
               </div>
               <div>
                  <button onClick={() => onClose(false)}>X</button>
               </div>
            </DIVERRORNOTIFICATION>
         )}
      </div>
   )
}
const Notification = (props) => {
   const { Error, textError, Current, textCurrent, open, onClose } = props

   return (
      <>
         {ReactDOM.createPortal(
            <div>
               {Error ? (
                  <NotificationError Error={Error} textError={textError} />
               ) : (
                  <NotificationCurrent
                     Current={Current}
                     textCurrent={textCurrent}
                     open={open}
                     onClose={onClose}
                  />
               )}
            </div>,
            document.getElementById('modal')
         )}
      </>
   )
}

export default Notification

const DIV = styled.div`
   display: flex;
   width: 600px;
   height: 66px;
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
      height: 120px;
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

const DIVERRORNOTIFICATION = styled.div`
   display: flex;
   width: 600px;
   height: 100px;
   background: #fff1f0;
   padding: 20px;
   margin-left: 50%;
   margin-top: 20px;

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
