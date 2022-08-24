import styled from 'styled-components'
import Button from './UI/Button'

export const ErrorAdminLogin = (props) => {
   return (
      <Container>
         <p>Incorrect email or password</p>
         <Button onClick={props.tryagain} height="35px">
            Try again
         </Button>
      </Container>
   )
}
const Container = styled.div`
   width: 474px;
   height: 263px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   & p {
      font-size: 18px;
      margin-bottom: 30px;
   }
   @media screen and (max-width: 375px) {
      width: 322px;
      height: 263px;
   }
`
