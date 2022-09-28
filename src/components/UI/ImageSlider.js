import { useEffect, useState } from 'react'
import styled from 'styled-components'

const ImageSlider = ({ images }) => {
   const [selectImg, setSelectImage] = useState('')
   useEffect(() => {
      setSelectImage(images[0])
   }, [images])
   const arrayImages = images?.filter((i) => i !== selectImg)

   return (
      <div>
         <ContainerPhotos>
            <DateImg src={selectImg} alt="#" />
            <LittleContainerImage>
               {arrayImages?.map((i, index) => (
                  <Dateimg2
                     onClick={() => {
                        setSelectImage(i)
                     }}
                     //  eslint-disable-next-line react/no-array-index-key
                     key={index}
                     src={i}
                  />
               ))}
            </LittleContainerImage>
         </ContainerPhotos>
      </div>
   )
}
export default ImageSlider

const ContainerPhotos = styled.div`
   @media (max-width: 375px) {
      transition: 0.8s all ease;
      width: 375px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
`

const DateImg = styled.img`
   width: 630px;
   height: 507px;
   @media (max-width: 375px) {
      transition: 0.8s all ease;
      width: 343px;
      height: 276px;
   }
`

const LittleContainerImage = styled.div`
   display: flex;
   margin-top: 10px;
   align-items: center;
   justify-content: flex-start;
   gap: 20.5px;
   @media (max-width: 375px) {
      transition: 0.8s all ease;
      width: 343px;
   }
`

const Dateimg2 = styled.img`
   width: 196px;
   height: 137px;
   cursor: pointer;
   @media (max-width: 375px) {
      width: 105px;
      height: 57px;
   }
`
