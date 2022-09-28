import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getAllFeedback } from '../store/slices/LikeAndBookmarkSlice'
import CounterLikes from './CounterLikes'
import Button from './UI/Button'
import Rating from './UI/Rating'

function ShowFeedback({ i }) {
   const [seeMore, setSeeMore] = useState(false)

   return (
      <ContainerAddFeedback>
         <RaitingUserContainer>
            <UserContainer>
               <Logo>
                  {i?.feedbackOwnerFullName
                     ? i?.feedbackOwnerFullName.charAt(0).toUpperCase()
                     : 'A'}
               </Logo>
               <UserName>
                  {i?.feedbackOwnerFullName
                     ? i?.feedbackOwnerFullName
                     : 'anonymous'}
               </UserName>
            </UserContainer>
            <RatingContainer>
               <Rating defaultValue={i?.rating} />
               <span>({i?.rating})</span>
            </RatingContainer>
         </RaitingUserContainer>
         <ContainerText>
            {seeMore ? (
               <Text>{i?.description}</Text>
            ) : (
               <Text>{i?.description?.substring(0, 250)}</Text>
            )}
            {i?.description.length === 0 && <Text>No comment</Text>}

            <ContainerSeeMore>
               {i?.description.length > 250 && (
                  <SeeMore onClick={() => setSeeMore(!seeMore)}>
                     {seeMore ? 'See less' : 'See More'}
                  </SeeMore>
               )}
            </ContainerSeeMore>
         </ContainerText>
         <ContainerImage>
            {i?.images?.map((i, index) => (
               // eslint-disable-next-line react/no-array-index-key
               <ImageFeedback src={i} alt="photos" key={index} />
            ))}
         </ContainerImage>
         <LikesAndDateContainer>
            <DataToDay>{i?.createdAt}</DataToDay>
            <CounterLikes
               id={i?.id}
               like={i?.likeCount}
               dislike={i?.disLikeCount}
            />
         </LikesAndDateContainer>
      </ContainerAddFeedback>
   )
}

function FeedbackApartmentHouse(props) {
   const store = useSelector((store) => store.likeandbookmark)
   console.log(store, 'need store')
   const dispatch = useDispatch()
   const [size, setsize] = useState(3)
   useEffect(() => {
      dispatch(getAllFeedback({ id: props.id, size }))
   }, [
      props.id,
      store.leavelikestatus,
      store.leavedislikestatus,
      store.getfeedbackstatus,
      store.leavefeedbackstatus,
      size,
   ])
   return (
      <WrapperFeedback>
         <div>
            {store?.getallFeedbacksbyidcard?.map((i) => {
               return (
                  <div key={i.id}>
                     <ShowFeedback i={i} />
                  </div>
               )
            })}
         </div>
         {store?.getallFeedbacksbyidcard.length === size && (
            <Button
               onClick={() => {
                  setsize((p) => p + 3)
               }}
            >
               <span>Show more</span>
            </Button>
         )}
      </WrapperFeedback>
   )
}
const WrapperFeedback = styled.div`
   display: flex;
   flex-direction: column;
   & > :nth-child(2) {
      margin-left: 240px;
      margin-top: 20px;
      padding: 0;
      width: 150px;
      height: 19px;
      background: none;
      border: none;
      color: black;
      font-size: 16px;
      & > span {
         border-bottom: 1px solid black;
      }
   }
   & > :nth-child(2):hover {
      color: orange;
      & > span {
         border-bottom: 1px solid orange;
      }
   }
   & > :nth-child(2):active {
      color: orange;
      & > span {
         border-bottom: 1px solid orange;
      }
   }
`
const Logo = styled.div`
   width: 45px;
   height: 45px;
   background: #999fa7;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   font-style: normal;
   font-weight: 500;
   font-size: 30px;
   text-transform: uppercase;
   color: #ffffff;
`
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

// const SkeletoneUser = styled.img``

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
