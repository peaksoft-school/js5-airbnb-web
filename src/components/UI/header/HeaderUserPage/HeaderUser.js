import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '../../../../assets/icons/Logo'
// import Button from './Button/Button'
// import Input from './Input/Input'
// import SearchInput from './SearchPanel/SearchInput'

const HeaderUser = () => {
   const [click, setClick] = useState(false)

   const handleClick = () => setClick((prev) => !prev)
   return (
      <div>
         <Nav>
            <NavbarContainer>
               <NavLogo>
                  <Logo width="88px" height="65px" fill="#1C2E20" />
               </NavLogo>
               <MobileIcon onClick={handleClick}>
                  {click ? <CloseIcon /> : <MenuIcon />}
               </MobileIcon>
               <NavLeaveAd>Leave an ad</NavLeaveAd>
               <NavMenu click={click}>
                  <NavItem>
                     {/* <Input
                        width="20px"
                        height="20px"
                        backgroundColor="#C4C4C4"
                        type="checkbox"
                     />
                     <label htmlFor="happy">Искать поблизости</label>
                  </NavItem>
                  <NavItem>
                     <SearchInput
                        width="414px"
                        height="37px"
                        border="1px solid #C4C4C4"
                        placeholder="Search"
                     />
                  </NavItem>
                  <NavItem>
                     <Button width="196px" height="37px">
                        JOIN US
                     </Button> */}
                  </NavItem>
               </NavMenu>
            </NavbarContainer>
         </Nav>
      </div>
   )
}

export default HeaderUser

export const Nav = styled.nav`
   background: #fff;
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

export const NavbarContainer = styled(Container)`
   display: flex;
   justify-content: space-between;
   height: 80px;

   ${Container}
`

export const NavLogo = styled.a`
   color: #fff;
   justify-self: flex-start;
   cursor: pointer;
   display: flex;
   align-items: center;
`

export const NavLeaveAd = styled.a`
   color: #ffbe58;
   justify-self: flex-start;
   cursor: pointer;
   text-decoration: none;
   font-size: 18px;
   display: flex;
   align-items: center;
   margin-right: 160px;

   @media screen and (max-width: 414px) {
      display: none;
   }
`

export const MobileIcon = styled.div`
   display: none;

   @media screen and (max-width: 414px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #000;
   }
`

export const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;
   gap: 30px;

   @media screen and (max-width: 414px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      margin-top: 70px;
      padding-top: 90px;
      right: ${({ click }) => (click ? 0 : '-100%')};
      opacity: 0.9;
      transition: all 0.5s ease;
      background: #fff;
   }
`

export const NavItem = styled.li`
   display: inline-flex;
   align-items: center;
   @media screen and (max-width: 414px) {
   }
`

export const NavLinks = styled.a`
   color: #fff;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0.5rem 1rem;
   height: 100%;
   cursor: pointer;

   @media screen and (max-width: 414px) {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;

      &:hover {
         color: #4b59f7;
         transition: all 0.3s ease;
      }
   }
`
