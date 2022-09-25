import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import DisLike from '../assets/icons/DisLike.svg'
import Liked from '../assets/icons/Like.svg'
import {
   postDiSLikesInnerPage,
   postLikesInnerPage,
} from '../store/slices/postLikesInnerPageFeedback'

const CounterLikes = (props) => {
   const dispatch = useDispatch()
   const likeHandler = () => dispatch(postLikesInnerPage(props.id))
   const disLikeHandler = () => dispatch(postDiSLikesInnerPage(props.id))
   const counter = {
      like: '',
      dislike: '',
   }
   if (`${props.likeCount}`.includes('-')) {
      counter.like = `${props.likeCount}`.slice(1)
   } else {
      counter.like = props.likeCount
   }
   if (`${props.disLikeCount}`.includes('-')) {
      counter.dislike = `${props.disLikeCount}`.slice(1)
   } else {
      counter.dislike = props.disLikeCount
   }
   return (
      <ContainerLikes>
         <LikedContainer>
            <ImgLike onClick={likeHandler} src={Liked} />
            <CounText>{counter.like}</CounText>
         </LikedContainer>
         <DisLikedContainer>
            <ImgLike onClick={disLikeHandler} src={DisLike} />
            <CounText>{counter.dislike}</CounText>
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
