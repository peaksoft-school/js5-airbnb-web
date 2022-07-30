import styled from 'styled-components'
import Select from '../../components/UI/Select'

const UserApartmentFilter = () => {
   return (
      <FilterWrap>
         <Select label="Sort by: " variant="sort" />
         <Select label="Sort by: " variant="sort" />
         <Select label="Filter by home type: " variant="sort" />
         <Select label="Filter by price: " variant="sort" />
      </FilterWrap>
   )
}
export default UserApartmentFilter

const FilterWrap = styled.div`
   display: flex;
   justify-content: space-between;
`
