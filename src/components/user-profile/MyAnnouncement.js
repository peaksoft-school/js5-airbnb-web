/* eslint-disable import/order */
import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
// import appFetch from '../../api/appFetch'
import photo from '../../assets/images/Rectangle 7 (5).png'
import Button from '../UI/Button'
import UserProfileAnnouncementCard from '../UI/cards/UserProfilleAnnouncementCard'
import Modal from '../UI/Modal'
import SnackBar from '../UI/SnackBar'
import UserSelect from './SelectFilter'
import { getUserBooking } from '../../store/slices/getUserAnniuncement'

export const array = [
   {
      id: 1,
      price: 52,
      ratings: 4,
      description: 'Beautiful and picturesque 2 ...',
      location: '12 Morris Ave, Toronto, ON, ...',
      maxGuests: 3,
      img: photo,
   },
   {
      id: 2,
      price: 52,
      ratings: 4,
      description: 'Beautiful and picturesque 2 ...',
      location: '12 Morris Ave, Toronto, ON, ...',
      guestsAmount: 3,
      img: photo,
   },
   {
      price: 52,
      ratings: 4,
      description: '3Beautiful and picturesque 2 ...',
      location: '12 Morris Ave, Toronto, ON, ...',
      id: 3,
      guestsAmount: 3,
      img: photo,
   },
   {
      id: 4,
      price: 52,
      ratings: 4,
      description: 'Beautiful and picturesque 2 ...',
      location: '12 Morris Ave, Toronto, ON, ...',
      guestsAmount: 3,
      img: photo,
   },
   {
      id: 5,
      price: 52,
      ratings: 4,
      description: 'Beautiful and picturesque 2 ...',
      location: '12 Morris Ave, Toronto, ON, ...',
      guestsAmount: 3,
      img: photo,
   },
   {
      id: 6,
      price: 52,
      ratings: 4,
      description: 'Beautiful and picturesque 2 ...',
      location: '12 Morris Ave, Toronto, ON, ...',
      guestsAmount: 3,
      img: photo,
      isBlocked: true,
   },
]
function MyAnnouncment() {
   // const [arr, setarr] = useState(array)
   // const [id, setid] = useState('')
   // eslint-disable-next-line no-unused-vars
   const [edit, setedit] = useState('')
   // console.log(edit)
   const [modal, setModal] = useState(false)
   // const [bools, setBools] = useState(false)
   const [delete2, setdelete] = useState({
      yes: false,
      no: false,
   })
   // const nav = useNavigate()

   const getid = (text, id) => {
      if (text === 'delet') {
         // setid(id)
         setModal(true)
      }
      if (text === 'edit') {
         setedit(id)
         setModal(false)
         // nav('/main/addanounsement')
      }
   }
   // useEffect(() => {
   //    if (delete2.yes) {
   //       const newarr = arr.filter((i) => i.id !== +id)
   //       setarr(newarr)
   //    }
   // }, [id, delete2])

   // const data = useSelector((s) => s)
   // console.log(data)
   // const dispatch = useDispatch()
   // const d = async () => {
   //    console.log('hi')
   //    const f = await appFetch({
   //       url: 'user/profile/bookings/myAnnouncements',
   //    })
   //    console.log(f)
   // }
   // useEffect(() => {
   //    d()
   //    console.log('hiuse')
   //    dispatch(getUserBooking())
   // }, [])
   const data = useSelector((s) => s)
   const dispatch = useDispatch()
   // const a = async () => {
   //    const d = await fetch(
   // eslint-disable-next-line max-len
   //       'http://airbnb-env.eba-bxmudt83.eu-central-1.elasticbeanstalk.com/user/profile/bookings/myAnnouncements',
   //       {
   //          method: 'GET',
   //          headers: {
   //             'Content-Type': 'application/json',
   //             Authorization: `Bearer ${data.login.login.jwt}`,
   //          },
   //       }
   //    )
   //       .then((res) => res.json())
   //       .then((data) => console.log(data))
   //    console.log(d)
   // }
   console.log(data)
   useEffect(() => {
      // a()
      dispatch(getUserBooking())
   }, [])

   return (
      <Announcement>
         <StyledBlock>
            <PosisionSelect>
               <UserSelect line="true" />
            </PosisionSelect>
         </StyledBlock>
         {array.map((el, index) => {
            return (
               // eslint-disable-next-line react/no-array-index-key
               <StyledUserProfile key={index}>
                  <UserProfileAnnouncementCard
                     img={el?.image}
                     bookingQuantity="30"
                     likeQuantity="18"
                     // icons="true"
                     open="true"
                     // meetballs="true"
                     onClick={(text, id) => {
                        setModal(true)
                        getid(text, id)
                     }}
                     data={el}
                  />
               </StyledUserProfile>
            )
         })}
         {modal ? (
            <Modal open={modal}>
               <StyledModal>
                  <p>Do you want to delete?</p>
                  <StyledButton>
                     <Button
                        height="38px"
                        onClick={() => {
                           setModal(false)
                           setdelete({
                              yes: true,
                              no: false,
                           })
                        }}
                     >
                        Yes
                     </Button>
                     <Button
                        variant="contained"
                        height="38px"
                        onClick={() => {
                           setdelete({
                              yes: false,
                              no: true,
                           })
                           setModal(false)
                        }}
                     >
                        Not
                     </Button>
                  </StyledButton>
               </StyledModal>
            </Modal>
         ) : null}
         <SnackBar
            open={delete2.yes}
            text="Your request is successful"
            onClose={() => setdelete(false)}
            autoHideDuration="1000"
         />
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
