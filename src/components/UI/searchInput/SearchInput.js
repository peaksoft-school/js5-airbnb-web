import { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '../../../assets/icons/searchIcon'
// import searchIcon from '../assets/searchIcon2.svg'

const data = [
   { id: 1, region: 'Naryn' },
   { id: 2, region: 'Osh' },
   { id: 3, region: 'Talas' },
   { id: 4, region: 'Chui' },
   { id: 5, region: 'Batken' },
   { id: 6, region: 'Jalal-Abad' },
   { id: 7, region: 'Issyk-Kul' },
]

const SearchInput = (props) => {
   const [filteredData, setFilteredData] = useState([])
   const [wordEntered, setWordEntered] = useState('')

   const filterHandler = (event) => {
      const searchWord = event.target.value
      setWordEntered(searchWord)
      const newFilter = data.filter((value) => {
         return value.region.toLowerCase().includes(searchWord.toLowerCase())
      })

      if (searchWord === '') {
         setFilteredData([])
      } else {
         setFilteredData(newFilter)
      }
   }
   return (
      <StyledSearchInput>
         <Icon>
            <SearchIcon width="20px" height="20px" />
         </Icon>

         <input
            style={{
               width: props.width,
               height: props.height,
               border: props.border,
            }}
            placeholder={props.placeholder}
            onChange={filterHandler}
            value={wordEntered}
         />
         {filteredData.length !== 0 && (
            <div>
               {filteredData.slice(0, 15).map((value) => {
                  return <p>{value.region} </p>
               })}
            </div>
         )}
      </StyledSearchInput>
   )
}

export default SearchInput

const StyledSearchInput = styled.div`
   & input {
      box-sizing: border-box;
      background: #f7f7f7;
      border-radius: 2px;
      padding: 10px 40px;
   }
   & :focus {
      outline: none;
   }
`

const Icon = styled.div`
   position: absolute;
   padding: 10px 15px;
`
