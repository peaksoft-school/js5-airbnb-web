import { MenuItem, Menu } from '@mui/material'
import styled from 'styled-components'

const PopUp = (props) => {
   const closeHandler = () => {
      props.closePopup()
   }
   return (
      <>
         {props.children}
         <Menu
            open={props.openPopup}
            onClose={closeHandler}
            anchorEl={props.position}
         >
            <WrapperMeatballs>
               {props.options.map((i) => {
                  return (
                     <MenuItem
                        key={i.id}
                        onClick={() => {
                           i.onClick()
                           closeHandler()
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
