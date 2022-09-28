import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { region } from '../pages/InnerPageFilterCards'
import { addAnnountcementPost } from '../store/slices/addAnnountcementSlice'
import Button from './UI/Button'
import ImagePicker from './UI/ImagePicker'
import Input from './UI/Input'
import RadioButton from './UI/RadioButton'
import Select from './UI/Select'
import SnackBar from './UI/SnackBar'

const AddAnnouncementForm = () => {
   const { status, error } = useSelector((state) => state.addAnnountcement)
   const dispatch = useDispatch()
   const [photos, setPhotos] = useState([])
   const [regionId, setRegionId] = useState('')
   const [open, setOpen] = useState(false)
   const [formValue, setFormValue] = React.useState({
      houseType: '',
      maxGuests: '',
      price: '',
      title: '',
      description: '',
      townProvince: '',
      address: '',
   })
   const handleChangeSelectId = (id) => {
      setRegionId(id)
   }
   const [radio, setradio] = useState({
      radio1: false,
      radio2: false,
   })
   const handleChange = (Event) => {
      if (Event.target.value === 'APARTMENT') {
         setradio({
            radio1: true,
         })
      }
      if (Event.target.value === 'HOUSE') {
         setradio({
            radio2: true,
         })
      }
      setFormValue({
         ...formValue,
         [Event.target.name]: Event.target.value,
      })
   }
   const isValidForm = () => {
      const valueIsValid =
         formValue.price.length >= 1 &&
         formValue.address.length >= 1 &&
         formValue.description.length >= 1 &&
         formValue.maxGuests.length >= 1 &&
         formValue.townProvince.length >= 1
      return valueIsValid
   }
   const submitHandlerForm = (e) => {
      e.preventDefault()
      setOpen((prev) => !prev)
      const formObject = {
         houseType: formValue.houseType,
         maxGuests: +formValue.maxGuests,
         price: +formValue.price,
         title: formValue.title,
         description: formValue.description,
         regionId,
         townProvince: formValue.townProvince,
         address: formValue.address,
      }
      dispatch(addAnnountcementPost({ photos, formObject }))
      setFormValue({
         houseType: null,
         maxGuests: '',
         price: '',
         title: '',
         description: '',
         townProvince: '',
         address: '',
      })
      setradio({
         radio1: false,
         radio2: false,
      })
      setRegionId('')
      setPhotos([])
   }

   return (
      <div>
         {error?.message === 'Rejected' ? (
            <SnackBar
               message="что то пошло не так"
               text="повторите еще раз"
               open={open}
               onClose={setOpen}
            />
         ) : (
            ''
         )}
         {status === 'succes' ? (
            <SnackBar
               severity="success"
               message="Все успешно"
               open={open}
               onClose={setOpen}
            />
         ) : (
            ''
         )}
         <StyledForm onSubmit={submitHandlerForm}>
            <StyledDivImagePicker>
               <StyledH1>Hi! Lets get started listing your place.</StyledH1>
               <StyledParagraf>
                  In this form, we ll collect some basic and additional
                  information
                  <br /> about your listing.
               </StyledParagraf>
               <StyledSpan>
                  <p>Image</p> <p>Max 4 photo</p>
               </StyledSpan>
               <ImagePicker allPhotos={photos} getPhoto={setPhotos} />
            </StyledDivImagePicker>
            <StyledSpanHome>Home type</StyledSpanHome>
            <StyledDivRadioButton>
               <WrapperRadio>
                  <RadioButton
                     onChange={handleChange}
                     name="houseType"
                     value="APARTMENT"
                     checked={radio.radio1}
                     id="Apartament"
                  />
                  <label htmlFor="Apartament">Apartament</label>
               </WrapperRadio>
               <WrapperRadio>
                  <RadioButton
                     onChange={handleChange}
                     name="houseType"
                     value="HOUSE"
                     checked={radio.radio2}
                     id="House"
                  />
                  <label htmlFor="House">House</label>
               </WrapperRadio>
            </StyledDivRadioButton>

            <StyedDivInput>
               <StyledDivText>
                  <h4>Max of Guests</h4>
                  <h4>Price</h4>
               </StyledDivText>
               <StyledInput>
                  <Input
                     onChange={handleChange}
                     placeholder="0"
                     width="245px"
                     name="maxGuests"
                     type="number"
                     value={formValue.maxGuests}
                  />
                  <Input
                     onChange={handleChange}
                     placeholder="$0"
                     width="245px"
                     name="price"
                     type="number"
                     value={formValue.price}
                  />
               </StyledInput>
            </StyedDivInput>
            <div>
               <StyledTitle>Title</StyledTitle>
               <Input
                  onChange={handleChange}
                  width="610px"
                  media="343px"
                  name="title"
                  value={formValue.title}
               />
            </div>
            <div>
               <StyledParagrafDescription>
                  Description of listing
               </StyledParagrafDescription>
               <StyledTextarea
                  onChange={(e) => handleChange(e)}
                  name="description"
                  value={formValue.description}
               />
            </div>
            <StyledSelect>
               <Select
                  options={region}
                  getOptionLabel={(option) => option?.regionName}
                  getOptionValue={(option) => option?.id}
                  onChange={handleChangeSelectId}
                  value={regionId}
                  label="Region"
               />
            </StyledSelect>
            <StyledTown>
               <StyledParagrafTown>Town / Province</StyledParagrafTown>
               <Input
                  onChange={handleChange}
                  width="610px"
                  media="343px"
                  name="townProvince"
                  value={formValue.townProvince}
               />
            </StyledTown>
            <StyledAddres>
               <StyledParagrafAddres>Address</StyledParagrafAddres>
               <Input
                  onChange={handleChange}
                  width="610px"
                  media="343px"
                  name="address"
                  value={formValue.address}
               />
            </StyledAddres>
            <StyledButton>
               <Button disabled={isValidForm() || 'true'} height="37px">
                  Submit
               </Button>
            </StyledButton>
         </StyledForm>
      </div>
   )
}
const WrapperRadio = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   & > :nth-child(2) {
      margin-left: 10px;
   }
