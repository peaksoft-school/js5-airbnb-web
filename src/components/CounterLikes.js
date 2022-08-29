import { useState } from 'react'
import styled from 'styled-components'
import DisLike from '../assets/icons/DisLike.svg'
import Liked from '../assets/icons/Like.svg'

const CounterLikes = () => {
   const [countLike, setCountLike] = useState(0)
   const [disCountLike, setDisCountlike] = useState(0)
   return (
      <ContainerLikes>
         <LikedContainer>
            <ImgLike onClick={() => setCountLike(countLike + 1)} src={Liked} />
            <CounText>{countLike}</CounText>
         </LikedContainer>
         <DisLikedContainer>
            <ImgLike
               onClick={() => setDisCountlike(disCountLike + 1)}
               src={DisLike}
            />
            <CounText>{disCountLike}</CounText>
         </DisLikedContainer>
      </ContainerLikes>
   )
}

const ImgLike = styled.img`
   width: 25px;
   height: 25px;
   background: #f3f3f3;
   border-radius: 2px;
`

const ContainerLikes = styled.div`
   width: 112px;
   height: 35px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const CounText = styled.span`
   width: 10px;
   height: 21px;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #000000;
`

const LikedContainer = styled.div`
   width: 50px;
   display: flex;
   align-items: center;
   justify-content: center;
   justify-content: space-around;
`

const DisLikedContainer = styled.div`
   width: 50px;
   display: flex;
   align-items: center;
   justify-content: center;
   justify-content: space-around;
`

export default CounterLikes
