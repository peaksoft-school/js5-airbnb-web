import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ApiFetch from '../../api/ApiFetch'
import AdminApplicationsInnerPage from './AdminApplicationsInnerPage'

const InnerAdminAnouncement = () => {
   const [data, setdata] = useState([])
   const loc = useLocation()
   const getid = loc.pathname.split('/')[2]
   const get = async () => {
      const getdata = await ApiFetch({
         url: `api/admin/find/announcement/${getid}`,
      })
      setdata([getdata])
   }
   useEffect(() => {
      get()
   }, [])
   return (
      <div>
         {data?.map((i) => {
            return <AdminApplicationsInnerPage data={i} />
         })}
      </div>
   )
}
export default InnerAdminAnouncement
