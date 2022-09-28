import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getPercentegCard } from '../store/slices/LikeAndBookmarkSlice'

const FeedbackFiltered = (props) => {
   const { percentegcard, leavefeedbackstatus } = useSelector(
      (store) => store.likeandbookmark
   )
   const dispatch = useDispatch()
   useEffect(() => {
      if (props.id) {
         dispatch(getPercentegCard(props.id))
      }
   }, [props.id, leavefeedbackstatus])
   return (
      <ContainerRatingFilter>
         <FilterRating>
            <ContainerFiltered>
               <ContainerRatingStar>
                  <FilteredNumber>
                     {`${percentegcard?.rating}`.slice(0, 3)}
                  </FilteredNumber>
                  <svg
                     width="31px"
                     height="31px"
                     viewBox="0 0 30 28"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                        fill="#F7D212"
                     />
                  </svg>
               </ContainerRatingStar>
            </ContainerFiltered>
            <ContainerFilteredNum>
               <span>5</span>
               <ContainerLine>
                  <LineFilter width={percentegcard?.percentageOfFive} />
                  <Line />
               </ContainerLine>
               <Span>
                  {percentegcard?.percentageOfFive
                     ? `${`${percentegcard?.percentageOfFive}`.slice(0, 4)}%`
                     : 0}
               </Span>
            </ContainerFilteredNum>
            <ContainerFilteredNum>
               <span>4</span>
               <ContainerLine>
                  <LineFilter width={percentegcard?.percentageOfFour} />
                  <Line />
               </ContainerLine>
               <Span>
                  {percentegcard?.percentageOfFour
                     ? `${`${percentegcard?.percentageOfFour}`.slice(0, 4)}%`
                     : 0}
               </Span>
            </ContainerFilteredNum>
            <ContainerFilteredNum>
               <span>3</span>
               <ContainerLine>
                  <LineFilter width={percentegcard?.percentageOfThree} />
                  <Line />
               </ContainerLine>
               <Span>
                  {percentegcard?.percentageOfThree
                     ? `${`${percentegcard?.percentageOfThree}`.slice(0, 4)}%`
                     : 0}
               </Span>
            </ContainerFilteredNum>
            <ContainerFilteredNum>
               <span>2</span>
               <ContainerLine>
                  <LineFilter width={percentegcard?.percentageOfTwo} />
                  <Line />
               </ContainerLine>
               <Span>
                  {percentegcard?.percentageOfTwo
                     ? `${`${percentegcard?.percentageOfTwo}`.slice(0, 4)}%`
                     : 0}
               </Span>
            </ContainerFilteredNum>
            <ContainerFilteredNum>
               <span>1</span>
               <ContainerLine>
                  <LineFilter width={percentegcard?.percentageOfOne} />
                  <Line />
               </ContainerLine>
               <Span>
                  {percentegcard?.percentageOfOne
                     ? `${`${percentegcard?.percentageOfOne}`.slice(0, 4)}%`
                     : 0}
               </Span>
            </ContainerFilteredNum>
         </FilterRating>
      </ContainerRatingFilter>
   )
}
export default FeedbackFiltered

const Span = styled.span`
   width: 34px;
   text-align: start;
`
const ContainerRatingFilter = styled.div`
   width: 424px;
   height: 240px;
   border: 1px solid #c4c4c4;
   border-radius: 16px;
   display: flex;
   align-items: center;
   justify-content: center;
   @media (max-width: 375px) {
      position: absolute;
      width: 343px;
      height: 232px;
      left: 16px;
      top: 210vh;
   }
`

const ContainerRatingStar = styled.div`
   width: 79px;
   height: 30px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   @media (max-width: 375px) {
      margin-right: 100px;
   }
`

const FilterRating = styled.div`
   width: 344px;
   height: 205px;
   @media (max-width: 375px) {
      width: 343px;
      display: flex;
      flex-direction: column;
   }
`

const ContainerFiltered = styled.div`
   width: 38px;
   height: 29px;
   font-weight: 500;
   font-size: 24px;
   line-height: 29px;
   text-transform: uppercase;
   color: #363636;
`

const FilteredNumber = styled.span`
   font-style: normal;
   font-weight: 500;
   font-size: 24px;
   line-height: 29px;
   text-transform: uppercase;
   color: #363636;
`
const ContainerFilteredNum = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 16px;
   position: relative;
`
const ContainerLine = styled.div`
   width: 274px;
   display: flex;
   align-items: center;
   position: absolute;
   left: 23px;
`
const LineFilter = styled.div`
   width: ${(props) => `${props.width}%` || '0%'};
   height: 0px;
   position: absolute;
   border-bottom: 3px solid #4f7755;
   background: #4f7755;
`
const Line = styled.div`
   width: 100%;
   height: 0px;
   border-bottom: 1px solid #c4c4c4;
`
