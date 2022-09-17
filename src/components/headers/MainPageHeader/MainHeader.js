import React, { useState, useEffect } from 'react'
import { Avatar, Menu, MenuItem } from '@mui/material'
import { signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as BlackBars } from '../../../assets/icons/BlackBars.svg'
import { ReactComponent as Dropdown } from '../../../assets/icons/dropdown.svg'
import { ReactComponent as Logo } from '../../../assets/icons/Logo.svg'
import { LoginSliceAction } from '../../../store/slices/LoginSlice'
import { LocalStorageFunction } from '../../../utils/helpers/LocalStorageFunction'
import { Auth } from '../../SignupFirebase'
import Button from '../../UI/Button'

const HeaderHome = () => {
   const store = useSelector((store) => store)
   const [register, setRegister] = useState(false)

   // eslint-disable-next-line no-unused-vars
   const [_, setSearchParams] = useSearchParams()
   const navigate = useNavigate()

   const user = LocalStorageFunction({ type: 'getItem', key: 'login' })
   useEffect(() => {
      if (store.login.login?.jwt && user?.jwt) {
         navigate('main')
         setRegister(true)
         return
      }
      setRegister(false)
   }, [store.login.login?.jwt, user?.jwt])
   const handleClick = () => {
      setSearchParams({ userSignup: 'open' })
   }
   const clickmobile = () => {
      setSearchParams({ mobileSidebar: 'open' })
   }
   const [logout, setlogout] = useState(false)
   const [position, setposition] = useState(null)
   const dispatch = useDispatch()
   const clearLogin = () => {
      signOut(Auth)
      LocalStorageFunction({
         type: 'removeItem',
         key: 'login',
      })
      setRegister(false)
      dispatch(LoginSliceAction.clearLogin())
      navigate('/')
   }
   return (
      <Header>
         <nav>
            <LogoHeader>
               <Logo />
            </LogoHeader>
            <MobileIcon onClick={clickmobile}>
               <BlackBars />
            </MobileIcon>
            <Ul>
               <li>
                  {register ? (
                     <Link to="/main/addanounsement">Submit an ad</Link>
                  ) : (
                     <LeaveanAd onClick={handleClick}>Leave an ad</LeaveanAd>
                  )}
               </li>
               <li>
                  {register ? (
                     <>
                        <WrapperAvatar
                           onClick={(e) => {
                              setposition(e.currentTarget)
                              setlogout((p) => !p)
                           }}
                        >
                           <Avatar>
                              {user.login.login?.name?.split(' ')[0][0]}
                           </Avatar>
                           <Dropdown />
                        </WrapperAvatar>
                        <Menu
                           open={logout}
                           onClose={() => {
                              setlogout(false)
                           }}
                           anchorEl={position}
                        >
                           <div>
                              <MenuItem
                                 onClick={() => {
                                    navigate('/main/profile')
                                 }}
                              >
                                 Profile
                              </MenuItem>
                              <MenuItem
                                 onClick={(e) => {
                                    e.stopPropagation()
                                    clearLogin()
                                 }}
                              >
                                 Log out
                              </MenuItem>
                           </div>
                        </Menu>
                     </>
                  ) : (
                     <DivBtn>
                        <Button
                           width="100%"
                           height="100%"
                           mediawidth="109px"
                           onClick={handleClick}
                        >
                           JOIN US
                        </Button>
                     </DivBtn>
                  )}
               </li>
            </Ul>
         </nav>
      </Header>
   )
}

export default React.memo(HeaderHome)

const WrapperAvatar = styled.div`
   cursor: pointer;
   display: flex;
   align-items: center;
   width: 70px;
   justify-content: space-between;
   height: 50px;
`
const LeaveanAd = styled.span`
   cursor: pointer;
   color: white;
`
const DivBtn = styled.div`
   width: 196px;
   height: 37px;
   @media screen and (max-width: 375px) {
      width: 106px;
      height: 37px;
   }
`

const MobileIcon = styled.div`
   display: none;

   @media screen and (max-width: 375px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #fff;
      right: -25px;
   }
`
// const BtnLink = styled.button`
//    background: none;
//    border: none;
//    font-size: 18px;
//    color: #fff;
// `
const LogoHeader = styled.div`
   width: 88px;
   height: 65px;
   @media (max-width: 376px) {
      width: 44px;
      height: 33px;
   }
`
const Header = styled.div`
   min-height: 10vh;
   width: 100%;
   background: transparent;
   & nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 24px;
      width: 1240px;
      margin: 0 auto;
      @media screen and (max-width: 376px) {
         padding: 30px 4%;
      }
   }
`

const Ul = styled.ul`
   display: flex;
   gap: 60px;
   margin: 0;
   padding: 0;
   list-style: none;
   & li {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      & a {
         color: #fff;
         text-decoration: none;
         font-size: 18px;

         @media screen and (max-width: 375px) {
            font-size: 16px;
         }
      }
   }

   @media screen and (max-width: 375px) {
      gap: 24px;
      display: none;
   }
`
