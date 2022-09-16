import * as React from 'react'
import MuiAlert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import styled from 'styled-components'

const Alert = React.forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function SnackBar({ severity, open, onClose, message, text }) {
   return (
      <Stack>
         <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={() => onClose(false)}
         >
            <NotificationAlert
               onClose={() => onClose(false)}
               severity={severity}
            >
               <h1>{message}</h1>
               <p>{text}</p>
            </NotificationAlert>
         </Snackbar>
      </Stack>
   )
}
const NotificationAlert = styled(Alert)`
   width: 800px;
   padding: 40px;
   height: ${(props) => (props.severity === 'success' ? '70px' : '100px')};
   background-color: ${(props) =>
      props.severity === 'success' ? ' #F0FFF1' : '#FFF1F0'} !important;
   color: #000000;
   & h1 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: ${(props) =>
         props.severity === 'success' ? '4px' : '5px'};
      color: #000000;
   }
   & p {
      height: 19px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      color: #646464;
   }
   @media (max-width: 375px) {
      width: 322px;
      height: ${(props) => (props.severity === 'success' ? '70px' : '100px')};
<<<<<<< HEAD
=======
      overflow: hidden;
>>>>>>> 9470914611f938adedaa49f980e51401e0a8c41d
      background: #fff1f0;
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
         width: 269px;
         height: 85px;
         font-family: 'Inter';
         font-style: normal;
         font-weight: 400;
         font-size: 14px;
         line-height: 17px;
         color: #646464;
      }
      .css-1pxa9xg-MuiAlert-message {
         overflow: hidden;
      }
   }
`
