import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import ClientApartmentCard from '../components/ClientUserApartmentCard/ClientUserApartmentCard'
import Footer from '../components/footer/Footer'
import LoadingSpinner from '../components/LoadingSpinner'
import BreadCrumbs from '../components/UI/BreadCrumbs'
import SnackBar from '../components/UI/SnackBar'
// import { getallFavoriteCards } from '../store/slices/LikeAndBookmarkSlice'

const Favorite = () => {
   const store = useSelector((store) => store.likeandbookmark)
   // const dispatch = useDispatch()
   // useEffect(() => {
   //    dispatch(getallFavoriteCards())
   // }, [store?.postBookmarkstatus, store?.likeordislike])
   const loc = useLocation()
   console.log(loc.pathname, 'location')
   // console.log(store?.getallFavoriteCards?.cards, 'card favorite')
   const [open, setopen] = useState()
   const [open2, setopen2] = useState()

   const opensnack2 = () => {
      setopen2(true)
   }
   const opensnack = () => {
      setopen(true)
   }
   // console.log(open)
   return (
      <>
         {store.getallFavoriteCards.status === 'pending' ? (
            <LoadingSpinner />
         ) : null}
         {store.likestatus === 'success' && store?.likeordislike ? (
            <SnackBar
               open={open}
               onClose={setopen}
               severity="success"
               message="successfully added in like"
            />
         ) : (
            <SnackBar
               open={open}
               onClose={setopen}
               severity="success"
               message="successfully deleted in like"
            />
         )}
         {store.likestatus === 'error' ? (
            <SnackBar open={open} onClose={setopen} message="error" />
         ) : null}
         {store?.postBookmarkstatus === 'success' ? (
            <SnackBar
               open={open2}
               onClose={setopen2}
               severity="success"
               message="successfully deleted on favorite"
            />
         ) : null}
         {store?.postBookmarkstatus === 'error' ? (
            <SnackBar open={open2} onClose={setopen2} message="error" />
         ) : null}
         <Container>
            <WrapperPage>
               <BreadCrumbs location={useLocation()} />
               <p>Favorite ({store.getallFavoriteCards.size})</p>
               <WrapperCard>
                  {store.getallFavoriteCards.cards?.map((i) => (
                     <ClientApartmentCard
                        bool={i.bool}
                        data={i}
                        key={i.id}
                        open={opensnack}
                        open2={opensnack2}
                     />
                  ))}
               </WrapperCard>
            </WrapperPage>
            <Footer />
         </Container>
      </>
   )
}
export default Favorite
const WrapperCard = styled.div`
   display: flex;
   gap: 20px;
   flex-wrap: wrap;
`
const WrapperPage = styled.div`
   width: 1240px;
   margin: 0 auto;
   padding-top: 40px;
   min-height: 380px;
   & > :nth-child(2) {
      margin-top: 40px;
      margin-bottom: 30px;
      text-transform: uppercase;
   }
`
const Container = styled.div`
   background: #f7f7f7;
   width: 100%;
   & > :nth-child(2) {
      margin-top: 150px;
   }
`
