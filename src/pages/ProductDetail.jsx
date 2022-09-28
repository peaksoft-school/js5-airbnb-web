import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import UserAnnouncementInnerPage from '../components/UserAnnouncementInnerPage'
import { getCardById } from '../store/slices/LikeAndBookmarkSlice'
import ApartmentHouseInnerPageFeedback from './ApartmentHouseInnerPageFeedback'

const ProductDetail = () => {
   const user = useSelector((store) => store.login.login.userId)
   const store = useSelector((store) => store.likeandbookmark?.getcard)
   console.log(store, 'user', user, 'store')
   const dispatch = useDispatch()
   const loc = useLocation()
   const id = loc.pathname.split('/')[3]
   useEffect(() => {
      dispatch(getCardById(id))
      window.scrollTo(0, 0)
   }, [id])
   const usercard = store?.card?.filter((i) => i.userID === user)
   console.log(usercard, 'usercard')
   return (
      <div>
         {store?.status === 'pending' ? <LoadingSpinner /> : null}
         {usercard.length === 0 ? (
            store?.card?.map((i) => (
               <ApartmentHouseInnerPageFeedback data={i} key={i.id} />
            ))
         ) : (
            <UserAnnouncementInnerPage />
         )}
      </div>
   )
}
export default ProductDetail
