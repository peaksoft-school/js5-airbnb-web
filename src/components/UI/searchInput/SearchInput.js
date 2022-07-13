import styled, { css } from 'styled-components'
import SearchIcon from '../../../assets/icons/searchIcon'

const SearchInput = (props) => {
   return (
      <StyledSearchInput>
         <Icon>
            <SearchIcon width="20px" height="20px" />
         </Icon>

         <Input
            border={props.border}
            width={props.width}
            height={props.height}
            placeholder={props.placeholder}
         />
      </StyledSearchInput>
   )
}

export default SearchInput

const StyledSearchInput = styled.div`
   & input {
   }
   & :focus {
      outline: none;
   }
`
const Input = styled.input`
   box-sizing: border-box;
   background: #f7f7f7;
   border-radius: 2px;
   padding: 10px 40px;
   ${(props) =>
      props.width &&
      css`
         width: ${props.width};
      `}
   ${(props) =>
      props.height &&
      css`
         height: ${props.height};
      `}
   ${(props) =>
      props.border &&
      css`
         border: ${props.border};
      `}
`

const Icon = styled.div`
   position: absolute;
   padding: 10px 15px;
`
