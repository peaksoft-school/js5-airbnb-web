import styled from 'styled-components'
import SearchIcon from '../../assets/icons/search.png'

const SearchInput = ({
   placeholder,
   isOpen,
   handleToggle,
   onChange,
   value,
   onSubmit,
}) => {
   return (
      <StyledSearchInput isOpen={isOpen} onSubmit={onSubmit}>
         <StyledSearchIcon
            onClick={handleToggle}
            src={SearchIcon}
            alt="searchIcon"
         />
         <input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
         />
      </StyledSearchInput>
   )
}

export default SearchInput

const StyledSearchInput = styled.form`
   background: #fff;
   border-radius: 2px;
   border: 1px solid #c4c4c4;
   display: flex;
   justify-content: flex-start;
   & input {
      background: transparent;
      padding: 10px 6px;
      border: none;
      outline: none;
      font-size: 16px;
      color: #5a5757;
      width: 100%;
      ::placeholder {
         color: #c4c4c4;
      }
   }

   @media screen and (max-width: 376px) {
      transition: 0.3s;
   }
`

const StyledSearchIcon = styled.img`
   cursor: pointer;
   width: 20px;
   height: 20px;
   margin: 8px;
`
