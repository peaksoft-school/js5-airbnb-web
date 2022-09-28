import { useState } from 'react'
import { MenuItem, Menu } from '@mui/material'
import styled from 'styled-components'
import MeatBallsPng from '../../assets/icons/balls.png'
import BlockedPng from '../../assets/icons/Btns.png'

const PopUp = (props) => {
   const [position, setPosition] = useState(null)
   const [openPopup, setOpenPopup] = useState(false)
   const toggleHandler = (e) => {
      e.stopPropagation()
      setPosition(e.currentTarget)
      setOpenPopup((prev) => !prev)
   }
   const closeHandler = () => {
      setOpenPopup((prev) => !prev)
   }
   return (
      <>
         <Img
            onClick={toggleHandler}
            src={props?.opacity ? BlockedPng : MeatBallsPng}
         />
         <Menu open={openPopup} onClose={closeHandler} anchorEl={position}>
            <WrapperMeatballs>
               {props.options.map((i, index) => {
                  return (
                     <MenuItem
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        onClick={(e) => {
                           e.stopPropagation()
                           closeHandler()
                           i.onClick()
                        }}
                     >
                        {i.text}
                     </MenuItem>
                  )
               })}
            </WrapperMeatballs>
         </Menu>
      </>
   )
}
export default PopUp
const WrapperMeatballs = styled.div`
   padding: 3px;
`
const Img = styled.img`
   width: 20px;
   cursor: pointer;
   height: 5px;
   @media (max-width: 375px) {
      width: 25px;
      height: 6px;
   }
`
