import styled from 'styled-components'
import infIcon from '../../../assets/icons/infIcon.png'

const BlockedInfoMessage = (props) => {
   const { openMessage, onOpenMessage } = props
   return (
      <StyledBlockedCard>
         <img onClick={() => onOpenMessage()} src={infIcon} alt="icon" />
         {openMessage && <StyledMessage>{props.message}</StyledMessage>}
      </StyledBlockedCard>
   )
}

export default BlockedInfoMessage

const StyledBlockedCard = styled.div`
   position: absolute;
   top: 15px;
   left: 220px;
   z-index: 10;
   cursor: pointer;
`
const StyledMessage = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 10px;
   line-height: 12px;
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
   left: -205px;
`
