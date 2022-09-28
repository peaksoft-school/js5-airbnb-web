import { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Times } from '../assets/icons/times.svg'
import FilterSideBarMobile from './FilterSideBarMobile'
import Button from './UI/Button'

const FilterSideBar = ({
   isOpen,
   mobileToggle,
   getvalueRegionid,
   getvalueKind,
   getvalueType,
   getvaluePrice,
}) => {
   const sortprice = {
      title: 'Price:',
      radioBtn: [
         {
            text: 'Low to high',
            fetchtext: 'LOW_TO_HIGH',
            checked: false,
         },
         {
            text: 'High to low',
            fetchtext: 'HIGH_TO_LOW',
            checked: false,
         },
      ],
   }

   const sorttype = {
      title: 'Type:',
      radioBtn: [
         {
            text: 'Apartment',
            checked: false,
            fetchtext: 'APARTMENT',
         },
         {
            text: 'House',
            checked: false,
            fetchtext: 'HOUSE',
         },
      ],
   }
   const sortpopular = {
      title: 'Sort by:',
      radioBtn: [
         {
            fetchtext: 'POPULAR',
            text: 'Popular',
            checked: false,
         },
         {
            text: 'The lastest',
            fetchtext: 'THE_LASTEST',
            checked: false,
         },
      ],
   }
   const sortregion = {
      title: 'Region',
      radioBtn: [
         {
            id: 1,
            text: 'Bishkek',
            checked: false,
         },
         {
            id: 2,
            text: 'Osh City',
            checked: false,
         },
         {
            id: 3,
            text: 'Batken',
            checked: false,
         },
         {
            id: 4,
            text: 'Jalalabad',
            checked: false,
         },
         {
            id: 5,
            text: 'Naryn',
            checked: false,
         },
         {
            id: 6,
            text: 'Osh Obl',
            checked: false,
         },
         {
            id: 7,
            text: 'Talas',
            checked: false,
         },
         {
            id: 8,
            text: 'Chui',
            checked: false,
         },
         {
            id: 9,
            text: 'Issyk-Kul',
            checked: false,
         },
      ],
   }
   const gettype = (e) => {
      getvalueType(e)
   }
   const getkind = (e) => {
      getvalueKind(e)
   }
   const getRegionid = (e) => {
      getvalueRegionid(e)
   }
   const getprice = (e) => {
      getvaluePrice(e)
   }
   const [cl, setcl] = useState(false)
   const clear = (e) => {
      setcl(e)
   }
   const [cl2, setcl2] = useState(false)
   const clear2 = (e) => {
      setcl2(e)
   }
   const [cl3, setcl3] = useState(false)
   const clear3 = (e) => {
      setcl3(e)
   }
   const [cl4, setcl4] = useState(false)
   const clear4 = (e) => {
      setcl4(e)
   }
   return (
      <SidebarContainer isOpen={isOpen}>
         <Icon onClick={mobileToggle}>
            <Times />
         </Icon>
         <SidebarWrapper>
            <div>
               Filter
               <Button
                  variant="outlined"
                  onClick={() => {
                     clear(true)
                     clear2(true)
                     clear3(true)
                     clear4(true)
                  }}
               >
                  <span>Clear all</span>
               </Button>
            </div>
            <Box>
               <FilterSideBarMobile
                  clear={cl}
                  newvalue={clear}
                  getvalue={getkind}
                  radioBtn={sortpopular.radioBtn}
                  title={sortpopular.title}
               />
               <FilterSideBarMobile
                  newvalue={clear2}
                  clear={cl2}
                  getvalue={gettype}
                  radioBtn={sorttype.radioBtn}
                  title={sorttype.title}
               />
               <FilterSideBarMobile
                  clear={cl3}
                  newvalue={clear3}
                  getvalue={getprice}
                  radioBtn={sortprice.radioBtn}
                  title={sortprice.title}
               />
               <FilterSideBarMobile
                  clear={cl4}
                  newvalue={clear4}
                  getvalue={getRegionid}
                  radioBtn={sortregion.radioBtn}
                  title={sortregion.title}
               />
            </Box>
         </SidebarWrapper>
      </SidebarContainer>
   )
}

export default FilterSideBar

const Box = styled.div`
   display: flex;
   flex-direction: column;
   gap: 40px;
   & > :nth-child(1) {
      & > div > div > span {
         border-radius: 0%;
         & > span {
            border-radius: 0%;
         }
      }
   }
   & > :nth-child(3) {
      & > div > div > span {
         border-radius: 0%;
         & > span {
            border-radius: 0%;
         }
      }
   }
   & > :nth-child(4) {
      & > div {
         display: grid;
         grid-template-columns: 150px 150px;
         grid-gap: 10px;
         & > div > span {
            border-radius: 0%;
            & > span {
               border-radius: 0%;
            }
         }
      }
   }
`
const SidebarContainer = styled.aside`
   position: absolute;
   z-index: 999;
   opacity: 1;
   width: 100%;
   height: 800px;
   background: #f7f7f7;
   top: 0;
   transition: 0.3s ease-in-out;
   /* opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')}; */
   right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
const Icon = styled.div`
   position: absolute;
   top: 39px;
   right: 1.5rem;
   background: transparent;
   font-size: 2rem;
   cursor: pointer;
   /* outline: none; */
`

const SidebarWrapper = styled.div`
   color: black;
   padding-top: 39px;
   padding-left: 25px;
   & > :nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
      & > button {
         margin-right: 80px;
         border: none;
         background: none;
         & > span {
            border-bottom: 2px solid grey;
            font-size: 16px;
         }
      }
   }
`
