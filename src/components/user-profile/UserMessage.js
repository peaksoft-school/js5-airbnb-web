import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { deleteUserMessage } from '../../store/slices/getUserAnniuncement'
import Button from '../UI/Button'

function UserMessage(props) {
   const dispatch = useDispatch()
   return (
      <StyledMessage>
         <div>
            <b>Admin message:</b>
            <p>{props.messageFromAdmin}</p>
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
   width: 372px;
   overflow: hidden;
   height: 130px;
   border: 1px solid #c4c4c4;
   border-radius: 16px;
   display: flex;
   flex-direction: column;
   padding: 15px;
   margin-top: 20px;
   & b {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #646464;
   }
   & button {
      padding: 0;
      margin-top: 10px;
      width: 110px;
      margin-top: 20px;
   }
   & p {
      font-style: normal;
      font-weight: 420;
      font-size: 16px;
      line-height: 19px;
      color: #363636;
      width: 215px;
      position: relative;
      bottom: 18px;
      left: 135px;
   }
   & div {
      display: flex;
      justify-content: center;
      flex-direction: column;
   }
`
