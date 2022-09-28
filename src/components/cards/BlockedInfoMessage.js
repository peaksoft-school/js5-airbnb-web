import styled from 'styled-components'
import infIcon from '../../assets/icons/infIcon.png'

const BlockedInfoMessage = (props) => {
   const { openMessage, onOpenMessage } = props
   return (
      <StyledBlockedCard>
         <DivWrapper onClick={() => onOpenMessage(false)} />
         <img
            onClick={() => onOpenMessage((p) => !p)}
            src={infIcon}
            alt="icon"
         />
         {openMessage && (
            <StyledMessage>
               Your application has been blocked, please contact the
               administrator
            </StyledMessage>
         )}
         <StyledButton>BLOCKED</StyledButton>
      </StyledBlockedCard>
   )
}

export default BlockedInfoMessage
const DivWrapper = styled.div`
   width: 260px;
   height: 340px;
   opacity: 0.2;
   background: #646464;
`
const StyledBlockedCard = styled.div`
   position: absolute;
   top: 0px;
   left: 0px;
   cursor: pointer;
   & > img {
      top: 12px;
      position: absolute;
      right: 12px;
   }
`
const StyledMessage = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 10px;
   line-height: 12px;
   opacity: 1;
   color: white;
   padding: 5px 7px 5px 6px;
   width: 214px;
   height: 34px;
   background: #646464;
   border-radius: 4px;
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   left: 20px;
   top: 41px;
`
const StyledButton = styled.button`
   color: white;
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
   line-height: 17px;
   opacity: 1;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 10px;
   width: 153px;
   position: absolute;
   top: 295px;
   right: 10px;
   background: #bbbbbb;
   border-radius: 2px;
   border: none;
`
