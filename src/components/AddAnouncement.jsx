import React from 'react'
import styled from 'styled-components'
import ApiFetch from '../api/ApiFetch'
import Button from './UI/Button'
import ImagePicker from './UI/ImagePicker'
import Input from './UI/Input'
import RadioButton from './UI/RadioButton'
import Select from './UI/Select'

export const options = [
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

const AddAnnouncement = ({ onSubmit }) => {
   const [regionId, setRegionId] = React.useState('2')
   const [photos, setPhotos] = React.useState([])
   const [formValue, setFormValue] = React.useState({
      images: ['string'],
      houseType: '',
      maxGuests: '',
      price: '',
      title: '',
      description: '',
      townProvince: '',
      address: '',
      regionId: '1',
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

   const formHandlerPost = async () => {
      const URL = await ApiFetch({
         url: 'api/announcements/save',
         method: 'POST',
         token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIGRldGFpbHMiLCJpc3MiOiJwZWFrc29mdCIsImV4cCI6MTY2MDMyMDUxNSwiaWF0IjoxNjYwMzE2OTE1LCJ1c2VybmFtZSI6InN0cmluZ3pjIn0.BZeQh8MugfMtf3rQ7SLKJ4STptVEJLHHkoAMHDXgexI',
         role: 'USER',
         body: formValue,
      })
      console.log(URL)
   }
   const submitHandlerForm = (e) => {
      e.preventDefault()
      const objectForm = {
         formValue,
         regionId,
      }
      formHandlerPost(objectForm)
      onSubmit(objectForm)
      setFormValue({
         houseType: '',
         maxGuests: '',
         price: '',
         addannouncementTitle: '',
         description: '',
         townProvince: '',
         address: '',
      })
      setPhotos([])
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
               <ImagePicker allPhotos={photos} getPhoto={setPhotos} />
               <StyledSpanHome>Сome type</StyledSpanHome>
            </StyledDivImagePicker>

            <StyledDivRadioButton>
               <RadioButton
                  onChange={handleChange}
                  name="houseType"
                  value="Apartament"
               />
               <label htmlFor="apartament">Apartament</label>
               <RadioButton
                  onChange={handleChange}
                  name="houseType"
                  value="House"
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
                  getOptionValue={(option) => option?.regionName}
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
               <Button height="37px">Submit</Button>
            </StyledButton>
         </StyledForm>
      </div>
   )
}
export default AddAnnouncement

const StyledForm = styled.form`
   margin-left: 415px;
   @media screen and (max-width: 480px) {
      margin: 10px;
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
   @media screen and (max-width: 480px) {
      width: 343px;
      height: 38px;
      margin-left: 16px;
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
   @media screen and (max-width: 480px) {
      width: 343px;
      height: 38px;
      margin-left: 16px;
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
   @media screen and (max-width: 480px) {
      width: 47px;
      height: 19px;
      margin-left: 16px;
   }
`
const StyledDivImagePicker = styled.div`
   @media screen and (max-width: 480px) {
      margin-left: 16px;
   }
`
const StyledSpanHome = styled.span`
   @media screen and (max-width: 480px) {
      margin-left: 16px;
   }
`
const StyledDivRadioButton = styled.div`
   width: 200px;
   display: flex;
   justify-content: space-around;
   margin-top: 21px;
   @media screen and (max-width: 480px) {
      margin-left: 8%;
   }
`
const StyedDivInput = styled.div`
   width: 510px;
   margin-top: 30px;
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
   @media screen and (max-width: 480px) {
      position: absolute;
      left: 37px;
      top: 460px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-direction: column;
      gap: 55px;
   }
`
const StyledInput = styled.div`
   display: flex;
   justify-content: space-between;
   @media screen and (max-width: 480px) {
      width: 245px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 16px;
      margin-top: 45px;
      gap: 40px;
   }
`
const StyledTitle = styled.h4`
   margin-top: 28px;
   margin-bottom: 18px;
   @media screen and (max-width: 480px) {
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
   @media screen and (max-width: 480px) {
      margin-left: 16px;
   }
`
const StyledTextarea = styled.textarea`
   width: 610px;
   height: 104px;
   resize: none;
   outline: none;
   padding: 10px 8px 10px 16px;
   @media screen and (max-width: 480px) {
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
   @media screen and (max-width: 480px) {
      margin-left: 16px;
   }
`
const StyledAddres = styled.div`
   margin-bottom: 22px;
`
const StyledButton = styled.div`
   margin-bottom: 170px;
   margin-left: 459px;
   @media screen and (max-width: 480px) {
      margin-left: 253px;
   }
`
const StyledParagrafAddres = styled.p`
   margin-bottom: 18px;
   @media screen and (max-width: 480px) {
      margin-left: 16px;
   }
`
