import { ThreeCircles } from 'react-loader-spinner'
import styled from 'styled-components'

const LoadingSpinner = (props) => {
   return (
      <Body>
         <ThreeCircles
            height="150"
            width="150"
            color={props.color || 'orange'}
            wrapperStyle={{}}
            visible
            ariaLabel="three-circles-rotating"
         />
      </Body>
   )
}
export default LoadingSpinner

const Body = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 100%;
   position: fixed;
   background: #80808035;
   z-index: 1000;
   top: 0;
   @media screen and (max-width: 375px) {
      & :nth-child(1) {
         width: 70px;
         height: 70px;
      }
   }
`
