import React from 'react'
import styled from 'styled-components'
import Button from './UI/Button'
import ImagePicker from './UI/ImagePicker'
import Input from './UI/Input'
import RadioButton from './UI/RadioButton'
import Select from './UI/Select'

const AddAnnouncement = ({ onAdd, selectOptions }) => {
   const [selectValue, setSelectValue] = React.useState('')
   const [getPhoto, setGetPhoto] = React.useState([])
   const [formValue, setFormValue] = React.useState({
      radioButton: '',
      inputMax: '',
      inputPrice: '',
      inputTitle: '',
      description: '',
      inputTown: '',
      inputAddres: '',
   })

   const handleChange = (event) => {
      setFormValue({
         ...formValue,
         [event.target.name]: event.target.value,
      })
   }
   const selectHandlerChange = (e) => {
      setSelectValue(e)
   }

   const submitHandlerForm = (e) => {
      e.preventDefault()
      const objectForm = {
         formValue,
         selectValue,
         getPhoto,
      }
      onAdd(objectForm)
      setFormValue({
         radioButton: '',
         inputMax: '',
         inputPrice: '',
         inputTitle: '',
         description: '',
         inputTown: '',
         inputAddres: '',
      })
      setGetPhoto([])
      setSelectValue('')
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
               <ImagePicker allPhotos={getPhoto} getPhoto={setGetPhoto} />
               <StyledSpanHome>Сome type</StyledSpanHome>
            </StyledDivImagePicker>

            <StyledDivRadioButton>
               <RadioButton
                  onChange={handleChange}
                  name="radioButton"
                  value="apartament"
               />
               <label htmlFor="apartament">Apartament</label>
               <RadioButton
                  onChange={handleChange}
                  name="radioButton"
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
                     name="inputMax"
                     type="number"
                     value={formValue.inputMax}
                  />
                  <Input
                     onChange={handleChange}
                     placeholder="$0"
                     width="245px"
                     name="inputPrice"
                     type="number"
                     value={formValue.inputPrice}
                  />
               </StyledInput>
            </StyedDivInput>
            <div>
               <StyledTitle>Title</StyledTitle>
               <Input
                  onChange={handleChange}
                  width="610px"
                  media="343px"
                  name="inputTitle"
                  value={formValue.inputTitle}
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
                  options={selectOptions?.options}
                  getOptionLabel={(option) => option?.name}
                  getOptionValue={(option) => option?.name}
                  onChange={selectHandlerChange}
                  value={selectValue}
                  label="Region"
               />
            </StyledSelect>
            <StyledTown>
               <StyledParagrafTown>Town / Province</StyledParagrafTown>
               <Input
                  onChange={handleChange}
                  width="610px"
                  media="343px"
                  name="inputTown"
                  value={formValue.inputTown}
               />
            </StyledTown>
            <StyledAddres>
               <StyledParagrafAddres>Address</StyledParagrafAddres>
               <Input
                  onChange={handleChange}
                  width="610px"
                  media="343px"
                  name="inputAddres"
                  value={formValue.inputAddres}
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
      top: 510px;
      display: flex;
      flex-direction: row;
      flex-direction: column;
      gap: 60px;
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
export default AddAnnouncement
