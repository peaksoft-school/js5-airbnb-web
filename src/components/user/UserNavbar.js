import { useState } from 'react'
import { Avatar } from '@mui/material'
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as BlackBars } from '../../assets/icons/BlackBars.svg'
import { ReactComponent as DropdownBlack } from '../../assets/icons/dropdownBlack.svg'
import { ReactComponent as Logo } from '../../assets/icons/LogoBlack.svg'
import Button from '../UI/Button'
import Input from '../UI/Input'
import SearchInput from '../UI/SearchInput'

const AdminNavbar = ({ mobileToggle, register }) => {
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
                  <BlackBars />
               </MobileIcon>
               <NavMenu>
                  <NavItem>
                     {!register && <NavLinks to="about">Leave an ad</NavLinks>}
                  </NavItem>
                  <NavItem>
                     <NavItemsWrap isOpen={isOpen}>
                        {!register && (
                           <NavItemCheckbox>
                              <Input
                                 type="checkbox"
                                 width="20px"
                                 height="20px"
                              />
                              <NavItemLabel>Искать поблизости</NavItemLabel>
                           </NavItemCheckbox>
                        )}
                     </NavItemsWrap>
                  </NavItem>
                  {register ? (
                     <NavRegisteredSearchItem>
                        <SearchInput
                           isOpen={isOpen}
                           handleToggle={handleToggle}
                           placeholder="Search..."
                        />
                     </NavRegisteredSearchItem>
                  ) : (
                     <NavItem>
                        <SearchInput
                           isOpen={isOpen}
                           handleToggle={handleToggle}
                           placeholder="Search..."
                        />
                     </NavItem>
                  )}
               </NavMenu>
               <NavBtn>
                  {register ? (
                     <>
                        <NavBtnLink to="home">
                           <Button width="196px" height="37px">
                              Submit an ad
                           </Button>
                        </NavBtnLink>
                        <NavBtnProfile>
                           <Avatar />
                           <StyledDropdown />
                        </NavBtnProfile>
                     </>
                  ) : (
                     <NavBtnLink to="home">
                        <Button width="196px" height="37px">
                           Join us
                        </Button>
                     </NavBtnLink>
                  )}
               </NavBtn>
            </NavbarContainer>
         </Nav>
      </div>
   )
}

export default AdminNavbar

const Nav = styled.nav`
   background: #ffffff;
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
   margin-left: 100px;
   margin-right: 100px;

   @media screen and (max-width: 480px) {
      margin-left: 25px;
      margin-right: 75px;
   }
`

const NavLogo = styled(LinkR)`
   color: #fff;
   justify-self: flex-start;
   cursor: pointer;
   font-size: 1.5rem;
   display: flex;
   align-items: center;
   font-weight: bold;
   text-decoration: none;

   @media screen and (max-width: 480px) {
      margin: 0;
   }
`

const NavItemLabel = styled.label`
   margin-left: 10px;
   white-space: nowrap;
`

const NavItemCheckbox = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 20px 20px;

   @media screen and (max-width: 480px) {
   }
`

const NavItemsWrap = styled.div`
   display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
`

const StyledLogo = styled(Logo)`
   cursor: pointer;
   color: black;

   @media screen and (max-width: 480px) {
      width: 44px;
      height: 33px;
      margin: 0;
   }
`

const NavBtnProfile = styled.div`
   display: flex;
   align-items: center;
`

const StyledDropdown = styled(DropdownBlack)`
   margin-left: 10px;
   color: #c4c4c4;
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
   /* 
  @media screen and (max-width: 768px) {
    display: none;
  } */
`
const NavItem = styled.li`
   height: 80px;
`
const NavLinks = styled.a`
   color: #ffbe58;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 30px 30px;
   font-size: 18px;
   height: 100%;
   cursor: pointer;
   white-space: nowrap;
   margin-right: 150px;

   @media screen and (max-width: 480px) {
      display: none;
   }
`

const NavBtn = styled.nav`
   display: flex;
   align-items: center;

   @media screen and (max-width: 768px) {
      display: none;
   }
`

const NavBtnLink = styled(LinkR)`
   color: #fff;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 30px 30px;
   font-size: 18px;
   height: 100%;
   cursor: pointer;
`

const NavRegisteredSearchItem = styled.li`
   height: 80px;
   margin-left: 450px;
`
