import styled from 'styled-components'
import instagram from '../../../assets/icons/instagram.png'
import logo from '../../../assets/icons/logo.png'
import telegram from '../../../assets/icons/telegram.png'
import whatsApp from '../../../assets/icons/whatsApp.png'

const sizes = {
   mobile: '375px',
}

export const devices = {
   mobile: `(max-width: ${sizes.mobile})`,
}

const Footer = () => {
   return (
      <Cont>
         <InnerCont>
            <Links>
               <a href="/">Regions</a>
               <a href="/">leave an ad</a>
            </Links>
            <img src={logo} alt="logo" />
            <Socials>
               <a href="https://www.instagram.com/airbnb/">
                  <img src={instagram} alt="inst" />
               </a>
               <a href="https://web.telegram.org/z/#-770925891">
                  <img src={telegram} alt="teleg" />
               </a>
               <a href="/">
                  <img src={whatsApp} alt="whats" />
               </a>
            </Socials>
         </InnerCont>
         <div>
            <p>© Copyright PeakSoft. All Rights Reserved</p>
         </div>
      </Cont>
   )
}

export default Footer

const Cont = styled.div`
   /* width: 100%; */
   height: 222px;
   background-color: #1c2e20;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 0px 100px 20px;

   & p {
      text-align: center;
      color: #859589;
      margin-bottom: 20px;
      font-size: 14px;
   }

   @media ${devices.mobile} {
      & p {
      }
   }
`

const InnerCont = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 60px 0;
`
const Links = styled.div`
   & a {
      text-decoration: none;
      margin-left: 40px;
      font-size: 18px;
      color: white;
      &:last-child {
         color: #ffbe58;
      }
   }
`

const Socials = styled.div`
   & a {
      width: 40px;
      height: 40px;
      padding: 10px 10px 7px;
      background: rgba(255, 255, 255, 0.12);
      border-radius: 2px;
      margin: 16px;
   }

   & img {
      /* margin: 0; */
   }
`
