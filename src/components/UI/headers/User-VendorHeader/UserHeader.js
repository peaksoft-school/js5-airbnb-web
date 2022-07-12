import { useState } from 'react'
import UserSidebar from './UserNavbar/Sidebar/UserSidebar'
import UserNavbar from './UserNavbar/UserNavbar'

const UserHeader = () => {
   const [register, setRegister] = useState(false)
   const [isOpen, setIsOpen] = useState(false)

   const mobileToggle = () => {
      setIsOpen(!isOpen)
   }
   return (
      <>
         <UserSidebar
            isOpen={isOpen}
            mobileToggle={mobileToggle}
            register={register}
         />
         <UserNavbar
            mobileToggle={mobileToggle}
            register={register}
            setRegister={setRegister}
         />
      </>
   )
}

export default UserHeader
