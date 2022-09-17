import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import styled from 'styled-components'
// eslint-disable-next-line import/no-useless-path-segments
import CounterLikes from '../components/CounterLikes'
import { getFeedbackInnerPage } from '../store/slices/getFeedbackInnerPage'
import Rating from './UI/Rating'

function ShowFeedback({ data }) {
   const [seeMore, setSeeMore] = useState(false)
   return (
      <div>
         <ContainerAddFeedback>
            <RaitingUserContainer>
               <UserContainer>
                  <Logo>{`${data.feedbackOwnerFullName
                     .charAt(0)
                     .toUpperCase()}`}</Logo>
                  <UserName>{data?.feedbackOwnerFullName}</UserName>
               </UserContainer>
               <RatingContainer>
                  <Rating defaultValue={data?.rating} />
                  <span>({data?.rating})</span>
               </RatingContainer>
            </RaitingUserContainer>
            <ContainerText>
               {seeMore ? (
                  <Text key={data.id}>{data?.description}</Text>
               ) : (
                  <Text key={data.id}>{data?.description}...</Text>
               )}

               <ContainerSeeMore>
                  <SeeMore onClick={() => setSeeMore(!seeMore)}>
                     {seeMore ? 'See less' : 'See More'}
                  </SeeMore>
               </ContainerSeeMore>
            </ContainerText>
            <ContainerImage>
               {data?.images.map((i) => (
                  <ImageFeedback src={i} alt="photos" />
               ))}
            </ContainerImage>
            <LikesAndDateContainer>
               <DataToDay>{data?.createdAt.toString()}</DataToDay>
               <CounterLikes
                  id={data.id}
                  likeCount={data.likeCount}
                  disLikeCount={data.disLikeCount}
               />
            </LikesAndDateContainer>
         </ContainerAddFeedback>
      </div>
   )
}

function FeedbackApartmentHouse(props) {
   const { feedback } = useSelector((store) => store.getFeedback)
   // console.log(status)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getFeedbackInnerPage({ id: props.id, size: 3 }))
   }, [dispatch, props?.id])

   return (
      <div>
         {feedback.map((data) => (
            <ShowFeedback data={data} />
         ))}
      </div>
   )
}

const ContainerAddFeedback = styled.div`
   width: 630px;
   margin-top: 46px;
   @media (max-width: 375px) {
      width: 348px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }
`

const ContainerSeeMore = styled.div``

const SeeMore = styled.span`
   width: 64px;
   height: 21px;
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   text-decoration-line: underline;
   color: #266bd3;
   cursor: pointer;
`

const ContainerText = styled.div`
   @media (max-width: 375px) {
      width: 343px;
      overflow-wrap: break-word;
   }
`

const Text = styled.p`
   margin-top: 27px;
   width: 630px;
   overflow-wrap: break-word;
   @media (max-width: 375px) {
      width: 343px;
   }
`

const UserContainer = styled.span`
   display: flex;
   align-items: center;
   & > :nth-child(2) {
      margin-left: 16px;
   }
`

const UserName = styled.span``

const RaitingUserContainer = styled.div`
   width: 630px;
   display: flex;
   justify-content: space-between;
   @media (max-width: 375px) {
      width: 348px;
      display: flex;
      align-items: center;
   }
`
const Logo = styled.div`
   width: 36px;
   height: 36px;
   background: #c4c4c4;
   border-radius: 50%;
   font-style: normal;
   font-weight: 350;
   font-size: 22px;
   line-height: 35px;
   color: #ffffff;
   display: flex;
   align-items: center;
   justify-content: center;
`

const RatingContainer = styled.div`
   @media (max-width: 375px) {
      display: flex;
   }
`

const ContainerImage = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   width: 330px;
   margin-top: 20px;
`

const ImageFeedback = styled.img`
   display: flex;
   width: 80px;
   height: 80px;
   margin-left: 2px;
   margin-right: 2px;
`

const LikesAndDateContainer = styled.div`
   width: 630px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 23px;
   @media (max-width: 375px) {
      width: 348px;
      display: flex;
      align-items: center;
   }
`

const DataToDay = styled.span`
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #828282;
`

export default FeedbackApartmentHouse
