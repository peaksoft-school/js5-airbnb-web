import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getPercentegCard } from '../store/slices/getApartmentHouseInnerPage'

const FeedbackFiltered = (props) => {
   const { datas } = useSelector((store) => store.getPercentegCar)
   const dispatch = useDispatch()
   useEffect(() => {
      if (props.id) {
         dispatch(getPercentegCard(props.id))
      }
   }, [props.id])
   return (
      <ContainerRatingFilter>
         <FilterRating>
            <ContainerFiltered>
               <ContainerRatingStar>
                  <FilteredNumber>
                     {`${datas.rating}`.slice(0, 3)}
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
                  <LineFilter width={datas?.percentageOfFive} />
                  <Line />
               </ContainerLine>
               <Span>
                  {datas?.percentageOfFive
                     ? `${`${datas?.percentageOfFive}`.slice(0, 4)}%`
                     : 0}
               </Span>
            </ContainerFilteredNum>
            <ContainerFilteredNum>
               <span>4</span>
               <ContainerLine>
                  <LineFilter width={datas?.percentageOfFour} />
                  <Line />
               </ContainerLine>
               <Span>
                  {datas?.percentageOfFour
                     ? `${`${datas?.percentageOfFour}`.slice(0, 4)}%`
                     : 0}
               </Span>
            </ContainerFilteredNum>
            <ContainerFilteredNum>
               <span>3</span>
               <ContainerLine>
                  <LineFilter width={datas?.percentageOfThree} />
                  <Line />
               </ContainerLine>
               <Span>
                  {datas?.percentageOfThree
                     ? `${`${datas?.percentageOfThree}`.slice(0, 4)}%`
                     : 0}
               </Span>
            </ContainerFilteredNum>
            <ContainerFilteredNum>
               <span>2</span>
               <ContainerLine>
                  <LineFilter width={datas?.percentageOfTwo} />
                  <Line />
               </ContainerLine>
               <Span>
                  {datas?.percentageOfTwo
                     ? `${`${datas?.percentageOfTwo}`.slice(0, 4)}%`
                     : 0}
               </Span>
            </ContainerFilteredNum>
            <ContainerFilteredNum>
               <span>1</span>
               <ContainerLine>
                  <LineFilter width={datas?.percentageOfOne} />
                  <Line />
               </ContainerLine>
               <Span>
                  {datas?.percentageOfOne
                     ? `${`${datas?.percentageOfOne}`.slice(0, 4)}%`
                     : 0}
               </Span>
            </ContainerFilteredNum>
         </FilterRating>
      </ContainerRatingFilter>
      // <ContainerRatingFilter>
      //    <FilterRating>
      //       <ContainerFiltered>
      //          <ContainerRatingStar>
      //             <FilteredNumber>4.4</FilteredNumber>
      //             <svg
      //                width="31px"
      //                height="31px"
      //                viewBox="0 0 30 28"
      //                fill="none"
      //                xmlns="http://www.w3.org/2000/svg"
      //             >
      // <path
      //    fill="#F7D212"
      // />
      //             </svg>
      //          </ContainerRatingStar>
      //       </ContainerFiltered>
      //       <ContainerFilteredNum>
      //          <span>5</span>
      //          <ContainerLine>
      //             <LineFilter />
      //             <Line />
      //          </ContainerLine>
      //          <span>52%</span>
      //       </ContainerFilteredNum>
      //       <ContainerFilteredNum2>
      //          <span>4</span>
      //          <ContainerLine>
      //             <Linetwo />
      //             <Linefiltertwo />
      //          </ContainerLine>
      //          <span>15%</span>
      //       </ContainerFilteredNum2>
      //       <ContainerFilteredNum3>
      //          <span>3</span>
      //          <ContainerLineForZero>
      //             <LinefilteredThree />
      //          </ContainerLineForZero>
      //          <span>0</span>
      //       </ContainerFilteredNum3>
      //       <ContainerFilteredNum4>
      //          <span>4</span>
      //          <ContainerLineForZero>
      //             <LinefilteredThree />
      //          </ContainerLineForZero>
      //          <span>0</span>
      //       </ContainerFilteredNum4>
      //       <ContainerFilteredNum5>
      //          <span>5</span>
      //          <ContainerLineForZero>
      //             <LinefilteredThree />
      //          </ContainerLineForZero>
      //          <span>0</span>
      //       </ContainerFilteredNum5>
      //    </FilterRating>
      // </ContainerRatingFilter>
   )
}

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
   width: ${(props) => `${props?.width}%` || '0%'};
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
// const ContainerRatingFilter = styled.div`
//    width: 424px;
//    height: 232px;
//    border: 1px solid #c4c4c4;
//    border-radius: 16px;
//    display: flex;
//    align-items: center;
//    justify-content: center;
//    @media (max-width: 375px) {
//       position: absolute;
//       width: 343px;
//       height: 232px;
//       left: 16px;
//       top: 210vh;
//    }
// `

