import { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { Link as LinkR, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Instagram } from '../../../../../assets/icons/Instagram.svg'
import { ReactComponent as LogoMobile } from '../../../../../assets/icons/LogoMobile.svg'
import { ReactComponent as Telegram } from '../../../../../assets/icons/Telegram.svg'
import { ReactComponent as Times } from '../../../../../assets/icons/times.svg'
import { ReactComponent as WhatsApp } from '../../../../../assets/icons/WhatsApp.svg'
import { LocalStorageFunction } from '../../../../../utils/helpers/LocalStorageFunction'
import { Auth } from '../../../../SignupFirebase'
import Button from '../../../../UI/Button'

const UserSidebar = ({ isOpen, mobileToggle }) => {
   // eslint-disable-next-line no-unused-vars
   const [_, setSearchParams] = useSearchParams()
   const user = useSelector((store) => store.login.login.role)
   const [register, setRegister] = useState(false)
   const login = LocalStorageFunction({ type: 'getItem', key: 'login' })
   useEffect(() => {
      if (login?.role && user) {
         setRegister(true)
         return
      }
      setRegister(false)
   }, [user, login?.role])
   const handleClick = () => {
      setSearchParams({ userSignup: 'open' })
   }
   return (
      <SidebarContainer isOpen={isOpen}>
         <Icon onClick={mobileToggle}>
            <Times />
         </Icon>
         <SidebarWrapper>
            <SidebarLogoWrap>
               <SttyledLogoMobile />
            </SidebarLogoWrap>
            {register ? (
               <SidebarMenu>
                  <SidebarLink to="/main/profile">Profile</SidebarLink>
                  <SidebarLink to="/main">
                     <Button
                        onClick={() => {
                           signOut(Auth)
                           LocalStorageFunction({
                              type: 'removeItem',
                              key: 'login',
                           })
                        }}
                        width="283px"
                        height="37px"
                     >
                        Log out
                     </Button>
                  </SidebarLink>
                  <SidebarLink to="/main/addanounsement">
                     <Button width="283px" height="37px">
                        Leave an ad
                     </Button>
                  </SidebarLink>
               </SidebarMenu>
            ) : (
               <SidebarMenu>
                  {register ? (
                     <SidebarLink to="/main/addanounsement">
                        Leave an ad
                     </SidebarLink>
                  ) : (
                     <WrapperBtn>
                        <LeaveanAd onClick={handleClick}>Leave an ad</LeaveanAd>
                     </WrapperBtn>
                  )}
                  <WrapperBtn>
                     <Button width="283px" height="37px" onClick={handleClick}>
                        Join Us
                     </Button>
                  </WrapperBtn>
               </SidebarMenu>
            )}
            <SideBtnWrap>
               <SidebarSocialLinks href="https://www.instagram.com/airbnb/">
                  <Instagram />
               </SidebarSocialLinks>
               <SidebarSocialLinks href="https://web.telegram.org/z/#-770925891">
                  <Telegram />
               </SidebarSocialLinks>
               <SidebarSocialLinks href="https://www.whatsapp.com">
                  <WhatsApp />
               </SidebarSocialLinks>
            </SideBtnWrap>
         </SidebarWrapper>
      </SidebarContainer>
   )
}

export default UserSidebar

const LeaveanAd = styled.span`
   cursor: pointer;
   color: orange;
`
const SidebarContainer = styled.aside`
   position: absolute;
   z-index: 999;
   opacity: 1;
   width: 315px;
   height: 100%;
   background: #f7f7f7;
   display: grid;
   align-items: center;
   top: 0;
   transition: 0.3s ease-in-out;
   right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

   @media screen and (max-width: 480px) {
   }
`

const SidebarLogoWrap = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 20px;
   margin-bottom: 76px;
`

const SttyledLogoMobile = styled(LogoMobile)`
   cursor: pointer;
`

const Icon = styled.div`
   position: absolute;
   top: 1.2rem;
   right: 1.5rem;
   background: transparent;
   font-size: 2rem;
   cursor: pointer;
   outline: none;
`

const SidebarWrapper = styled.div`
   color: #fff;
`

const SidebarMenu = styled.ul`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(6, 80px);
   text-align: center;
   & > :nth-child(2) {
   }
   @media screen and (max-width: 480px) {
      grid-template-rows: repeat(4, 80px);
   }
`
const WrapperBtn = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 18px;
   text-decoration: none;
   list-style: none;
   transition: 0.2s ease;
   text-decoration: none;
   color: #dd8a08;
   cursor: pointer;
`
const SidebarLink = styled(LinkR)`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 18px;
   text-decoration: none;
   list-style: none;
   transition: 0.2s ease;
   text-decoration: none;
   color: #dd8a08;
   cursor: pointer;
`

const SideBtnWrap = styled.div`
   display: flex;
   justify-content: center;
`

const SidebarSocialLinks = styled.a`
   width: 48px;
   height: 48px;
   padding: 11px;
   background: #c4c4c466;
   border-radius: 2px;
   margin: 0 16px;
   cursor: pointer;
`
