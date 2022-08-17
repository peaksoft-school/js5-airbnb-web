import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
// import apiFetch from '../api/apiFetch'
import { getPosts } from '../store/slices/addAnnouncementSlice'
import Button from './UI/Button'
import ImagePicker from './UI/ImagePicker'
import Input from './UI/Input'
import RadioButton from './UI/RadioButton'
import Select from './UI/Select'

const options = [
   {
      id: 1,
      regionName: 'Batken',
   },
   {
      id: 2,
      regionName: 'Jalalabat',
   },
   {
      id: 3,
      regionName: 'Naryn',
   },
   {
      id: 4,
      regionName: 'Issyk-Kul',
   },
   {
      id: 5,
      regionName: 'Talas',
   },
   {
      id: 6,
      regionName: 'Osh',
   },
   {
      id: 7,
      regionName: 'Chui',
   },
   {
      id: 8,
      regionName: 'Bishkek',
   },
]

const AddAnnouncementForm = () => {
   const dispatch = useDispatch()
   const state = useSelector((state) => state.addAnnoutcement.status)

   const [regionId, setRegionId] = React.useState('2')
   // const [photo, setPhoto] = React.useState('')
   // console.log(photo)
   const [images, setImages] = useState([])
   const [formValue, setFormValue] = React.useState({
      images,
      houseType: '',
      maxGuests: Number(''),
      price: Number(''),
      title: '',
      description: '',
      townProvince: '',
      address: '',
      regionId: '2',
   })
   const handleChange = (event) => {
      setFormValue({
         ...formValue,
         [event.target.name]: event.target.value,
      })
   }
   const selectHandlerChange = (e) => {
      setRegionId(e)
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
   const formHandlerPost = async (formValuePost) => {
      dispatch(
         getPosts({
            url: 'http://airbnb-env.eba-bxmudt83.eu-central-1.elasticbeanstalk.com/api/announcements/save',
            method: 'POST',
            jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIGRldGFpbHMiLCJpc3MiOiJwZWFrc29mdCIsImV4cCI6MTY2MDc0NDYzMSwiaWF0IjoxNjYwNzQxMDMxLCJ1c2VybmFtZSI6Inp1a29rYWxpbG92In0.qreqjTrwdSOgxB89bDCKB9y74K7aqc56FEB48HEDJ7E',
            role: 'USER',
            body: formValuePost,
         })
      )
   }
   const ImagePickerHandler = async (i) => {
      console.log(i)
      const formData = new FormData()
      formData.append('file', i)
      try {
         const res = await fetch(
            'http://airbnb-env.eba-bxmudt83.eu-central-1.elasticbeanstalk.com/api/file/upload',
            {
               method: 'POST',
               headers: {
                  Authorization: `Bearer ${''}`,
               },
               body: formData,
            }
         )
         const date = await res.json()
         // if (!res.ok) {
         //    throw new Error('img Photos')
         // }
         // setImages(date)
         console.log(date)
      } catch (error) {
         console.log(error)
      }
   }
   const submitHandlerForm = (e) => {
      e.preventDefault()
      formHandlerPost(formValue)
      setFormValue({
         houseType: '',
         maxGuests: '',
         price: '',
         title: '',
         description: '',
         townProvince: '',
         address: '',
      })
      setImages([])
      setRegionId('')
   }

   return (
      <div>
         <StyledForm onSubmit={submitHandlerForm}>
            <StyledDivImagePicker>
               <StyledH1>Hi! Lets get started listing your place.</StyledH1>
               <StyledParagraf>
                  In this form, we ll collect some basic and additionalл
                  information about your listing.
               </StyledParagraf>
               <StyledSpan>Image Max 4 photo</StyledSpan>
               <ImagePicker
                  setPhotos={ImagePickerHandler}
                  allPhotos={images}
                  getPhoto={setImages}
               />
               <StyledSpanHome>Home type</StyledSpanHome>
            </StyledDivImagePicker>

            <StyledDivRadioButton>
               <RadioButton
                  onChange={handleChange}
                  name="houseType"
                  value="APARTMENT"
               />
               <label htmlFor="apartament">Apartament</label>
               <RadioButton
                  onChange={handleChange}
                  name="houseType"
                  value="HOUSE"
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
                  options={options}
                  getOptionLabel={(option) => option?.regionName}
                  getOptionValue={(option) => option?.id}
                  onChange={selectHandlerChange}
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
               {state === 'loading' && <h1>loading..</h1>}
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
export default AddAnnouncementForm