`
const StyledForm = styled.form`
   margin-left: 415px;
   padding: 0;
   @media screen and (max-width: 375px) {
      margin: 0;
      padding: 0;
   }
`
const StyledH1 = styled.h1`
   width: 358px;
   height: 19px;
   margin-bottom: 20px;
   margin-top: 40px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   text-transform: uppercase;
   @media screen and (max-width: 375px) {
      width: 343px;
      height: 38px;
   }
`
const StyledParagraf = styled.p`
   width: 610px;
   height: 38px;
   margin-bottom: 30px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   @media screen and (max-width: 375px) {
      width: 343px;
      height: 38px;
   }
`
const StyledSpan = styled.span`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 150px;
   height: 19px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   margin-bottom: 14px;
   & > :nth-child(1) {
      color: #363636;
   }
   & > :nth-child(2) {
      display: flex;
      align-items: center;
      color: gray;
   }
   @media screen and (max-width: 375px) {
      width: 47px;
      margin-left: 6px;
   }
`
const StyledDivImagePicker = styled.div`
   margin-bottom: 30px;
   & .fhthZJ {
      height: 148px !important;
      margin-top: 14px;
   }
   @media screen and (max-width: 375px) {
      margin-left: 16px;
      & .fhthZJ {
         height: 100px !important;
         margin-top: 14px;
      }
   }
`
const StyledSpanHome = styled.span`
   margin-top: 28px;
   @media screen and (max-width: 375px) {
      margin-left: 3px;
   }
`
const StyledDivRadioButton = styled.div`
   width: 200px;
   display: flex;
   justify-content: space-around;
   margin-top: 21px;
   @media screen and (max-width: 375px) {
      margin-left: 16px;
   }
`
const StyedDivInput = styled.div`
   width: 510px;
   margin-top: 30px;
   @media screen and (max-width: 375px) {
      margin-left: 10px;
   }
`
const StyledDivText = styled.div`
   display: flex;
   width: 306px;
   justify-content: space-between;
   margin-bottom: 18px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   color: #363636;
   @media screen and (max-width: 375px) {
      position: absolute;
      left: 19px;
      top: 410px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-direction: column;
      gap: 60px;
   }
`
const StyledInput = styled.div`
   display: flex;
   justify-content: space-between;
   @media screen and (max-width: 375px) {
      width: 245px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 45px;
      gap: 40px;
   }
`
const StyledTitle = styled.h4`
   margin-top: 28px;
   margin-bottom: 18px;
   @media screen and (max-width: 375px) {
      margin-left: 16px;
   }
`
const StyledParagrafDescription = styled.p`
   margin-top: 28px;
   margin-bottom: 18px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   color: #363636;
   @media screen and (max-width: 375px) {
      margin-left: 16px;
   }
`
const StyledTextarea = styled.textarea`
   width: 610px;
   height: 104px;
   resize: none;
   outline: none;
   padding: 10px 8px 10px 16px;
   @media screen and (max-width: 375px) {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 10px 8px 10px 16px;
      gap: 10px;
      width: 343px;
      height: 104px;
      background: #ffffff;
      border: 1px solid #c4c4c4;
      border-radius: 2px;
      resize: none;
      margin-left: 16px;
   }
`
const StyledSelect = styled.div`
   margin-top: 28px;
`
const StyledTown = styled.div`
   margin-bottom: 28px;
`

const StyledParagrafTown = styled.p`
   margin-bottom: 28px;
   @media screen and (max-width: 375px) {
      margin-left: 16px;
   }
`
const StyledAddres = styled.div`
   margin-bottom: 22px;
`
const StyledButton = styled.div`
   margin-bottom: 170px;
   margin-left: 459px;
   @media screen and (max-width: 375px) {
      margin-left: 251px;
   }
`
const StyledParagrafAddres = styled.p`
   margin-bottom: 18px;
   @media screen and (max-width: 375px) {
      margin-left: 16px;
   }
`
export default AddAnnouncementForm
