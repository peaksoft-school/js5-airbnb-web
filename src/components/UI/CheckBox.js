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
   border,
}) => {
   const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
   }
   function success(pos) {
      const crd = pos.coords
      // console.log('Ваше текущее местоположение:')
      console.log(`Широта: ${crd.latitude}`)
      // console.log(`Долгота: ${crd.longitude}`)
      // console.log(`Плюс-минус ${crd.accuracy} метров.`)
   }
   function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`)
   }
   navigator.geolocation.getCurrentPosition(success, error, options)
   return (
      <FormGroup>
         <FormLabelStyle
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
                  border={border}
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
      border: ${({ border }) => border || '2px'};
   }
   &.Mui-checked {
      color: ${({ colorcheck }) => colorcheck || '#DD8A08'};
   }
`
