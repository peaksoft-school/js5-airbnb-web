import React, { useState } from 'react'
import styled from 'styled-components'
import SkeletonUser from '../assets/icons/SkeletonUser.png'
// eslint-disable-next-line import/no-useless-path-segments
import CounterLikes from '../components/CounterLikes'
import Rating from './UI/Rating'

function ShowFeedback({ i }) {
   const [seeMore, setSeeMore] = useState(false)
   const today = new Date()

   return (
      <ContainerAddFeedback>
         <RaitingUserContainer>
            <UserContainer>
               <SkeletoneUser src={SkeletonUser} />
               <UserName>Anna Annov</UserName>
            </UserContainer>
            <RatingContainer>
               <Rating defaultValue={i.ratingState} />
               <span>({i.ratingState})</span>
            </RatingContainer>
         </RaitingUserContainer>
         <ContainerText>
            {seeMore ? (
               <Text key={i.id}>{i.textState}</Text>
            ) : (
               <Text key={i.id}>{i.textState.substring(10, 250)}...</Text>
            )}

            <ContainerSeeMore>
               <SeeMore onClick={() => setSeeMore(!seeMore)}>
                  {seeMore ? 'See less' : 'See More'}
               </SeeMore>
            </ContainerSeeMore>
         </ContainerText>
         <ContainerImage>
            {i.photos.map((i) => (
               <ImageFeedback src={i.data_url} alt="photos" />
            ))}
         </ContainerImage>
         <LikesAndDateContainer>
            <DataToDay>{today.toLocaleDateString()}</DataToDay>
            <CounterLikes />
         </LikesAndDateContainer>
      </ContainerAddFeedback>
   )
}

function FeedbackApartmentHouse({ add }) {
   return (
      <>
         {add.map((i) => {
            return <ShowFeedback i={i} />
         })}
      </>
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

const UserContainer = styled.div`
   display: flex;
   align-items: center;
`

const UserName = styled.span`
   margin-left: 10px;
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

const SkeletoneUser = styled.img``

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
