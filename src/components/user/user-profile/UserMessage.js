import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { deleteUserMessage } from '../../../store/slices/getUserAnnouncement'
import Button from '../../UI/Button'

function UserMessage(props) {
   const dispatch = useDispatch()
   return (
      <StyledMessage>
         <div>
            <b>Message from admin: </b>
            {props?.messageFromAdmin.map((i, index) => (
               // eslint-disable-next-line react/no-array-index-key
               <p key={index}>{i}</p>
            ))}
         </div>
         <Button
            variant="contained"
            onClick={() => {
               dispatch(deleteUserMessage())
            }}
         >
            Clear message
         </Button>
      </StyledMessage>
   )
}
export default UserMessage

const StyledMessage = styled.div`
   width: 360px;
   overflow: hidden;
   position: absolute;
   top: 366px;
   background-color: peachpuff;
   border: 1px solid #c4c4c4;
   border-radius: 16px;
   display: flex;
   flex-direction: column;
   padding: 15px;
   margin-top: 20px;
   & > div {
      display: flex;
      flex-direction: column;
      width: 360px;
      & > b {
         font-style: normal;
         font-weight: 400;
         font-size: 16px;
         line-height: 19px;
         color: #646464;
         width: 360px;
         margin-bottom: 10px;
      }
      & > p {
         font-style: normal;
         font-weight: 420;
         font-size: 16px;
         line-height: 19px;
         color: #363636;
      }
   }
   & button {
      padding: 0;
      margin-top: 10px;
      width: 110px;
      margin-top: 20px;
   }
`
