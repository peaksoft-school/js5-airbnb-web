import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg'
import { ReactComponent as Telegram } from '../../assets/icons/Vector (1).svg'
import { ReactComponent as Whatsapp } from '../../assets/icons/Vector (2).svg'
import { ReactComponent as Instagram } from '../../assets/icons/Vector.svg'

const Footer = () => {
   const login = useSelector((store) => store)
   const [, setsearchParams] = useSearchParams()
   const openSignupModal = () => {
      setsearchParams({ userSignup: 'open' })
   }
   return (
      <Cont>
         <InnerCont>
            <Links>
               <Link to="/main">Regions</Link>
               {login.login.login.jwt ? (
                  <Link to="/main/addanounsement">Submit an ad</Link>
               ) : (
                  <h3 onClick={openSignupModal}>leave an ad</h3> //
               )}
            </Links>
            <DivLogo>
               <Logo />
            </DivLogo>
            <Socials>
               <a href="https://www.instagram.com/airbnb/">
                  <Instagram />
               </a>
               <a href="https://web.telegram.org/z/#-770925891">
                  <Telegram />
               </a>
               <a href="https://www.whatsapp.com">
                  <Whatsapp />
               </a>
            </Socials>
         </InnerCont>
         <Divtext>
            <p>© Copyright PeakSoft. All Rights Reserved</p>
         </Divtext>
      </Cont>
   )
}

export default React.memo(Footer)

const Divtext = styled.div`
   margin-top: 60px;
   margin-bottom: 20px;
`
const DivLogo = styled.div`
   width: 88px;
   height: 65px;
`
const Cont = styled.div`
   height: 222px;
   background-color: #1c2e20;
   padding: 60px 100px 20px;
   & p {
      text-align: center;
      color: #859589;
      margin-bottom: 20px;
      font-size: 14px;
   }
   @media screen and (max-width: 375px) {
      width: 375px;
      height: 299px;
      padding: 60px 16px 20px;
   }
`

const InnerCont = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 1fr 1fr 1fr;
   width: 1240px;
   margin: 0 auto;
   & > :nth-child(1) {
      grid-column: 1 / 1;
      grid-row: 2 / 2;
      margin-left: -35px;
   }
   & > :nth-child(2) {
      grid-column: 2 / 2;
      grid-row: 1 / 4;
      margin-left: 180px;
   }
   & > :nth-child(3) {
      grid-column: 3 / 3;
      grid-row: 1 / 4;
      margin-left: 285px;
   }
   @media screen and (max-width: 375px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      width: 350px;
      & > :nth-child(1) {
         grid-column: 2 / 2;
         grid-row: 1 / 1;
         margin-left: -20px;
      }
      & > :nth-child(2) {
         grid-column: 1 / 1;
         margin-left: 0px;
         grid-row: 1 / 2;
      }
      & > :nth-child(3) {
         grid-column: 2 / 2;
         margin-left: 55px;
         margin-top: 20px;
         grid-row: 2 / 2;
      }
   }
`
const Links = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 250px;
   & > :nth-child(2) {
      /* margin-left: 50px; */
      font-size: 18px;
      color: orange;
      cursor: pointer;
   }
   & a {
      text-decoration: none;
      margin-left: 35px;
      font-size: 18px;
      color: white;
      @media screen and (max-width: 375px) {
         margin-left: -30px;
      }
   }
   @media screen and (max-width: 375px) {
      display: flex;
      flex-direction: column;
      & > :nth-child(2) {
         margin-left: 0px;
      }
   }
`

const Socials = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 152px;
   & > a {
      width: 40px;
      height: 40px;
      padding: 10px;
      background: rgba(255, 255, 255, 0.12);
      border-radius: 2px;
   }
`
