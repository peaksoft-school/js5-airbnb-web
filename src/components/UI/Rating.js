import { useState } from 'react'
import styled from 'styled-components'

function Rating(props) {
   const [rating, setRating] = useState(null)

   return (
      <>
         {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1
            return (
               // eslint-disable-next-line jsx-a11y/label-has-associated-control
               <label key={star}>
                  <Input
                     type="radio"
                     name="rating"
                     value={ratingValue}
                     onClick={() => {
                        setRating(ratingValue)
                        props.getRating(ratingValue)
                     }}
                     disabled={props.variant === 'disabled'}
                  />
                  <Star
                     width={props.width}
                     height={props.height}
                     viewBox="0 0 30 28"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                        fill={ratingValue <= rating ? '#F7D212 ' : '#C4C4C4'}
                     />
                  </Star>
               </label>
            )
         })}
      </>
   )
}

export default Rating

const Star = styled.svg`
   width: ${(props) => (props.width ? props.width : '13.32px')};
   height: ${(props) => (props.height ? props.height : '12.66px')};
`

const Input = styled.input`
   display: none;
`
