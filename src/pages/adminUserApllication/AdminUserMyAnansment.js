import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../components/UI/Button'
import Modal from '../../components/UI/Modal'
import SnackBar from '../../components/UI/SnackBar'
import AdminUserProfile from './AdminUserProfile'

function AdminUserMyAnnouncment(props) {
   const [id, setId] = useState('')
   console.log(id)
   const [modal, setModal] = useState(false)
   const [delete2, setdelete] = useState({
      yes: false,
      no: false,
   })
   const navigate = useNavigate()
   const definition = (text, id) => {
      if (text === 'delet') {
         setId(id)
         setModal(true)
      }
      if (text === 'edit') {
         setModal(false)
      }
   }
   return (
      <Announcement>
         {props.data?.map((el) => {
            return (
               <StyledUserProfile
                  key={el.id}
                  onClick={() => navigate(`/users/card/${el.id}`)}
               >
                  <AdminUserProfile
                     meetballs="true"
                     onClick={(text, id) => {
                        setModal(true)
                        definition(text, id)
                     }}
                     icons="true"
                     data={el}
                  />
               </StyledUserProfile>
            )
         })}
         {modal === true ? (
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

export default AdminUserMyAnnouncment

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
