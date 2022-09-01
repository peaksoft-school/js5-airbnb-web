/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-console */
/* eslint-disable import/named */
/* eslint-disable import/order */
import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import photo from '../../assets/images/Rectangle 7 (5).png'
import UserProfileAnnouncementCard from '../UI/cards/UserProfilleAnnouncementCard'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import UserSelect from './SelectFilter'
import SnackBar from '../UI/SnackBar'

export const array = [
   {
      id: 1,
      price: 52,
      ratings: 4,
      description: 'Beautiful and picturesque 2 ...',
      location: '12 Morris Ave, Toronto, ON, ...',
      guestsAmount: 3,
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
   const [arr, setarr] = useState(array)
   const [id, setid] = useState('')
   const [edit, setedit] = useState('')
   console.log(edit)
   const [modal, setModal] = useState(false)
   // const [bools, setBools] = useState(false)
   const [delete2, setdelete] = useState({
      yes: false,
      no: false,
   })
   // const nav = useNavigate()

   const getid = (text, id) => {
      if (text === 'delet') {
         setid(id)
         setModal(true)
      }
      if (text === 'edit') {
         setedit(id)
         setModal(false)
         // nav('/main/addanounsement')
      }
   }
   useEffect(() => {
      if (delete2.yes) {
         const newarr = arr.filter((i) => i.id !== +id)
         setarr(newarr)
      }
   }, [id, delete2])

   return (
      <Announcement>
         <StyledBlock>
            <PosisionSelect>
               <UserSelect line="true" />
            </PosisionSelect>
         </StyledBlock>
         {arr.map((el) => {
            return (
               <StyledUserProfile key={el.id}>
                  <UserProfileAnnouncementCard
                     bookingQuantity="30"
                     likeQuantity="18"
                     icons="true"
                     open="none"
                     onClick={(text, id) => {
                        setModal(true)
                        getid(text, id)
                     }}
                     data={el}
                     meetballs="true"
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
   padding-top: 31px;
   display: flex;
   justify-content: flex-start;
   gap: 20px;
   flex-wrap: wrap;
   align-content: flex-start;
   flex-direction: row;
   width: 820px;
   align-items: flex-start;
   @media (max-width: 375px) {
      display: grid;
      column-gap: 5px;
      row-gap: 170px;
      grid-template-columns: auto auto;
      margin: 15px 0 0 0;
   }
`
const StyledUserProfile = styled.div`
   @media (max-width: 375px) {
      position: relative;
      top: 160px;
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
   padding-bottom: 40px;
   @media (max-width: 375px) {
      display: flex;
      flex-direction: column;
   }
`
