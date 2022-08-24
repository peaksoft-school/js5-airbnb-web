/* eslint-disable import/order */
import styled from 'styled-components'
import { Pagination } from '@mui/material'

const Paginations = (props) => {
   return (
      <StyledPagination
         count={props.count}
         page={props.page}
         size={props.size}
         onChange={props.onChange}
      />
   )
}

const StyledPagination = styled(Pagination)`
   .MuiButtonBase-root {
      color: #bdbdbd;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
   }
   .MuiPaginationItem-root {
      &:hover {
         background-color: transparent;
      }
   }
   .Mui-selected {
      color: #dd8a08;
      background-color: transparent !important;
   }
   .MuiPaginationItem-icon {
      color: #dd8a08;
      width: 30px;
      height: 30px;
   }
`
export default Paginations
