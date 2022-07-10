import * as React from 'react'
import Stack from '@mui/material/Stack'
import styled from 'styled-components'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function CustomizedSnackbars(props) {
   const { error, open, onClose, message, text } = props
   return (
      <Stack spacing={2} sx={{ widt: '10%' }}>
         <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => onClose(false)}
         >
            {error === 'error' ? (
               <NotificationAlert
                  error={error}
                  onClose={() => onClose(false)}
                  severity="error"
                  sx={{
                     background: '#FFF1F0',
                     color: '#646464',
                  }}
               >
                  <h1>{message}</h1>
                  <p>{text}</p>
               </NotificationAlert>
            ) : (
               <NotificationAlert
                  onClose={() => onClose(false)}
                  severity="success"
                  sx={{
                     background: '#F0FFF1',
                     color: '#646464',
                  }}
               >
                  <h1>{message}</h1>
                  <p>{text}</p>
               </NotificationAlert>
            )}
         </Snackbar>
      </Stack>
   )
}
const NotificationAlert = styled(Alert)`
   width: ${(props) => (props.error === 'error' ? '800px' : '800px')};
   height: ${(props) => (props.error === 'error' ? '200px' : '100px')};
   & h1 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
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
   @media (max-width: 375px) {
      width: 322px;
      height: 200px;
      background: #fff1f0;
      & h1 {
         width: 246px;
         height: 19px;
         left: 19px;
         top: 12px;
         font-family: 'Inter';
         font-style: normal;
         font-weight: 500;
         font-size: 16px;
         line-height: 19px;
         color: #000000;
      }
   }
`