// const ContainerRatingStar = styled.div`
//    width: 79px;
//    height: 30px;
//    display: flex;
//    align-items: center;
//    justify-content: space-between;
//    @media (max-width: 375px) {
//       margin-right: 100px;
//    }
// `

// const FilterRating = styled.div`
//    width: 344px;
//    height: 192px;
//    @media (max-width: 375px) {
//       width: 343px;
//       display: flex;
//       flex-direction: column;
//    }
// `

// const ContainerFiltered = styled.div`
//    width: 38px;
//    height: 29px;
//    font-weight: 500;
//    font-size: 24px;
//    line-height: 29px;
//    text-transform: uppercase;
//    color: #363636;
// `

// const FilteredNumber = styled.span`
//    font-style: normal;
//    font-weight: 500;
//    font-size: 24px;
//    line-height: 29px;
//    text-transform: uppercase;
//    color: #363636;
// `
// const ContainerFilteredNum = styled.div`
//    display: flex;
//    align-items: center;
//    justify-content: space-between;
//    margin-top: 19px;
// `

// const ContainerFilteredNum2 = styled.div`
//    display: flex;
//    align-items: center;
//    justify-content: space-between;
//    margin-top: 12px;
// `

// const ContainerFilteredNum3 = styled.div`
//    display: flex;
//    align-items: center;
//    justify-content: space-between;
//    margin-top: 12px;
// `
// const ContainerFilteredNum4 = styled.div`
//    display: flex;
//    align-items: center;
//    justify-content: space-between;
//    margin-top: 12px;
// `
// const ContainerFilteredNum5 = styled.div`
//    display: flex;
//    align-items: center;
//    justify-content: space-between;
//    margin-top: 12px;
// `

// const ContainerLine = styled.div`
//    width: 274px;
//    display: flex;
//    align-items: center;
// `

// const ContainerLineForZero = styled.div`
//    width: 295px;
//    display: flex;
//    align-items: center;
//    margin-right: 1px;
// `

// const Line = styled.div`
//    width: 137px;
//    height: 0px;
//    border-bottom: 1px solid #c4c4c4;
// `

// const Linetwo = styled.div`
//    width: 24px;
//    height: 0px;
//    border-bottom: 3px solid #4f7755;
//    background: #4f7755;
// `

// const LineFilter = styled.div`
//    width: 137px;
//    height: 0px;
//    border-bottom: 3px solid #4f7755;
//    background: #4f7755;
// `

// const Linefiltertwo = styled.div`
//    width: 250px;
//    height: 0;
//    border-bottom: 1px solid #c4c4c4;
// `
// const LinefilteredThree = styled.div`
//    width: 274px;
//    height: 0;
//    border-bottom: 1px solid #c4c4c4;
//    margin-right: 20px;
// `

export default FeedbackFiltered
