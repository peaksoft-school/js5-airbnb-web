import styled from 'styled-components'
import SearchIcon from '../../../assets/icons/searchIcon'
// import searchIcon from '../assets/searchIcon2.svg'

const SearchInput = (props) => {
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
         />
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
