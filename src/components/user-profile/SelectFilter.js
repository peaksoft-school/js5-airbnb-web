import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import styled from 'styled-components'
import staricon1 from '../../assets/icons/star1.svg'
import staricon2 from '../../assets/icons/star2.svg'
import staricon3 from '../../assets/icons/star3.svg'
import staricon4 from '../../assets/icons/star4.svg'
import staricon5 from '../../assets/icons/star5.svg'
import Vector from '../../assets/icons/Vector (5).svg'
import RadioButton from '../UI/RadioButton'

const names = ['In wish list', 'Apartment', 'House']
const prise = ['Low to high', 'High to low']
const images = [
   { id: 5, images: staricon5 },
   { id: 4, images: staricon4 },
   { id: 3, images: staricon3 },
   { id: 2, images: staricon2 },
   { id: 1, images: staricon1 },
]

export default function UserSelect(props) {
   const [data, setData] = useState({
      text: '',
      textRadio: '',
   })

   const [rating, setrating] = useState({
      id: '',
      img: '',
   })
   const [text, setText] = useState('')
   useEffect(() => {
      props.getvalue({
         rating: rating.id,
         type: data.text,
         price: data.textRadio,
      })
   }, [rating.id, data, text])
   return (
      <Block>
         <Container>
            <Position>
               <BoxWrapper>
                  <Box sx={{ minWidth: 120 }}>
                     <FormControl fullWidth>
                        <InputLabel
                           sx={{
                              '&.Mui-focused': {
                                 color: '#615f5f',
                              },
                           }}
                           id="demo-multiple-checkbox-label"
                        >
                           Sort
                        </InputLabel>
                        <Select
                           labelId="demo-multiple-checkbox-label"
                           id="demo-multiple-checkbox"
                           value={text}
                           onChange={(e) => {
                              setText(e.target.value)
                           }}
                           renderValue={(selected) => selected}
                        >
                           <MenuItem style={{ color: 'grey' }}>All</MenuItem>

                           {names.map((name) => (
                              <MenuItem
                                 style={{ height: '30px' }}
                                 key={name}
                                 value={name}
                                 onClick={() => {
                                    setData({ ...data, text: name })
                                 }}
                              >
                                 <RadioButton />
                                 <SelectItemText>{name}</SelectItemText>
                              </MenuItem>
                           ))}
                           <MenuItem style={{ color: 'grey' }}>prise</MenuItem>
                           {prise.map((element) => (
                              <MenuItem
                                 key={element}
                                 value={element}
                                 onClick={() => {
                                    setData({ ...data, textRadio: element })
                                 }}
                              >
                                 <RadioButton />
                                 <SelectItemText>{element}</SelectItemText>
                              </MenuItem>
                           ))}
                        </Select>
                     </FormControl>
                  </Box>
               </BoxWrapper>
               <BoxWrapper className="select-left">
                  <Box sx={{ minWidth: 120 }}>
                     <FormControl fullWidth>
                        <InputLabel
                           sx={{
                              '&.Mui-focused': {
                                 color: '#615f5f',
                              },
                           }}
                           id="demo-simple-select-label"
                        >
                           Sort by ratings
                        </InputLabel>
                        <Select
                           labelId="demo-simple-select-label"
                           value={rating.img}
                           onChange={(e, id) => {
                              setrating({
                                 id: id.props.altKey,
                                 img: e.target.value,
                              })
                           }}
                        >
                           {images.map((icons) => (
                              <MenuItem
                                 value={icons.images}
                                 altKey={icons.id}
                                 key={icons.id}
                              >
                                 <img src={icons.images} alt="Images" />
                              </MenuItem>
                           ))}
                        </Select>
                     </FormControl>
                  </Box>
               </BoxWrapper>
            </Position>
            <StyledText>
               {data.text && (
                  <Text
                     onClick={() => {
                        setText(null)
                        setData({
                           ...data,
                           text: '',
                        })
                     }}
                  >
                     <StyledVector src={Vector} />
                     {data.text}
                  </Text>
               )}
               {data.textRadio && (
                  <Text
                     className="posisionText"
                     onClick={() => {
                        setText(null)
                        setData({
                           ...data,
                           textRadio: '',
                        })
                     }}
                  >
                     <StyledVector src={Vector} />
                     {data.textRadio}
                  </Text>
               )}
               {rating.id && (
                  <Text
                     onClick={() => {
                        setrating({ id: '', img: null })
                     }}
                  >
                     <StyledVector src={Vector} />
                     <img src={rating.img} alt="rating icons" />
                  </Text>
               )}
               {data.text || data.textRadio || rating.id ? (
                  <StyledClear
                     onClick={() => {
                        setData({
                           text: '',
                           textRadio: '',
                        })
                        setrating({
                           id: '',
                           img: null,
                        })
                        setText(null)
                     }}
                  >
                     Clear all
                  </StyledClear>
               ) : null}
            </StyledText>
         </Container>
      </Block>
   )
}
const Block = styled.div`
   display: block;
`
const Position = styled.div`
   @media (max-width: 375px) {
      display: flex;
      flex-direction: column;
   }
`
const BoxWrapper = styled.div`
   border: 1px solid #adabab;
   border-radius: 2px;
   width: 271px;
   height: 42px;
   &.select-left {
      margin-left: 10px;
      @media (max-width: 375px) {
         width: 271px;
         position: relative;
         top: 10px;
         right: 10px;
      }
   }
   :hover {
      border: 1px solid #615f5f;
   }
   & > div > div > label {
      border: none;
      color: #615f5f;
      top: -5px;
   }
   & > div > div > div {
      border: none;
      & > div {
         padding: 9.5px 14px;
         border: none;
      }
      & > input {
         border: none;
      }
      & > fieldset {
         border: none;
      }
   }
`
const Text = styled.p`
   width: 126px;
   height: 35px;
   background: #f3f3f3;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   color: #828282;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   &.posisionText {
      margin-left: 15px;
      margin-right: 15px;
   }
   @media (max-width: 375px) {
      margin-top: 5px;
   }
`
const Container = styled.div`
   width: 900px;
   display: flex;
   flex-direction: column;
   & > div {
      display: flex;
      padding-bottom: 16px;
   }
`
const StyledVector = styled.img`
   width: 7px;
   height: 7px;
`
const StyledClear = styled.a`
   width: 61px;
   height: 19px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   text-decoration-line: underline;
   color: #828282;
   margin-left: 16px;
   cursor: pointer;
`
const StyledText = styled.div`
   cursor: pointer;
   width: 500px;
   display: flex;
   align-items: center;
   @media (max-width: 375px) {
      flex-wrap: wrap;
      width: 300px;
   }
`
const SelectItemText = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #828282;
   padding-left: 25px;
`
