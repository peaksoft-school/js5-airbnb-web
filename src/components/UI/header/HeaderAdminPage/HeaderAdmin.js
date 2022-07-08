import React, { useState } from 'react'
import styled from 'styled-components'
// import Chevron from "../../../assets/icons/Chevron";
import Logo from '../../../../assets/icons/Logo'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'

const HeaderAdmin = () => {
   const [click, setClick] = useState(false)

   const handleClick = () => setClick((prev) => !prev)

   return (
      <Nav>
         <NavbarContainer>
            <NavLogo>
               <Logo width="72px" height="54px" fill="white" />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
               {click ? <CloseIcon /> : <MenuIcon />}
            </MobileIcon>
            <NavMenu click={click}>
               <NavItem>
                  <NavLinks href="">Application</NavLinks>
               </NavItem>
               <NavItem>
                  <NavLinks href="">Users</NavLinks>
               </NavItem>
               <NavItem>
                  <NavLinks href="">All housing</NavLinks>
               </NavItem>
            </NavMenu>
            <AdminDiv click={click}>
               <a href="/">Administrator</a>
               {/* <Chevron height="7px" width="13px" fill="white" /> */}
            </AdminDiv>
         </NavbarContainer>
      </Nav>
   )
}

export default HeaderAdmin

const Nav = styled.nav`
   background: #0b0b0b;
   height: 80px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.2rem;
   position: sticky;
   top: 0;
   z-index: 999;
`

const Container = styled.div`
   z-index: 1;
   width: 100%;
   padding: 10px 7%;

   @media screen and (max-width: 414px) {
      padding-right: 30px;
      padding-left: 30px;
   }
`

const NavbarContainer = styled(Container)`
   display: flex;
   justify-content: space-between;
   height: 80px;

   ${Container}
`

const NavLogo = styled.a`
   color: #fff;
   justify-self: flex-start;
   cursor: pointer;
   display: flex;
   align-items: center;
`

const MobileIcon = styled.div`
   display: none;

   @media screen and (max-width: 414px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #fff;
   }
`

const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;
   margin-right: 650px;

   @media screen and (max-width: 414px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      padding-top: 90px;
      margin-top: 70px;
      right: ${({ click }) => (click ? 0 : '-100%')};
      opacity: 0.9;
      transition: all 0.5s ease;
      background: #fff;
      margin-right: 0;
   }
`

const NavItem = styled.li`
   display: inline-flex;
   align-items: center;
   @media screen and (max-width: 414px) {
   }
`

const NavLinks = styled.a`
   color: #fff;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0.5rem 1rem;
   height: 100%;
   cursor: pointer;

   &:hover {
      color: #ff4b4b;
      transition: all 0.3s ease;
   }

   @media screen and (max-width: 414px) {
      text-align: center;
      cursor: pointer;
      width: 100%;
      display: table;
      color: #363636;
   }
`

const AdminDiv = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 10px;
   & svg {
      cursor: pointer;
   }
   & a {
      color: #fff;
      text-decoration: none;
      font-size: 18px;
      font-weight: 400;

      @media screen and (max-width: 414px) {
         color: #363636;
      }
      &:hover {
         color: #ff4b4b;
      }
   }

   @media screen and (max-width: 414px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      margin-top: 80px;
      right: ${({ click }) => (click ? 0 : '-100%')};
      transition: all 0.5s ease;
   }
`
