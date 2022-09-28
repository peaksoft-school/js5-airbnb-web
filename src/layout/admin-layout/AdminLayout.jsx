import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import AdminHeader from '../../components/headers/AdminHeader/AdminHeader'

const AdminLayout = () => {
   return (
      <>
         <AdminHeader />
         <Section>
            <Outlet />
         </Section>
      </>
   )
}
export default AdminLayout
const Section = styled.div`
   min-height: 60vh;
`
