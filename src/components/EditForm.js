import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { region } from '../pages/InnerPageFilterCards'
import { editAnnountcementPost } from '../store/slices/editAnnountcementSlice'
import Button from './UI/Button'
import ImagePicker from './UI/ImagePicker'
import Input from './UI/Input'
import RadioButton from './UI/RadioButton'
import Select from './UI/Select'
import SnackBar from './UI/SnackBar'

const EditForm = () => {
   const { status, data } = useSelector((state) => state.editAnnountcement)
   const dispatch = useDispatch()
   const [photos, setPhotos] = useState([])
   const [regionId, setRegionId] = useState('')
   const [open, setOpen] = useState(false)
   const [formValue, setFormValue] = useState({
      houseType: '',
      maxGuests: '',
      price: '',
      title: '',
      description: '',
      townProvince: '',
      address: '',
   })
   const [type, settype] = useState({
      radio1: false,
      radio2: false,
   })
   const img = data?.images?.map((i) => {
      return {
         type: 'old',
         data_url: i,
         file: {
            lastModified: 1660305041438,
            lastModifiedDate: `${new Date()}{}`,
            name: i.split('/')[3],
            size: 109350,
            type: `image/${i?.split('/')[3]?.split('.')[1]}`,
            webkitRelativePath: '',
         },
      }
   })
   useEffect(() => {
      if (data?.houseType === 'APARTMENT') {
         settype({
            radio1: true,
            radio2: false,
         })
      }
      if (data?.houseType === 'HOUSE') {
         settype({
            radio1: false,
            radio2: true,
         })
      }
      setFormValue({
         ...formValue,
         houseType: data?.houseType,
         maxGuests: data?.maxGuests,
         price: data?.price,
         title: data?.title,
         description: data?.description,
         townProvince: data?.townProvince,
         address: data?.location,
      })
      setRegionId(data?.regionId)
      setPhotos(img)
   }, [data?.houseType])
   const handleChangeSelectId = (id) => {
      setRegionId(id)
   }
   const handleChange = (Event) => {
      if (Event.target.value === 'APARTMENT') {
         settype({
            radio1: true,
            radio2: false,
         })
      }
      if (Event.target.value === 'HOUSE') {
         settype({
            radio1: false,
            radio2: true,
         })
      }
      setFormValue({
         ...formValue,
         [Event.target.name]: Event.target.value,
      })
   }
   const submitHandlerForm = (e) => {
      e.preventDefault()
      setOpen((prev) => !prev)
      const formObject = {
         id: data?.id,
         houseType: formValue.houseType,
         maxGuests: +formValue.maxGuests,
         price: +formValue.price,
         title: formValue.title,
         description: formValue.description,
         regionId,
         townProvince: formValue.townProvince,
         address: formValue.address,
      }
      dispatch(editAnnountcementPost({ photos, formObject }))
      setFormValue({
         houseType: '',
         maxGuests: '',
         price: '',
         title: '',
         description: '',
         townProvince: '',
         address: '',
      })
      setRegionId('')
      setPhotos([])
      settype({
         radio1: false,
         radio2: false,
      })
   }
   const nav = useNavigate()
   useEffect(() => {
      if (open) {
         setTimeout(() => {
            nav(-1)
         }, 3000)
      }
   }, [open])
   return (
      <div>
         {status === 'error' ? (
            <SnackBar
               message="что то пошло не так"
               text="повторите еще раз"
               open={open}
               onClose={setOpen}
            />
         ) : (
            ''
         )}
         {status === 'success' ? (
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
                  In this form, we ll collect some basic and additionalл
                  information about your listing.
               </StyledParagraf>
               <StyledSpan>Image Max 4 photo</StyledSpan>
               <ImagePicker allPhotos={photos} getPhoto={setPhotos} />
               <StyledSpanHome>Home type</StyledSpanHome>
            </StyledDivImagePicker>

            <StyledDivRadioButton>
               <RadioButton
                  onChange={handleChange}
                  name="houseType"
                  value="APARTMENT"
                  id="apartament"
                  checked={type.radio1}
               />
               <label htmlFor="apartament">Apartament</label>
               <RadioButton
                  onChange={handleChange}
                  name="houseType"
                  value="HOUSE"
                  checked={type.radio2}
                  id="House"
               />
               <label htmlFor="House">House</label>
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
               <Button height="37px">Submit</Button>
            </StyledButton>
         </StyledForm>
      </div>
   )
}
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
   font-family: 'sans-serif';
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
   font-family: 'sans-serif';
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
   width: 47px;
   height: 19px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #363636;
   @media screen and (max-width: 375px) {
      width: 47px;
      margin-left: 6px;
   }
`
const StyledDivImagePicker = styled.div`
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
export default EditForm
