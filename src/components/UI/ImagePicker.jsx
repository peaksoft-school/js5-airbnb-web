import React, { useState, useEffect } from 'react'
import ImageUploading from 'react-images-uploading'
import styled from 'styled-components'
import DeletePhoto from '../../assets/icons/delete-svgrepo-com.svg'
import PhotoIcon from '../../assets/icons/DevicesIcon.svg'
import MediaPhotoIcon from '../../assets/icons/DevicesIconMedia.svg'
import RepeatPhoto from '../../assets/icons/repeat-svgrepo-com.svg'

const ImagePicker = ({ ...props }) => {
   const [photos, setPhotos] = useState(props.allPhotos)
   const [showTextAfterInput, setshowTextAfterInput] = useState(true)
   const [closeInputFile, setCloseInputFile] = useState(true)
   const [imageSizeTextError, setImageSizeTextError] = useState(true)
   const maxPhotos = 4

   // you can give initialstate -> array, when you call this component
   // and give props allPhotos
   // you can get all photos and send, when you call this component
   // and give props function -> getPhoto

   const getAllPhotoAndSend = (getphotofile) => props.getPhoto(getphotofile)

   const onChange = (imageList) => {
      // eslint-disable-next-line array-callback-return, consistent-return
      const errorImageText = imageList.find((item) => {
         if (item.file.size > 100000) {
            setImageSizeTextError(false)
            return item
         }
      })
      if (errorImageText) return
      setPhotos(imageList)
      getAllPhotoAndSend(imageList)
      setImageSizeTextError(true)
      setshowTextAfterInput(false)
   }
   useEffect(() => {
      if (photos.length === 0) {
         setshowTextAfterInput(true)
      }
      if (photos.length === 4) {
         setCloseInputFile(false)
      } else {
         setCloseInputFile(true)
      }
   }, [photos])

   return (
      <DivWrapper>
         <DivPhotosAndText>
            <ImageUploading
               multiple
               value={photos}
               onChange={onChange}
               maxNumber={maxPhotos}
               dataURLKey="data_url"
            >
               {({
                  imageList,
                  onImageUpload,
                  onImageUpdate,
                  onImageRemove,
                  dragProps,
               }) => (
                  // write your building UI
                  <DivContainerPhotos>
                     {imageList.map((image, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <DivImgButton key={index}>
                           <ImgPhoto src={image.data_url} alt="#" />
                           <ButtonRedactor>
                              <ButtonRedactor2>
                                 <RepeatButton
                                    onClick={() => onImageUpdate(index)}
                                 />
                                 <DeletButton
                                    onClick={() => onImageRemove(index)}
                                 />
                              </ButtonRedactor2>
                           </ButtonRedactor>
                        </DivImgButton>
                     ))}
                     &nbsp;
                     {closeInputFile && (
                        <WrapperErrorText>
                           <ButtonPhotoWrapper>
                              <ButtonPhoto
                                 onClick={onImageUpload}
                                 {...dragProps}
                              />
                           </ButtonPhotoWrapper>
                           {imageSizeTextError || 'Size your photo is bigger'}
                        </WrapperErrorText>
                     )}
                  </DivContainerPhotos>
               )}
            </ImageUploading>
            {showTextAfterInput && (
               <DivTextAfterInput>
                  <P3>
                     {props.title ? props.title : 'Add photos to the review'}
                  </P3>
                  <P4>
                     {props.text
                        ? props.text
                        : 'it will become more noticeable and even more useful. ' +
                          'You can upload up to 4 photos.'}
                  </P4>
               </DivTextAfterInput>
            )}
         </DivPhotosAndText>
      </DivWrapper>
   )
}
export default ImagePicker

const DivTextAfterInput = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   margin: 16px;
   @media screen and (max-width: 375px) {
      margin: 0px 10px 10px 16px;
   }
`

const P3 = styled.p`
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   color: #266bd3;
   margin: 4px;
`
const P4 = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #828282;
   margin: 4px;
`
const DivWrapper = styled.div`
   box-sizing: border-box;
   width: 503px;
   height: 135px;
   margin: 0;
   padding: 0;
   font-family: 'Inter';
   @media screen and (max-width: 375px) {
      width: 344px;
      height: 128px;
   }
`

const DivPhotosAndText = styled.div`
   display: flex;
`
const DivContainerPhotos = styled.div`
   display: flex;
   position: relative;
`
const DivImgButton = styled.div`
   &:hover > div {
      display: block;
   }
`
const ButtonPhotoWrapper = styled.div`
   background: #f3f3f3;
   width: ${(props) => (props.width ? props.width : '135px')};
   height: ${(props) => (props.height ? props.height : '135px')};
   display: flex;
   justify-content: center;
   align-items: center;
   @media screen and (max-width: 375px) {
      width: ${(props) => (props.mediawidth ? props.mediawidth : '80px')};
      height: ${(props) => (props.mediaheight ? props.mediaheight : '80px')};
   }
`
const WrapperErrorText = styled.div`
   display: flex;
   flex-direction: column;
   width: 135px;
   @media screen and (max-width: 375px) {
      width: 80px;
   }
`
const ButtonPhoto = styled.label`
   background-image: url(${PhotoIcon});
   display: block;
   background-position: center;
   width: 43px;
   height: 32px;
   z-index: 1;
   background-repeat: no-repeat;
   cursor: pointer;
   @media screen and (max-width: 375px) {
      background-image: url(${MediaPhotoIcon});
      display: flex;
      width: 25px;
      height: 19px;
   }
`
const ImgPhoto = styled.img`
   width: 135px;
   height: 135px;
   margin-right: 10px;
   @media screen and (max-width: 375px) {
      width: 80px;
      height: 80px;
   }
`
const ButtonRedactor = styled.div`
   display: none;
`
const ButtonRedactor2 = styled.div`
   display: flex;
   align-items: flex-end;
   justify-content: center;
   z-index: 1;
   background-color: #80808063;
   width: 135px;
   height: 135px;
   position: absolute;
   top: 0;
   @media screen and (max-width: 375px) {
      width: 80px;
      height: 80px;
   }
`
const DeletButton = styled.button`
   background-image: url(${DeletePhoto});
   width: 30px;
   height: 30px;
   border: none;
   fill: white;
   background-color: transparent;
   background-repeat: no-repeat;
   background-position: 50% 50%;
   cursor: pointer;
`
const RepeatButton = styled.button`
   background-image: url(${RepeatPhoto});
   background-position: 50% 50%;
   background-repeat: no-repeat;
   background-color: transparent;
   width: 30px;
   border: none;
   height: 30px;
   cursor: pointer;
`
