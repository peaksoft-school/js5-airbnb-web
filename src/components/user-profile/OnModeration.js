/* eslint-disable no-console */
/* eslint-disable import/order */
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import slides2 from '../../assets/images/Rectangle 7 (5).png'
import UserProfileAnnouncementCard from '../UI/cards/UserProfilleAnnouncementCard'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import { array } from './MyAnnouncement'

function OnModeration() {
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
   const nav = useNavigate()

   const getid = (text, id) => {
      if (text === 'delet') {
         setid(id)
         setModal(true)
      }
      if (text === 'edit') {
         setedit(id)
         nav('/main/addanounsement')
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
         {arr.map((el) => {
            return (
               <StyledUserProfile key={el.id}>
                  <UserProfileAnnouncementCard
                     img={slides2}
                     price={el.price}
                     ratings={el.ratings}
                     description={el.description}
                     location={el.location}
                     guestsAmount={el.guestsAmount}
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
         ) : (
            <span> </span>
         )}
      </Announcement>
   )
}

export default OnModeration
const Announcement = styled.div`
   padding-top: 31px;
   display: flex;
   justify-content: flex-start;
   gap: 20px;
   flex-wrap: wrap;
   align-content: flex-start;
   flex-direction: row;
   width: 820px;
   margin-top: 3px;
   align-items: flex-start;
   @media (max-width: 375px) {
      display: grid;
      column-gap: 10px;
      row-gap: 160px;
      grid-template-columns: auto auto;
      margin: 20px 0 0 0;
   }
`
const StyledUserProfile = styled.div`
   @media (max-width: 375px) {
      margin-top: 15px;
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
      width: 300px;
   }
`
const StyledButton = styled.div`
   width: 350px;
   display: flex;
   justify-content: space-evenly;
`
