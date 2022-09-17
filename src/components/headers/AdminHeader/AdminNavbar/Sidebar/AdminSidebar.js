import { useDispatch } from 'react-redux'
import { Link as LinkR, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as LogoMobile } from '../../../../../assets/icons/LogoMobile.svg'
import { ReactComponent as Times } from '../../../../../assets/icons/times.svg'
import { LoginSliceAction } from '../../../../../store/slices/LoginSlice'
import { LocalStorageFunction } from '../../../../../utils/helpers/LocalStorageFunction'

const AdminSidebar = ({ isOpen, mobileToggle }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   return (
      <SidebarContainer isOpen={isOpen} onClick={mobileToggle}>
         <Icon onClick={mobileToggle}>
            <Times />
         </Icon>
         <SidebarWrapper>
            <SidebarLogoWrap>
               <SttyledLogoMobile />
            </SidebarLogoWrap>
            <SidebarMenu>
               <SidebarLink
                  onClick={() => {
                     navigate('/application')
                  }}
               >
                  Application
               </SidebarLink>
               <SidebarLink
                  onClick={() => {
                     navigate('/users')
                  }}
               >
                  Users
               </SidebarLink>
               <SidebarLink
                  onClick={() => {
                     navigate('/all-housing')
                  }}
               >
                  All housing
               </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
               <SidebarRoute
                  to="/"
                  onClick={() => {
                     LocalStorageFunction({ type: 'removeItem', key: 'login' })
                     dispatch(LoginSliceAction.clearLogin())
                  }}
               >
                  Log out
               </SidebarRoute>
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
      grid-template-rows: repeat(4, 70px);
   }
`

const SidebarLink = styled.span`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 18px;
   text-decoration: none;
   list-style: none;
   transition: 0.2s ease;
   text-decoration: none;
   color: #363636;
   cursor: pointer;

   &:hover {
      color: #ff4b4b;
      transition: 0.2s ease-in-out;
   }
`

const SideBtnWrap = styled.div`
   display: flex;
   justify-content: center;
`

const SidebarRoute = styled(LinkR)`
   white-space: nowrap;
   color: #010606;
   font-size: 18px;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;
`
