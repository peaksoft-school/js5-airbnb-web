import styled from 'styled-components'
import map from '../../assets/images/mapkg.png'
import { region } from '../../pages/InnerPageFilterCards'

const SearchRegionMap = () => {
   return (
      <Box>
         <div>
            <p>bish</p>
            <img src={map} alt="map" />
         </div>
         <WrapperBtn>
            {region.map((i) => (
               <button key={i.id}>{i.regionName}</button>
            ))}
         </WrapperBtn>
      </Box>
   )
}
export default SearchRegionMap

const Box = styled.div`
   position: relative;
   & > div > img {
      width: 550px;
   }
`
const WrapperBtn = styled.div`
   & > button {
      border: none;
      background: none;
      cursor: pointer;
      font-size: 12px;
      padding: 10px;
      border-radius: 50%;
   }
   & > button:hover {
      transition: ease 0.2s;
      font-size: 14px;
   }
   & > button:active {
      padding: 10px;
      background: orange;
   }
   & > :nth-child(1) {
      position: absolute;
      top: 45px;
      left: 227px;
   }
   & > :nth-child(2) {
      position: absolute;
      top: 170px;
      left: 195px;
   }
   & > :nth-child(3) {
      position: absolute;
      top: 213px;
      left: 23px;
   }
   & > :nth-child(4) {
      position: absolute;
      top: 120px;
      left: 160px;
   }
   & > :nth-child(5) {
      position: absolute;
      top: 130px;
      left: 295px;
   }
   & > :nth-child(6) {
      position: absolute;
      top: 200px;
      left: 170px;
   }
   & > :nth-child(7) {
      position: absolute;
      top: 65px;
      left: 125px;
   }
   & > :nth-child(8) {
      position: absolute;
      top: 50px;
      left: 280px;
   }
   & > :nth-child(9) {
      position: absolute;
      top: 80px;
      left: 390px;
   }
`
