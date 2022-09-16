import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { deleteUserAnnouncementCard } from '../../store/slices/getUserAnniuncement'
import Button from '../UI/Button'
import UserProfileAnnouncementCard from '../UI/cards/UserProfilleAnnouncementCard'
import Modal from '../UI/Modal'
import SnackBar from '../UI/SnackBar'
import UserSelect from './SelectFilter'

function MyAnnouncment(props) {
   const [id, setId] = useState('')
   const [modal, setModal] = useState(false)
   const [deleteCard, setdelete] = useState(false)
   const store = useSelector((store) => store.getUserAnnouncement)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const deleteUserAnnouncementHandler = () => {
      dispatch(deleteUserAnnouncementCard(id))
   }
   const [filtervalue, setfiltervalue] = useState({
      rating: '',
      type: '',
      price: '',
   })
   const getfiltervalue = (obj) => {
      setfiltervalue({
         rating: obj.rating,
         type: obj.type,
         price: obj.price,
      })
   }
   const [data, setdata] = useState([])

   useEffect(() => {
      setdata(props.data)
      if (filtervalue.rating) {
         const arr = props.data.filter(
            (i) => Math.ceil(i.rating) === +filtervalue.rating
         )
         setdata(arr)
      }
      if (filtervalue.type === 'In wish list') {
         setdata(props.data)
      }
      if (filtervalue.type !== 'In wish list') {
         const arr = props.data.filter(
            (i) => i.houseType === filtervalue.type?.toUpperCase()
         )
         setdata(arr)
      }
      if (!filtervalue.type && !filtervalue.rating) {
         setdata(props.data)
      }
   }, [filtervalue.rating, filtervalue.price, filtervalue.type, props.data])
   function sortbyPriceHigh(a, b) {
      return a.price - b.price
   }
   function sortbyPriceLow(a, b) {
      return b.price - a.price
   }
   if (filtervalue.price === 'High to low') {
      data.sort(sortbyPriceLow)
   }
   if (filtervalue.price === 'Low to high') {
      data.sort(sortbyPriceHigh)
   }
   const buttonTask = () => {
      deleteUserAnnouncementHandler()
      setModal(false)
      setdelete(true)
   }
   return (
      <Announcement>
         <StyledBlock>
            <PosisionSelect>
               <UserSelect getvalue={getfiltervalue} />
            </PosisionSelect>
         </StyledBlock>
         {data?.map((el) => {
            return (
               <StyledUserProfile key={el.id}>
                  <UserProfileAnnouncementCard
                     innerPage={() => navigate(`/innerPage`)}
                     bookmarkCountAnnouncement={el.bookmarkCountAnnouncement}
                     likeCountAnnouncement={el.likeCountAnnouncement}
                     nav={navigate}
                     data={el}
                     meetballs="true"
                     onDelete={() => {
                        setModal(true)
                        setId(el.id)
                     }}
                     onEdit={() => {
                        setModal(false)
                        navigate(`/main/editannouncment=${el.id}`)
                     }}
                  />
               </StyledUserProfile>
            )
         })}
         {modal === true ? (
            <Modal open={modal}>
               <StyledModal>
                  <p>Do you want to delete?</p>
                  <StyledButton>
                     <Button height="38px" onClick={buttonTask}>
                        Yes
                     </Button>
                     <Button
                        variant="contained"
                        height="38px"
                        onClick={() => {
                           setdelete(false)
                           setModal(false)
                        }}
                     >
                        Not
                     </Button>
                  </StyledButton>
               </StyledModal>
            </Modal>
         ) : null}
         {store?.deleteStatus === 'success' ? (
            <SnackBar
               open={deleteCard}
               text="Your request is successful"
               onClose={setdelete}
               severity="success"
               autoHideDuration="1000"
            />
         ) : (
            <SnackBar
               open={deleteCard}
               text="Your request is error"
               onClose={setdelete}
               autoHideDuration="1000"
            />
         )}
      </Announcement>
   )
}

export default MyAnnouncment

const Announcement = styled.div`
   padding-top: 30px;
   display: flex;
   column-gap: 20px;
   justify-content: flex-start;
   flex-wrap: wrap;
   align-content: flex-start;
   flex-direction: row;
   width: 820px;
   align-items: flex-start;
   @media (max-width: 375px) {
      padding-top: 10px;
      display: grid;
      column-gap: 5px;
      row-gap: 150px;
      grid-template-columns: auto auto;
      justify-content: start;
   }
`
const StyledUserProfile = styled.div`
   margin-top: 19px;
   @media (max-width: 375px) {
      position: relative;
      top: 160px;
      margin-top: 25px;
   }
`
const StyledModal = styled.div`
   width: 350px;
   height: 100px;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   @media (max-width: 375px) {
      width: 375px;
   }
`
const StyledButton = styled.div`
   width: 350px;
   display: flex;
   justify-content: space-evenly;
`
const StyledBlock = styled.div`
   display: flex;
   flex-direction: column;
   @media (max-width: 375px) {
      position: absolute;
   }
`
const PosisionSelect = styled.div`
   display: flex;
   justify-content: space-between;
   @media (max-width: 375px) {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
   }
`
