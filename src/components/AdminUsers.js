import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import deleteIcon from '../assets/icons/deleteIcon.svg'

import { adminUsersGet, adminUsersDelete } from '../store/slices/adminUserSlice'

import SnackBar from './UI/SnackBar'

const AdminUsers = () => {
   const [openDelete, setOpenDelete] = useState(false)
   const dispatch = useDispatch()
   const { users, statusDelete, errorDelete } = useSelector(
      (state) => state.adminUsers
   )
   const userDeleteHandler = (id) => {
      dispatch(adminUsersDelete(id))
      setOpenDelete(true)
   }
   useEffect(() => {
      dispatch(adminUsersGet())
   }, [dispatch])
   return (
      <StyledDiv>
         <StyledH2>users</StyledH2>
         <StyledDivScroll>
            <StyledTable>
               <tr>
                  <th>№</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Bookings</th>
                  <th>Announcement</th>
                  <th>Action</th>
               </tr>
               {users?.map((user) => (
                  <tr key={user.id}>
                     <td>{user?.id}</td>
                     <td>{user?.fullName}</td>
                     <td>{user?.email}</td>
                     <td>{user?.booking}</td>
                     <td>{user?.announcement}</td>
                     <td>
                        <img
                           onClick={() => userDeleteHandler(user.id)}
                           src={deleteIcon}
                           alt="delete"
                        />
                     </td>
                  </tr>
               ))}
            </StyledTable>
         </StyledDivScroll>
         {statusDelete === 'success' ? (
            <SnackBar
               severity="success"
               message="Пользователь успешно удалён!"
               open={openDelete}
               onClose={setOpenDelete}
            />
         ) : (
            ''
         )}
         {errorDelete === 'Rejected' ? (
            <SnackBar
               severity="error"
               message="что то пошло не так повторите еще раз"
               open={openDelete}
               onClose={setOpenDelete}
            />
         ) : (
            ''
         )}
      </StyledDiv>
   )
}
const StyledDiv = styled.div`
   width: 1360px;
   margin: auto 40px;
   height: 500px;
   @media screen and (max-width: 375px) {
      width: 350px;
      max-width: fit-content;
      max-height: fit-content;
      margin: 0px 0px 100px 16px;
      height: 500px;
   }
`
const StyledDivScroll = styled.div`
   @media screen and (max-width: 375px) {
      overflow-y: scroll;
      overflow-x: scroll;
      height: fit-content;
      max-height: 790px;
      height: 450px;
   }
`

const StyledTable = styled.table`
   font-family: arial, sans-serif;
   border-collapse: collapse;
   border-collapse: collapse;
   width: 1270px;
   text-align: center;
   & td,
   th {
      border: 1px solid #dddddd;
      padding: 8px;
   }
   & tr td {
      border: none;
      height: 54px;
   }
   & th {
      height: 37px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
      border: none;
   }
   & tr:nth-child(0n + 1) {
      background: #646464;
      border-collapse: collapse;
   }
   & tr:nth-child(0n + 2) {
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
   margin-bottom: 20px;
`

export default AdminUsers
