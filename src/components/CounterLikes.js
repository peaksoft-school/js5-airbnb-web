import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import DisLike from '../assets/icons/DisLike.svg'
import Liked from '../assets/icons/likehandle.svg'
import {
   leavedisLikeFeedback,
   leaveLikeFeedback,
} from '../store/slices/LikeAndBookmarkSlice'
import { showSuccessMessage } from '../utils/helpers/ToastyfyFunction'

const CounterLikes = (props) => {
   const user = useSelector((s) => s.login?.login)
   const dispatch = useDispatch()
   const [, setopensignup] = useSearchParams()
   const [bool, setbool] = useState(false)
   const [dislike, setdislike] = useState(false)
   return (
      <ContainerLikes>
         <LikedContainer>
            <ImgLike
               onClick={() => {
                  if (user?.jwt) {
                     setbool((p) => !p)
                     if (!bool) {
                        dispatch(
                           leaveLikeFeedback({ id: props.id, bool: !bool })
                        )
                        showSuccessMessage('Successfully post like')
                     } else {
                        dispatch(
                           leaveLikeFeedback({ id: props.id, bool: !bool })
                        )
                        showSuccessMessage('Successfully clear like')
                     }
                  } else {
                     setopensignup({ userSignup: 'open' })
                  }
               }}
               src={Liked}
            />
            <CounText>{props?.like}</CounText>
         </LikedContainer>
         <DisLikedContainer>
            <ImgLike
               onClick={() => {
                  if (user?.jwt) {
                     setdislike((p) => !p)
                     if (!dislike) {
                        dispatch(
                           leavedisLikeFeedback({
                              id: props.id,
                              bool: !dislike,
                           })
                        )
                        showSuccessMessage('Successfully post dislike')
                     } else {
                        dispatch(
                           leavedisLikeFeedback({
                              id: props.id,
                              bool: !dislike,
                           })
                        )
                        showSuccessMessage('Successfully clear dislike')
                     }
                  } else {
                     setopensignup({ userSignup: 'open' })
                  }
               }}
               src={DisLike}
            />
            <CounText>{props?.dislike}</CounText>
         </DisLikedContainer>
      </ContainerLikes>
   )
}

const ImgLike = styled.img`
   width: 25px;
   height: 25px;
   background: #f3f3f3;
   border-radius: 2px;
   cursor: pointer;
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
