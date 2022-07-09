import React from 'react'
import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import MuiModal from '@mui/material/Modal'

const Modal = ({ open, handleClose, children }) => {
   return (
      <MuiModal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <BoxModal>{children}</BoxModal>
      </MuiModal>
   )
}

export default Modal

const BoxModal = styled(Box)`
   position: absolute;
   float: left;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   background: #fff;
   padding: 25px;
   border-radius: 2px;
   box-shadow: rgba(0, 0, 0, 0.5);
   transition: all 0.5s ease;
`
