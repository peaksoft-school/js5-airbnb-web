import React, { useState } from 'react'
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Bars } from '../../../../assets/icons/bars.svg'
import { ReactComponent as Dropdown } from '../../../../assets/icons/dropdown.svg'
import { ReactComponent as Logo } from '../../../../assets/icons/Logo.svg'

const UserNavbar = ({ mobileToggle }) => {
   const [isOpen, setIsOpen] = useState(false)

   const handleToggle = () => {
      setIsOpen((prev) => !prev)
   }

   return (
      <div>
         <Nav>
            <NavbarContainer>
               <NavLogo to="/">
                  <StyledLogo />
               </NavLogo>
               <MobileIcon onClick={mobileToggle}>
                  <Bars />
               </MobileIcon>
               <NavMenu>
                  <NavItem>
                     <NavLinks to="about">Application</NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks to="discover">Users</NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks to="services">All housing</NavLinks>
                  </NavItem>
               </NavMenu>
               <NavBtn>
                  <NavBtnLink onClick={handleToggle}>
                     Administrator
                     <StyledDropdown />
                  </NavBtnLink>
                  {isOpen && (
                     <NavDropdownLog>
                        <DropdownOptions>Log out</DropdownOptions>
                     </NavDropdownLog>
                  )}
               </NavBtn>
            </NavbarContainer>
         </Nav>
      </div>
   )
}

export default UserNavbar

const Nav = styled.nav`
   background: #0b0b0b;
   height: 80px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   position: sticky;
   top: 0;
   z-index: 10;

   @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
   }
`

const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80px;
   z-index: 1;
   width: 100%;
   padding: 0 24px;
`

const NavLogo = styled(LinkR)`
   color: #fff;
   justify-self: flex-start;
   cursor: pointer;
   font-size: 1.5rem;
   display: flex;
   align-items: center;
   margin-left: 24px;
   font-weight: bold;
   text-decoration: none;

   @media screen and (max-width: 480px) {
      margin: 0;
   }
`

const StyledLogo = styled(Logo)`
   cursor: pointer;

   @media screen and (max-width: 480px) {
      width: 60px;
      height: 45px;
      margin: 0;
   }
`

const MobileIcon = styled.div`
   display: none;

   @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #fff;
   }
   @media screen and (max-width: 480px) {
      right: -25px;
   }
`

const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;
   margin-right: 750px;

   @media screen and (max-width: 768px) {
      display: none;
   }
`
const NavItem = styled.li`
   height: 80px;
`

const StyledDropdown = styled(Dropdown)`
   margin-left: 10px;
`

const NavLinks = styled.a`
   color: #fff;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 30px 30px;
   font-size: 18px;
   height: 100%;
   cursor: pointer;

   &:hover {
      color: #ff4b4b;
   }

   &:active {
      border-bottom: 3px solid #01bf71;
   }
`

const NavBtn = styled.nav`
   display: flex;
   flex-direction: column;

   @media screen and (max-width: 768px) {
      display: none;
   }
`

const NavBtnLink = styled.div`
   color: #fff;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 23px 38px;
   font-size: 18px;
   height: 100%;
   cursor: pointer;
`

const NavDropdownLog = styled.div`
   width: 160px;
   height: 57px;
   border: 1px solid #c4c4c4;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   background: #fff;
`

const DropdownOptions = styled.span`
   height: 40px;
   font-weight: 400;
   font-size: 16px;
   color: #5d5d5d;
   padding: 8px 20px;
   cursor: pointer;
   &:hover {
      background: #f3f3f3;
   }
`
