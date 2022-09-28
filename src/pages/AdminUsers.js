/* eslint-disable import/no-useless-path-segments */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import deleteIcon from '../assets/icons/deleteicon.svg'
import LoadingSpinner from '../components/LoadingSpinner'
import Button from '../components/UI/Button'
import Modal from '../components/UI/Modal'
import SnackBar from '../components/UI/SnackBar'
import {
   deleteUsers,
   getAllUsers,
} from '../store/slices/adminApplicationActions'

const AdminUsers = () => {
   const store = useSelector((s) => s.applications)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllUsers())
   }, [])
   const [open, setOpen] = useState(false)
   const [id, setid] = useState('')
   const close = () => {
      setOpen((p) => !p)
   }
   const onDelete = (e) => {
      setid(e)
      setOpen((p) => !p)
   }
   const deletuser = () => {
      dispatch(deleteUsers(id))
      setOpen((p) => !p)
   }
   const nav = useNavigate()
   return (
      <StyledDiv>
         <Modal open={open} handleClose={close}>
            <WrapperModalBtn>
               <p>Are you sure?</p>
               <div>
                  <Button
                     variant="contained"
                     onClick={() => {
                        deletuser()
                     }}
                  >
                     Yes
                  </Button>
                  <Button onClick={close}>No</Button>
               </div>
            </WrapperModalBtn>
         </Modal>
         {store?.userstatus === 'pending' && <LoadingSpinner color="black" />}
         {store?.deletestatus === 'error' && (
            <SnackBar
               message="что то пошло не так"
               text="повторите еще раз"
               open={open}
               onClose={setOpen}
            />
         )}
         {store?.deletestatus === 'success' && (
            <SnackBar
               severity="success"
               message="Пользователь успешно удален"
               open={open}
               onClose={setOpen}
            />
         )}
         <StyledDivScroll>
            <StyledH2>users</StyledH2>
            <StyledTable>
               <tr>
                  <th>№</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Bookings</th>
                  <th>Announcement</th>
                  <th>Action</th>
               </tr>
               {store?.allusers?.map((user, index) => (
                  <tr
                     key={user.id}
                     onClick={() => {
                        nav(`/users/${user.id}`)
                     }}
                  >
                     <td>{index + 1}</td>
                     <td>{user?.fullName}</td>
                     <td>{user?.email}</td>
                     <td>{user?.booking}</td>
                     <td>{user?.announcement}</td>
                     <td>
                        <WrapperBtn
                           onClick={(e) => {
                              e.stopPropagation()
                              onDelete(user.id)
                           }}
                        >
                           <img src={deleteIcon} alt="delete" />
                        </WrapperBtn>
                     </td>
                  </tr>
               ))}
            </StyledTable>
         </StyledDivScroll>
      </StyledDiv>
   )
}
const WrapperModalBtn = styled.div`
   display: flex;
   width: 400px;
   height: 80px;
   flex-direction: column;
   align-content: center;
   justify-content: space-around;
   align-items: center;
   & > :nth-child(2) {
      display: flex;
      justify-content: space-around;
      width: 350px;
      & > button {
         width: 160px;
         padding: 0px;
      }
   }
`
const WrapperBtn = styled.button`
   cursor: pointer;
   border: none;
   background: none;
`
const StyledDiv = styled.div`
   width: 100%;
   background: #e5e5e5;
   @media screen and (max-width: 375px) {
      max-width: fit-content;
      max-height: fit-content;
   }
`
const StyledDivScroll = styled.div`
   width: 1240px;
   margin: 0 auto;
   min-height: 700px;
   @media screen and (max-width: 375px) {
      overflow-y: scroll;
      overflow-x: scroll;
      height: fit-content;
      max-height: 790px;
   }
`

const StyledTable = styled.table`
   font-family: arial, sans-serif;
   border-collapse: collapse;
   border-collapse: collapse;
   width: 100%;
   margin: auto;
   & td,
   th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
   }
   & tr td {
      border: none;
   }
   & td {
      cursor: pointer;
   }
   & th {
      height: 17px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
      border: none;
      cursor: pointer;
   }
   & tr:nth-child(0n + 1) {
      background: #646464;
      border-collapse: collapse;
   }
   & > :nth-child(1):hover {
      background: #646464;
   }
   & > tr:hover {
      background: #d8d8d8;
   }
`
const StyledH2 = styled('h2')`
   width: 66px;
   height: 24px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 20px;
   line-height: 24px;
   text-transform: uppercase;
   color: #000000;
   padding-top: 50px;
   margin-bottom: 60px;
`

export default AdminUsers
