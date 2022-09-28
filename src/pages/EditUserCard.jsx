import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import EditForm from '../components/EditForm'
import { getSingleUserAnnouncement } from '../store/slices/editAnnountcementSlice'

const EditUserCard = () => {
   const location = useLocation()
   const id = location.pathname.split('=')[1]
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getSingleUserAnnouncement(id))
   }, [])
   return <EditForm />
}
export default EditUserCard
