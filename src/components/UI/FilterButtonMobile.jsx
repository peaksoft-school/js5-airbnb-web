import styled from 'styled-components'

const FilterButtonMobile = (props) => {
   return (
      <WrapperBox
         onClick={() => {
            props?.onClick(props.text)
         }}
      >
         <SpanWrapper borderradius={props.borderradius}>
            <SpanLogo
               borderradius={props.borderradius}
               checked={props.checked}
            />
         </SpanWrapper>
         <p>{props?.text}</p>
      </WrapperBox>
   )
}
export default FilterButtonMobile

const WrapperBox = styled.div`
   display: flex;
   align-items: center;
   & > :nth-child(2) {
      margin-left: 10px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #363636;
   }
`
const SpanWrapper = styled.span`
   width: 20px;
   height: 20px;
   display: flex;
   box-sizing: border-box;
   border-radius: ${({ borderradius }) => borderradius || '50%'};
   border: 1px solid gray;
   align-content: center;
   justify-content: center;
`
const SpanLogo = styled.span`
   margin-top: 1.5px;
   width: 15px;
   height: 15px;
   border-radius: ${({ borderradius }) => borderradius || '50%'};
   background: ${({ checked }) => (checked ? 'orange' : 'none')};
`
