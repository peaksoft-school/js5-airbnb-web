import { useState, useEffect } from 'react'
import { Avatar, Menu, MenuItem } from '@mui/material'
import { signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as BlackBars } from '../../../../assets/icons/BlackBars.svg'
import { ReactComponent as Dropdown } from '../../../../assets/icons/dropdownBlack.svg'
import { ReactComponent as Logo } from '../../../../assets/icons/LogoBlack.svg'
import SearchIconimage from '../../../../assets/icons/search.png'
import { getallFavoriteCards } from '../../../../store/slices/LikeAndBookmarkSlice'
import { LoginSliceAction } from '../../../../store/slices/LoginSlice'
import { LocalStorageFunction } from '../../../../utils/helpers/LocalStorageFunctions/LocalStorajeFunction'
import GlobalSearch from '../../../GlobalSearch'
import { Auth } from '../../../SignupFirebase'

const UserNavbar = () => {
   const login = useSelector((store) => store.login)
   const favorite = useSelector((store) => store.likeandbookmark)
   const [register, setRegister] = useState(false)
   const navigate = useNavigate()

   const [isOpen, setIsOpen] = useState(false)
   // eslint-disable-next-line no-unused-vars
   const [_, setSearchParams] = useSearchParams()
   const data = LocalStorageFunction({ type: 'getItem', key: 'login' })
   const dispatch = useDispatch()
   useEffect(() => {
      if (login.login?.name && data?.name) {
         setRegister(true)
         dispatch(getallFavoriteCards())
         return
      }
      setRegister(false)
   }, [login.login?.name, data?.name, favorite?.postBookmarkstatus])
   const handleToggle = () => {
      setIsOpen((prev) => !prev)
   }
   const handleClick = () => {
      setSearchParams({ userSignup: 'open' })
   }
   const click = () => {
      setSearchParams({ mobileSidebar: 'open' })
   }
   const [logout, setlogout] = useState(false)
   const [position, setposition] = useState(null)
   const clearlogin = () => {
      signOut(Auth)
      LocalStorageFunction({
         type: 'removeItem',
         key: 'login',
      })
      dispatch(LoginSliceAction.clearLogin())
      setRegister(false)
      navigate('/')
   }
   return (
      <div>
         <Nav>
            <NavbarContainer>
               <NavLogo to="/">
                  <StyledLogo />
               </NavLogo>
               <MobileIcon onClick={click}>
                  <BlackBars />
               </MobileIcon>
               <NavMenu>
                  {register ? null : (
                     <LeaveanAd onClick={handleClick}>Leave an ad</LeaveanAd>
                  )}
                  <WrapperLi isOpen={isOpen}>
                     <NavItemsWrap>
                        <NavItemCheckbox>
                           <Checkbox
                              colorborder="black"
                              width="25px"
                              height="25px"
                              label="search nearby"
                           />
                        </NavItemCheckbox>
                     </NavItemsWrap>
                     <Block>
                        <SearchIcon
                           onClick={(e) => {
                              e.stopPropagation()
                              handleToggle()
                           }}
                        >
                           <img src={SearchIconimage} alt="icon" />
                        </SearchIcon>
                        <GlobalSearch
                           width="414px"
                           placeholder="Search..."
                           mediawidth="220px"
                           handleToggle={(e) => {
                              e.stopPropagation()
                              setIsOpen(false)
                           }}
                        />
                     </Block>
                  </WrapperLi>
               </NavMenu>
               {register ? (
                  <WrapperFavorite>
                     <Link to="/main/addanounsement">
                        <Button width="196px" height="37px">
                           Submit an ad
                        </Button>
                     </Link>
                     <WrapperFavoriteBtn>
                        <Link to="/main/favorite">
                           FAVORITE ({favorite?.getallFavoriteCards?.size})
                        </Link>
                     </WrapperFavoriteBtn>
                  </WrapperFavorite>
               ) : null}
               <NavBtn>
                  {register ? (
                     <>
                        <WrapperBtnAvatar
                           onClick={(e) => {
                              setposition(e.currentTarget)
                              setlogout((p) => !p)
                           }}
                        >
                           <Avatar>
                              {login.login?.name?.split(' ')[0][0]}
                           </Avatar>
                           <Dropdown />
                        </WrapperBtnAvatar>
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
                                    setlogout(false)
                                    navigate('/main/profile')
                                 }}
                              >
                                 Profile
                              </MenuItem>
                              <MenuItem
                                 onClick={() => {
                                    clearlogin()
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
               </NavBtn>
            </NavbarContainer>
         </Nav>
      </div>
   )
}

export default UserNavbar

const WrapperFavoriteBtn = styled.span`
   & > :nth-child(1) {
      text-decoration: none;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
   }
`
const WrapperBtnAvatar = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   width: 60px;
   height: 50px;
   cursor: pointer;
   align-items: center;
`
const WrapperFavorite = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   width: 450px;
   flex-direction: row;
   align-content: center;
`
const LeaveanAd = styled.span`
   cursor: pointer;
   color: orange;
   @media screen and (max-width: 375px) {
      display: none;
   }
`
const DivBtn = styled.div`
   width: 196px;
   height: 37px;
   @media screen and (max-width: 375px) {
      width: 106px;
      height: 37px;
   }
`
const Block = styled.div`
   width: 414px;
   @media screen and (max-width: 375px) {
      width: 240px;
   }
`
const SearchIcon = styled.div`
   & > img {
      width: 22px;
   }
`
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
   width: 100%;
   margin: 0 auto;

   @media screen and (max-width: 375px) {
      transition: 0.8s all ease;
   }
`

const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80px;
   z-index: 1;
   width: 1240px;
   @media screen and (max-width: 375px) {
      width: 375px;
      height: 88px;
      padding-left: 10px;
   }
`

const NavLogo = styled(Link)`
   color: #fff;
   justify-self: flex-start;
   cursor: pointer;
   font-size: 1.5rem;
   display: flex;
   align-items: center;
   font-weight: bold;
   text-decoration: none;

   @media screen and (max-width: 375px) {
      margin: 0;
   }
`

const NavItemCheckbox = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 20px 20px;

   @media screen and (max-width: 375px) {
      width: 225px;
      margin-left: -100px;
   }
`

const NavItemsWrap = styled.div`
   @media screen and (max-width: 375px) {
      width: 200px;
   }
`

const StyledLogo = styled(Logo)`
   cursor: pointer;
   color: black;
   @media screen and (max-width: 375px) {
      width: 44px;
      height: 33px;
      margin: 0;
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

const NavMenu = styled.div`
   display: flex;
   align-items: center;
   list-style: none;
   justify-content: space-between;
   width: 910px;
   transition: 0.8s all ease;

   @media screen and (max-width: 375px) {
      width: 375px;
      transition: 0.8s all ease;
   }
`
const WrapperLi = styled.div`
   width: 612px;
   display: flex;
   flex-direction: row;
   align-content: center;
   align-items: center;
   justify-content: space-between;
   transition: 2s all ease;
   margin-left: 100px;
   & > :nth-child(2) {
      & > :nth-child(1) {
         display: none;
      }
   }
   @media screen and (max-width: 375px) {
      width: 280px;
      transition: 2s all ease;
      & > :nth-child(1) {
         transition: 2s all ease;
         display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
      }
      & > :nth-child(2) {
         transition: 2s all ease;
         & > :nth-child(1) {
            transition: 2s all ease;
            margin-top: 5px;
            width: 70px;
            display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
         }
         & > :nth-child(2) {
            transition: 2s all ease;
            display: ${({ isOpen }) => (!isOpen ? 'none' : 'flex')};
            width: 240px;
            height: 30px;
            margin-left: -80px;
            align-items: center;
         }
      }
   }
`
const NavBtn = styled.nav`
   display: flex;
   align-items: center;

   @media screen and (max-width: 375px) {
      display: none;
   }
`
