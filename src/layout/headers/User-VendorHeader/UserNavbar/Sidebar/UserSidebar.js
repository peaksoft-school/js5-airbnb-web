import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Instagram } from '../../../../../assets/icons/Instagram.svg'
import { ReactComponent as LogoMobile } from '../../../../../assets/icons/LogoMobile.svg'
import { ReactComponent as Telegram } from '../../../../../assets/icons/Telegram.svg'
import { ReactComponent as Times } from '../../../../../assets/icons/times.svg'
import { ReactComponent as WhatsApp } from '../../../../../assets/icons/WhatsApp.svg'
import Button from '../../../../../components/UI/Button'

const AdminSidebar = ({ isOpen, mobileToggle, register }) => {
   return (
      <SidebarContainer isOpen={isOpen} onClick={mobileToggle}>
         <Icon onClick={mobileToggle}>
            <Times />
         </Icon>
         <SidebarWrapper>
            <SidebarLogoWrap>
               <SttyledLogoMobile />
            </SidebarLogoWrap>
            {register ? (
               <SidebarMenu>
                  <SidebarLink to="profile">Profile</SidebarLink>
                  <SidebarLink to="leaveanad">
                     <Button width="283px !important" height="37px">
                        Sunmit and
                     </Button>
                  </SidebarLink>
               </SidebarMenu>
            ) : (
               <SidebarMenu>
                  <SidebarLink to="about">Leave an ad</SidebarLink>
                  <SidebarLink to="register">
                     <Button width="283px !important" height="37px">
                        Join Us
                     </Button>
                  </SidebarLink>
               </SidebarMenu>
            )}
            <SideBtnWrap>
               <SidebarSocialLinks to="/">
                  <Instagram />
               </SidebarSocialLinks>
               <SidebarSocialLinks to="/">
                  <Telegram />
               </SidebarSocialLinks>
               <SidebarSocialLinks to="/">
                  <WhatsApp />
               </SidebarSocialLinks>
            </SideBtnWrap>
         </SidebarWrapper>
      </SidebarContainer>
   )
}

export default AdminSidebar

const SidebarContainer = styled.aside`
   position: fixed;
   z-index: 999;
   width: 100%;
   height: 100%;
   background: #f7f7f7fa;
   display: grid;
   align-items: center;
   top: 0;
   transition: 0.3s ease-in-out;
   opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
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

   @media screen and (max-width: 480px) {
      grid-template-rows: repeat(4, 80px);
   }
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
   padding: 9px;
   background: #c4c4c466;
   border-radius: 2px;
   margin: 0 16px;
   cursor: pointer;
`
