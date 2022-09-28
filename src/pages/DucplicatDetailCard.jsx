import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ApiFetch from '../api/ApiFetch'
import ApartmentHouseInnerPageFeedback from './ApartmentHouseInnerPageFeedback'

const DucplicatDetailCard = () => {
   const loc = useLocation()
   const pathname = loc.pathname.split('/')[2].slice(9)

   console.log(pathname)
   const [carddata, setcarddata] = useState([])
   const card = async (id) => {
      const data = await ApiFetch({
         url: `api/announcements/find/${id}`,
      })
      setcarddata([data])
   }
   console.log(carddata)
   useEffect(() => {
      card(pathname)
   }, [pathname])
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   return carddata?.map((i) => (
      <ApartmentHouseInnerPageFeedback data={i} key={i.id} />
   ))
}
export default DucplicatDetailCard
