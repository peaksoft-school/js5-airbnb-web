import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const DatesOfBookedAnnouncements = (props) => {
   console.log(props.data, 'testg')
   return (
      <Container>
         {props.data?.map((el) => {
            return (
               <Div height={props.data?.length}>
                  <StyledBookedCards>
                     <div>
                        <CardContainer status="NEW">
                           <Price>
                              ${el.price} / <span>day</span>
                           </Price>
                           <Hr />
                           <Date>
                              <div>
                                 <CheckIn>Check in</CheckIn>
                                 <CheckInDate>{el.checkIn}</CheckInDate>
                              </div>
                              <div>
                                 <CheckOut>Check out</CheckOut>
                                 <CheckOutDate>{el.checkOut}</CheckOutDate>
                              </div>
                           </Date>
                        </CardContainer>
                        <UserContainer>
                           <Logo>
                              {`${el.userName}`.charAt(0).toUpperCase()}
                           </Logo>
                           <div>
                              <Name>{el.userName}</Name>
                              <Email>{el.userEmail}</Email>
                              <Email>{el.userPhoneNumber}</Email>
                           </div>
                        </UserContainer>
                        <div>
                           <Button variant="contained">REJECT</Button>
                           <Button>ACCEPT</Button>
                        </div>
                     </div>
                  </StyledBookedCards>
               </Div>
            )
         })}
      </Container>
   )
}
export default DatesOfBookedAnnouncements
const Container = styled.div`
   width: 545px;
   padding-bottom: 15px;
   display: flex;
   overflow: auto;
   align-items: center;
   flex-direction: row;
   gap: 20px;
   ::-webkit-scrollbar {
      height: 10px;
   }
   ::-webkit-scrollbar-thumb {
      background-color: orange;
      border-radius: 1em;
      scrollbar-width: 10px;
   }
   ::-webkit-scrollbar-thumb:hover {
      scrollbar-width: 10px;
      background-color: #68738a;
   }
`
const StyledBookedCards = styled.div`
   grid-template-columns: repeat(3, 1fr);
   width: 100%;
   gap: 20px;
   margin-top: 40px;
   & button {
      padding: 0;
      margin-left: 10px;
      margin-top: 25px;
      width: 120px;
   }
`
const Div = styled.div`
   width: 545px;
   height: ${(props) => (props.height ? '310px' : '50px')};
   display: flex;
   align-items: flex-start;
   gap: 19px;
   & > :nth-child(1) {
      margin-top: 5px;
   }
`
const CardContainer = styled.div`
   border-radius: 10px;
   width: 260px;
   height: 157px;
   display: flex;
   flex-direction: column;
   background: #ffff;
   padding: 20px;
   border: ${(props) => (props.status === 'NEW' ? '2px solid red' : 'null')};
`
const Price = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 20px;
   line-height: 24px;
   color: #000000;
   text-align: center;
   margin-bottom: 20px;
   & span {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #6c6c6c;
   }
`
const Hr = styled.hr`
   width: 100%;
   border-radius: 5px;
   border: 1px solid #c4c4c4;
   background: #c4c4c4;
   margin-bottom: 20px;
`
const Date = styled.div`
   display: flex;
   flex-direction: row;
   gap: 80px;
`
const CheckIn = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #646464;
   margin-bottom: 17px;
`
const CheckOut = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   margin-bottom: 17px;
   color: #646464;
`
const CheckInDate = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #363636;
`
const CheckOutDate = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #363636;
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
   margin-right: 16px;
`
const UserContainer = styled.div`
   display: flex;
   margin-top: 30px;
   align-items: center;
`
const Name = styled.p`
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   color: #000000;
`
const Email = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #828282;
`
