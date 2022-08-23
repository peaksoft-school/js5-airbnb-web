import { styled } from '@mui/material'
import MuiCheckbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'

const Checkbox = ({
   onChange,
   checked,
   label,
   color,
   colorborder,
   width,
   height,
   colorcheck,
}) => {
   return (
      <FormGroup>
         <FormLabelStyle
            sx={{
               margin: '10px 0px 0px 0px',
            }}
            control={
               <ChesckboxStyle
                  sx={{
                     color: `${colorborder || 'white'}`,
                  }}
                  onChange={onChange}
                  checked={checked}
                  width={width}
                  height={height}
                  colorcheck={colorcheck}
               />
            }
            label={label}
            color={color}
         />
      </FormGroup>
   )
}
export default Checkbox

const FormLabelStyle = styled(FormControlLabel)`
   .MuiFormControlLabel-label {
      color: ${({ color }) => color || 'black'};
      font-size: 16px;
      font-weight: 400;
      font-family: 'Inter', sans-serif;
   }
`
const ChesckboxStyle = styled(MuiCheckbox)`
   .MuiSvgIcon-root {
      width: ${({ width }) => width || '30px'};
      height: ${({ height }) => height || '30px'};
   }

   &.Mui-checked {
      color: ${({ colorcheck }) => colorcheck || '#dd8a08'};
   }
`
