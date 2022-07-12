import styled from 'styled-components'
import SearchIcon from '../../../assets/images/search.png'

const SearchInput = (props) => {
   return (
      <InputWrapper>
         <StyledSearchInput isOpen={props.isOpen}>
            <StyledSearchIcon
               onClick={props.handleToggle}
               src={SearchIcon}
               alt="searchIcon"
            />
            <input
               type="text"
               placeholder={props.placeholder}
               onChange={props.onChange}
               value={props.value}
            />
         </StyledSearchInput>
      </InputWrapper>
   )
}

export default SearchInput

const InputWrapper = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   justify-content: center;
   height: 80px;
`

const StyledSearchInput = styled.div`
   background: #fff;
   border-radius: 2px;
   border: 1px solid #c4c4c4;
   display: flex;
   justify-content: flex-start;
   margin: 19px;
   & input {
      background: transparent;
      padding: 10px 6px;
      border: none;
      outline: none;
      font-size: 16px;
      color: #5a5757;
      width: 400px;
      ::placeholder {
         color: #c4c4c4;
      }

      @media screen and (max-width: 480px) {
         width: ${({ isOpen }) => (isOpen ? '190px' : '0')};
         padding: ${({ isOpen }) => (isOpen ? '10px 4px' : '0')};
         transition: 0.3s;
      }
   }

   @media screen and (max-width: 480px) {
      margin: 20px 0 20px 12px;
      border: ${({ isOpen }) => (isOpen ? '1px solid #c4c4c4' : 'none')};
   }
`

const StyledSearchIcon = styled.img`
   cursor: pointer;
   width: 20px;
   height: 20px;
   margin: 8px;
`
