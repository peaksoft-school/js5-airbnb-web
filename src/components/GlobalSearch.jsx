import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
   cleanglobalSearchValue,
   findbyGlobalSearch,
} from '../store/slices/globalSearchSlice'
import SearchInput from './UI/SearchInput'

const GlobalSearch = (props) => {
   const store = useSelector((store) => store.globalSearchValue)
   const dispatch = useDispatch()
   const [value, setvalue] = useState('')
   const getValue = (e) => {
      e.stopPropagation()
      setvalue(e.target.value)
   }
   useEffect(() => {
      const region = value.split(' ')
      if (value === '') {
         dispatch(cleanglobalSearchValue.cleanSearchvalue())
      }
      if (value !== '') {
         dispatch(
            findbyGlobalSearch({
               region: region[0],
               city: region[1],
               address: region[2],
            })
         )
      }
   }, [value])
   const nav = useNavigate()
   const gofind = (e) => {
      if (e.key === 'Enter') {
         nav(`/main/${value.toLocaleUpperCase()}`)
      }
   }
   return (
      <Container style={props} onKeyUp={gofind}>
         <SearchInput
            handleToggle={props.handleToggle}
            placeholder={props.placeholder}
            onChange={getValue}
            value={value}
         />
         {store?.searchvalue?.length > 0 ? (
            <WrapperSimmilarText style={props}>
               {store?.searchvalue?.map((i) => (
                  <p
                     onClick={(e) => {
                        e.stopPropagation()
                        nav(`/main/moreinfo=${i.announcementId}`)
                        setvalue('')
                     }}
                     key={i.announcementId}
                  >
                     {i.announcementInfo}
                  </p>
               ))}
            </WrapperSimmilarText>
         ) : null}
      </Container>
   )
}
export default GlobalSearch

const WrapperSimmilarText = styled.div`
   position: absolute;
   width: ${(props) => props.width || '735px'};
   background: #bfbff4a3;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
   padding: 10px 20px;
   & > p {
      margin-bottom: 10px;
      cursor: pointer;
   }
   @media screen and (max-width: 375px) {
      width: ${(props) => props.mediawidth || '343px'};
      overflow: hidden;
   }
`
const Container = styled.div`
   position: relative;
   width: ${(props) => props.width || '735px'};
   @media screen and (max-width: 375px) {
      width: ${(props) => props.mediawidth || '343px'};
      overflow: hidden;
   }
`
