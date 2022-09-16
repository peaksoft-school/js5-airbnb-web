import styled from 'styled-components'

function Button({
   onClick,
   widthMedia,
   variant,
   disabled,
   children,
   ...props
}) {
   return (
      <CustomButton
         widthMedia={widthMedia}
         onClick={onClick}
         variant={variant}
         style={props}
         disabled={disabled === true}
      >
         {children}
      </CustomButton>
   )
}
export default Button

const CustomButton = styled.button`
   width: ${(props) => props.width || '150px'};
   height: ${(props) => props.height || '30px'};
   font-size: ${(props) => props.fontSize || '14px'};
   background: ${(props) =>
      // eslint-disable-next-line no-nested-ternary
      props.variant === 'outlined'
         ? 'white'
         : props.variant === 'contained'
         ? 'white'
         : '#dd8a08'};
   border-radius: ${(props) => (props.variant === 'outlined' ? 'none' : '2px')};
   border: ${(props) =>
      // eslint-disable-next-line no-nested-ternary
      props.variant === 'outlined'
         ? '1px solid #7D7D7D;'
         : props.variant === 'contained'
         ? '1px solid #DD8A08'
         : 'none'};
   font-weight: 500;
   color: ${(props) =>
      // eslint-disable-next-line no-nested-ternary
      props.variant === 'outlined'
         ? '#828282'
         : props.variant === 'contained'
         ? '#DD8A08'
         : '#f7f7f7'};
   line-height: 17px;
   padding: ${(props) =>
      props.variant === 'outlined' ? '8px 16px' : '10px 16px'};
   gap: 10px;
   cursor: pointer;
   &:hover {
      color: ${(props) =>
         // eslint-disable-next-line no-nested-ternary
         props.variant === 'contained'
            ? '#f7f7f7'
            : props.variant === 'outlined'
            ? '#828282'
            : '#f7f7f7'};
      background-color: ${(props) =>
         props.variant === 'outlined' ? 'none' : '#BB7200'};
      border: ${(props) =>
         props.variant === 'outlined' ? '1.5px solid #363636' : 'none'};
   }
   &:active {
      background-color: ${(props) =>
         props.variant === 'outlined' ? '#DD8A08' : '#F2B75B'};
      border: none;
      color: ${(props) =>
         props.variant === 'outlined' ? '#f7f7f7' : '#f7f7f7'};
   }
   &:disabled {
      background-color: #a9a9a9;
   }

   @media screen and (max-width: 375px) {
      width: ${(props) => props.width || '168px !important;'};
      width: 168px !important;
   }
`
