import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { ReactComponent as Google } from '../assets/icons/logo-google.svg'
import { getUserOrAdmin } from '../store/slices/LoginSlice'
import Button from './UI/Button'

export const SignUp = (props) => {
   const dispatch = useDispatch()
   const signupfirebase = () => {
      dispatch(getUserOrAdmin({ fetchrole: 'USER' }))
      props.close()
   }

   return (
      <Container>
         <Title1>Join us</Title1>
         <Title2>
            Sign in with Google to start booking available listings!
         </Title2>
         <WrapperGoogleBox>
            <Button
               variant="outlined"
               width="100%"
               height="100%"
               fontSize="18px"
               borderRadius="5px"
               onClick={signupfirebase}
            >
               <WrapperGoogle>
                  <Google />
                  <p>Google</p>
               </WrapperGoogle>
            </Button>
         </WrapperGoogleBox>
         <ButtonAdmin
            onClick={() => {
               props.adminsignup()
            }}
         >
            log in as admin
         </ButtonAdmin>
      </Container>
   )
}

const ButtonAdmin = styled.button`
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   margin-top: 36px;
   border: none;
   border-bottom: 1px solid #266bd3;
   background: none;
   cursor: pointer;
   color: #266bd3;
   :hover {
      border-bottom: 1px solid #4b87e0;
      color: #4b87e0;
   }
   :active {
      border-bottom: 1px solid #dd8a08;
      color: #dd8a08;
   }
`
const Container = styled.div`
   width: 474px;
   height: 238px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   @media screen and (max-width: 375px) {
      width: 322px;
      height: 262px;
   }
`
const Title1 = styled.p`
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   text-transform: uppercase;
   color: #000000;
`
const Title2 = styled.p`
   color: #828282;
   margin-top: 24px;
   margin-bottom: 20px;
   @media screen and (max-width: 375px) {
      text-align: center;
      width: 250px;
   }
`
const WrapperGoogle = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 30px;
   & > :nth-child(1) {
      margin-right: 8px;
   }
   & > :nth-child(2) {
      margin-left: 8px;
   }
`
const WrapperGoogleBox = styled.div`
   width: 450px;
   height: 60px;
   @media screen and (max-width: 375px) {
      width: 272px;
      height: 50px;
   }
`
