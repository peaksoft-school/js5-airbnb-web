import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Link as LinkR, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Bars } from '../../../../assets/icons/bars.svg'
import { ReactComponent as Dropdown } from '../../../../assets/icons/dropdown.svg'
import { ReactComponent as Logo } from '../../../../assets/icons/Logo.svg'
import { LoginSliceAction } from '../../../../store/slices/LoginSlice'
import { LocalStorageFunction } from '../../../../utils/helpers/LocalStorageFunction'

const AdminNavbar = ({ mobileToggle }) => {
   const [isOpen, setIsOpen] = useState(false)

   const handleToggle = () => {
      setIsOpen((prev) => !prev)
   }
   const navigate = useNavigate()
   const dispatch = useDispatch()

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
               <StyledNavMenu>
                  <NavMenu>
                     <NavItem>
                        <NavLinks
                           onClick={() => {
                              navigate('/application')
                           }}
                        >
                           Application
                        </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks
                           onClick={() => {
                              navigate('/users')
                           }}
                        >
                           Users
                        </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks
                           onClick={() => {
                              navigate('/all-housing')
                           }}
                        >
                           All housing
                        </NavLinks>
                     </NavItem>
                  </NavMenu>
                  <NavBtn>
                     <NavBtnLink onClick={handleToggle}>
                        Administrator
                        <StyledDropdown />
                     </NavBtnLink>
                     {isOpen && (
                        <NavDropdownLog>
                           <Link to="/">
                              <DropdownOptions
                                 onClick={() => {
                                    LocalStorageFunction({
                                       type: 'removeItem',
                                       key: 'login',
                                    })
                                    dispatch(LoginSliceAction.clearLogin())
                                 }}
                              >
                                 Log out
                              </DropdownOptions>
                           </Link>
                        </NavDropdownLog>
                     )}
                  </NavBtn>
               </StyledNavMenu>
            </NavbarContainer>
         </Nav>
      </div>
   )
}

export default AdminNavbar

const StyledNavMenu = styled.div`
   display: flex;
   justify-content: space-between;
   width: 1050px;
`

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

const NavLinks = styled.span`
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
   width: 180px;
   height: 59px;
   box-sizing: border-box;
   border: 1px solid #c4c4c4;
   display: flex;
   flex-direction: column;
   justify-content: center;
   background: #fff;
   position: absolute;
   top: 60px;
`

const DropdownOptions = styled.span`
   height: 27px;
   font-weight: 400;
   font-size: 16px;
   display: flex;
   align-items: center;
   text-decoration: none;
   color: #5d5d5d;
   padding-left: 20px;
   cursor: pointer;
   &:hover {
      background: #f3f3f3;
   }
`
