/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

export default function Pagination(props) {
   const { data } = props
   const [currentItems, setCurrentItems] = useState([])
   const [pageCount, setPageCount] = useState(0)
   const [itemOffset, setItemOffset] = useState(0)
   const itemsPerPage = 1.4

   useEffect(() => {
      const endOffset = itemOffset + itemsPerPage
      setCurrentItems(data.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(data.length / itemsPerPage))
   }, [itemOffset, itemsPerPage, data])

   const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length
      setItemOffset(newOffset)
   }

   return (
      <StyledReactPaginate
         breakLabel="..."
         nextLabel={
            <svg
               width="10"
               height="16"
               viewBox="0 0 10 16"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.22725 0.852252C1.00758 1.07192 1.00758 1.42808 1.22725 1.64775L7.57951 8L1.22725 14.3523C1.00758 14.5719 1.00758 14.9281 1.22725 15.1477C1.44692 15.3674 1.80308 15.3674 2.02275 15.1477L8.77275 8.39775C8.99242 8.17808 8.99242 7.82192 8.77275 7.60225L2.02275 0.852252C1.80308 0.632582 1.44692 0.632582 1.22725 0.852252Z"
                  fill="#DD8A08"
                  stroke="#DD8A08"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
            </svg>
         }
         onPageChange={handlePageClick}
         pageRangeDisplayed={5}
         marginPagesDisplayed={1}
         pageCount={pageCount}
         previousLabel={
            <svg
               width="10"
               height="16"
               viewBox="0 0 10 16"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.77275 0.852252C8.99242 1.07192 8.99242 1.42808 8.77275 1.64775L2.42049 8L8.77275 14.3523C8.99242 14.5719 8.99242 14.9281 8.77275 15.1477C8.55308 15.3674 8.19692 15.3674 7.97725 15.1477L1.22725 8.39775C1.00758 8.17808 1.00758 7.82192 1.22725 7.60225L7.97725 0.852252C8.19692 0.632582 8.55308 0.632582 8.77275 0.852252Z"
                  fill="#DD8A08"
                  stroke="#DD8A08"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
            </svg>
         }
         renderOnZeroPageCount={null}
         pageLinkClassName="page-num"
         activeClassName="active"
      />
   )
}

const StyledReactPaginate = styled(ReactPaginate)`
   list-style: none;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 5rem;
   font-size: 1.2rem;
   gap: 5px;
   color: #bdbdbd;
   & .page-num {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
   }
   & .page-num:hover {
      color: #dd8a08;
   }
   & .active {
      color: #dd8a08;
   }
`
