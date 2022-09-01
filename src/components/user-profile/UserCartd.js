import styled from 'styled-components'

function UserCard(props) {
   return (
      <User>
         <Logo>{props.name.charAt(0).toUpperCase()}</Logo>
         <Name>
            Name:<UserName>{props.name}</UserName>
         </Name>
         <Contact>
            Contact:<UserName>{props.emile}</UserName>
         </Contact>
         <Logout>Log out</Logout>
      </User>
   )
}

export default UserCard

const User = styled.div`
   width: 372px;
   height: 285px;
   border: 1px solid #c4c4c4;
   border-radius: 16px;
   font-family: 'Inter';
   margin-top: 37px;
   @media (max-width: 375px) {
      width: 343px;
      height: 216px;
   }
`
const Logo = styled.div`
   width: 89px;
   height: 89px;
   background: #266bd3;
   margin-top: 38px;
   margin-left: 141px;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   font-style: normal;
   font-weight: 500;
   font-size: 38px;
   line-height: 46px;
   text-transform: uppercase;
   color: #ffffff;
   @media (max-width: 375px) {
      margin-top: 21px;
   }
`
const Name = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #646464;
   margin-top: 30px;
   margin-left: 54px;
`
const UserName = styled.b`
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   color: #363636;
   margin-left: 16px;
`
const Contact = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #646464;
   margin-left: 38px;
   margin-top: 15px;
`
const Logout = styled.a`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   cursor: pointer;
   font-size: 16px;
   line-height: 19px;
   color: #ff4b4b;
   position: relative;
   top: 15px;
   left: 38px;
   @media (max-width: 375px) {
      display: none;
   }
`
