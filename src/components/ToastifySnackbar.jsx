import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'

const ToastifySnackbar = () => {
   return (
      <StyledToastify
         position="top-right"
         autoClose={3000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         theme="colored"
         pauseOnFocusLoss
         draggable
         pauseOnHover
      />
   )
}
export default ToastifySnackbar

const StyledToastify = styled(ToastContainer)`
   & .Toastify__toast-theme--colored.Toastify__toast--success {
      width: 400px !important;
      margin-left: -100px;
      background-color: #f0fff1 !important;
      color: #000000;
   }
   & .Toastify__close-button > svg {
      color: #000000;
   }
   & .Toastify__toast-theme--colored.Toastify__toast--error {
      width: 400px !important;
      margin-left: -100px;
      background-color: #fff1f0 !important;
      color: red;
   }
   & div svg path {
      display: none;
   }
   & button svg path {
      display: block;
   }
`
