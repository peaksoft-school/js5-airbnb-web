import { useState } from 'react'
import AdminNavbar from './AdminNavbar/AdminNavbar'
import AdminSidebar from './AdminNavbar/Sidebar/AdminSidebar'

const AdminHeader = () => {
   const [isOpen, setIsOpen] = useState(false)

   const mobileToggle = () => {
      setIsOpen(!isOpen)
   }
   return (
      <>
         <AdminSidebar isOpen={isOpen} mobileToggle={mobileToggle} />
         <AdminNavbar mobileToggle={mobileToggle} />
      </>
   )
}

export default AdminHeader
