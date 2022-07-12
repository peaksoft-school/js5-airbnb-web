import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import styled from 'styled-components'
import { ReactComponent as Dropdown } from '../../../assets/icons/dropdown.svg'
import { ReactComponent as Logo } from '../../../assets/icons/Logo.svg'
import Button from '../../../components/UI/Button'

const HeaderHome = () => {
   const [register, setRegister] = useState(false)

   const handleClick = () => {
      setRegister((prev) => !prev)
   }

   return (
      <Header>
         <nav>
            <a to="/">
               <Logo width="88px" height="65px" />
            </a>
            <Ul>
               <li>
                  <a to="tosignup">Leave an ad</a>
               </li>
               <li>
                  {register ? (
                     <>
                        <Avatar />
                        <Dropdown />
                        <ul>
                           <li>
                              <a to="logout">Log out</a>
                           </li>
                        </ul>
                     </>
                  ) : (
                     <Button width="196px" height="37px" onClick={handleClick}>
                        JOIN US
                     </Button>
                  )}
               </li>
            </Ul>
         </nav>
      </Header>
   )
}

export default HeaderHome

const Header = styled.div`
   min-height: 10vh;
   width: 100%;
   background: transparent;
   & nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px 7%;

      @media (max-width: 414px) {
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

         @media (max-width: 414px) {
            font-size: 16px;
         }
      }
   }

   @media (max-width: 414px) {
      gap: 24px;
   }
`
