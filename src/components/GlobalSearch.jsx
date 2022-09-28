import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
   cleanglobalSearchValue,
   findbyGlobalSearch,
} from '../store/slices/globalSearchSlice'
import Button from './UI/Button'
import SearchInput from './UI/SearchInput'

const GlobalSearch = (props) => {
   const store = useSelector((store) => store.findbyglobalsearch)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [value, setvalue] = useState('')

   const onChangeHandler = (e) => {
      e.stopPropagation()
      setvalue(e.target.value)
   }

   const gotodetailCard = (id) => {
      navigate(`/main/catalog/${id}`)
      setvalue('')
   }

   const gotoEnterKey = (e) => {
      navigate(`/main/catalog?city=${e.target.children[1].value}&page=1`)
      e.preventDefault()
      setvalue('')
   }

   useEffect(() => {
      if (props?.value) {
         setvalue('Bishkek')
      }
      if (value === '') {
         dispatch(cleanglobalSearchValue.cleanSearchvalue())
      } else {
         const region = value.split(' ')
         dispatch(
            findbyGlobalSearch({
               region: region[0],
               city: region[1],
               address: region[2],
            })
         )
      }
   }, [value, props?.value])

   return (
      <Container style={props}>
         <SearchInput
            handleToggle={props.handleToggle}
            placeholder={props.placeholder}
            onChange={onChangeHandler}
            value={value}
            onSubmit={gotoEnterKey}
         />
         <WrapperSimmilarText style={props}>
            {store?.searchvalue?.map((i) => (
               <Button
                  onClick={() => gotodetailCard(i.announcementId)}
                  key={i.announcementId}
               >
                  <p>{i.announcementInfo}</p>
               </Button>
            ))}
         </WrapperSimmilarText>
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
   & > button {
      cursor: pointer;
      margin-left: 20px;
      width: auto;
      background: none;
      padding: 0px 10px 0px 10px;
   }
   /* & > button:hover {
      background: none;
   } */
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
