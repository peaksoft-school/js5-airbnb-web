import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as ClearSvg } from '../assets/icons/clearsvg.svg'
import { ReactComponent as MobileFilterSvg } from '../assets/icons/mobilefilter.svg'
import FilterSideBar from '../components/FilterSideBar'
import Button from '../components/UI/Button'
import SelectFilter from '../components/UI/SelectFilter'

export const filter = [
   {
      id: 1,
      text: 'All',
      fetchText: '',
   },
   {
      id: 2,
      text: 'Booked',
      fetchText: 'BOOKED',
   },
   {
      id: 3,
      text: 'Not booked',
      fetchText: 'NOT_BOOKED',
   },
]
export const popular = [
   {
      id: 1,
      text: 'All',
      fetchText: '',
   },
   {
      id: 2,
      text: 'Popular',
      fetchText: 'POPULAR',
   },
   {
      id: 3,
      text: 'The lastest',
      fetchText: 'THE_LASTEST',
   },
]
export const apartment = [
   {
      id: 1,
      text: 'All',
      fetchText: '',
   },
   {
      id: 2,
      text: 'Apartment',
      fetchText: 'APARTMENT',
   },
   {
      id: 3,
      text: 'House',
      fetchText: 'HOUSE',
   },
]
export const pricefilter = [
   {
      id: 1,
      text: 'All',
      fetchText: '',
   },
   {
      id: 2,
      text: 'Low to high',
      fetchText: 'LOW_TO_HIGH',
   },
   {
      id: 3,
      text: 'High to low',
      fetchText: 'HIGH_TO_LOW',
   },
]
const AllFousingFilterCard = (props) => {
   const [search, setsearch] = useSearchParams()
   const [text, settext] = useState({
      filter: '',
      popular: '',
      apartment: '',
      price: '',
      fetchbooked: '',
      fetchpopular: '',
      fetchapartment: '',
      fetchprice: '',
   })
   useEffect(() => {
      if (search.get('bookedType')) {
         const similarsearch = filter.filter((i) => {
            if (i.fetchText.includes(search?.get('bookedType'))) {
               return i
            }
            return null
         })

         settext({
            ...text,
            filter: similarsearch[0].text,
         })
      }
      if (search.get('kind')) {
         const similarkind = popular.filter(
            (i) => search.get('kind') === i.fetchText
         )
         settext({
            ...text,
            fetchKind: similarkind[0].fetchText,
            kind: similarkind[0].text,
         })
      }
      if (search.get('kind') && search.get('type')) {
         const similarkind = popular.filter(
            (i) => search.get('kind') === i.fetchText
         )
         const similartype = apartment.filter(
            (i) => search.get('type') === i.fetchText
         )
         settext({
            ...text,
            fetchKind: similarkind[0].fetchText,
            kind: similarkind[0].text,
            fetchType: similartype[0].fetchText,
            type: similartype[0].text,
         })
      }
   }, [
      search.get('bookedType'),
      search.get('kind'),
      search.get('type'),
      search.get('price'),
   ])
   useEffect(() => {
      props?.getvalueselect(text)
   }, [
      text.filter,
      text.popular,
      text.apartment,
      text.price,
      text.fetchbooked,
      text.fetchpopular,
      text.fetchapartment,
      text.fetchprice,
   ])
   const openfiltermobile = () => {
      setsearch({
         openmobilefilter: true,
      })
   }
   const closefiltermobile = () => {
      setsearch({})
   }

   const openmodilefilter = !!search.get('openmobilefilter')
   return (
      <Box>
         <Container>
            <WrapperSelect size={false}>
               <BlockTitle>
                  <p> All housing</p>
                  <p>({props?.size})</p>
               </BlockTitle>
               <MobileIcon onClick={openfiltermobile}>
                  <Button variant="outlined" width="111px" height="42px">
                     <WrapperMobileIcon>
                        Filter <MobileFilterSvg />
                     </WrapperMobileIcon>
                  </Button>
               </MobileIcon>
               {openmodilefilter ? (
                  <FilterSideBar
                     isOpen={openmodilefilter}
                     mobileToggle={closefiltermobile}
                     getvalueRegionid={(e) => {
                        settext({
                           ...text,
                           filter: e.text,
                        })
                     }}
                     getvalueKind={(e) => {
                        settext({
                           ...text,
                           popular: e.text,
                        })
                     }}
                     getvaluePrice={(e) => {
                        settext({
                           ...text,
                           fetchPrice: e.fetchtext,
                           price: e.text,
                        })
                     }}
                     getvalueType={(e) => {
                        settext({
                           ...text,
                           apartment: e.text,
                        })
                     }}
                  />
               ) : null}
               <Block>
                  <SelectFilter
                     data={filter}
                     getvalue={(e) => {
                        settext({
                           ...text,
                           filter: e.text,
                           fetchbooked: e.fetchText,
                        })
                     }}
                     left="170px"
                     value={text.filter}
                     placeholder="Filter by:"
                  />
               </Block>
               <Block>
                  <SelectFilter
                     data={popular}
                     getvalue={(e) => {
                        settext({
                           ...text,
                           popular: e.text,
                           fetchpopular: e.fetchText,
                        })
                     }}
                     left="170px"
                     value={text.popular}
                     placeholder="Sort by:"
                  />
               </Block>
               <Block>
                  <SelectFilter
                     data={apartment}
                     getvalue={(e) => {
                        settext({
                           ...text,
                           apartment: e.text,
                           fetchapartment: e.fetchText,
                        })
                     }}
                     left="170px"
                     value={text.apartment}
                     placeholder="Filter by home type:"
                  />
               </Block>
               <Block>
                  <SelectFilter
                     data={pricefilter}
                     getvalue={(e) => {
                        settext({
                           ...text,
                           price: e.text,
                           fetchprice: e.fetchText,
                        })
                     }}
                     left="170px"
                     value={text.price}
                     placeholder="Filter by price:"
                  />
               </Block>
            </WrapperSelect>
            <WrapperClearButton>
               {text.filter || text.popular || text.apartment || text.price ? (
                  <div>
                     {text.filter && (
                        <Button
                           variant="outlined"
                           height="35px"
                           width="auto"
                           onClick={() => {
                              settext({ ...text, filter: '' })
                           }}
                        >
                           <WrapperBtnClear>
                              <ClearSvg />
                              <span>{text.filter}</span>
                           </WrapperBtnClear>
                        </Button>
                     )}
                     {text.popular && (
                        <Button
                           variant="outlined"
                           width="auto"
                           height="35px"
                           onClick={() => {
                              settext({ ...text, popular: '' })
                           }}
                        >
                           <WrapperBtnClear>
                              <ClearSvg />
                              <span>{text.popular}</span>
                           </WrapperBtnClear>
                        </Button>
                     )}
                     {text.apartment && (
                        <Button
                           variant="outlined"
                           width="auto"
                           height="35px"
                           onClick={() => {
                              settext({ ...text, apartment: '' })
                           }}
                        >
                           <WrapperBtnClear>
                              <ClearSvg />
                              <span>{text.apartment}</span>
                           </WrapperBtnClear>
                        </Button>
                     )}
                     {text.price && (
                        <Button
                           variant="outlined"
                           width="auto"
                           height="35px"
                           onClick={() => {
                              settext({ ...text, price: '' })
                           }}
                        >
                           <WrapperBtnClear>
                              <ClearSvg />
                              <span>{text.price}</span>
                           </WrapperBtnClear>
                        </Button>
                     )}
                  </div>
               ) : null}
               {text.filter || text.popular || text.apartment || text.price ? (
                  <Button
                     variant="outlined"
                     width="auto"
                     height="35px"
                     onClick={() => {
                        settext({
                           filter: '',
                           popular: '',
                           apartment: '',
                           price: '',
                        })
                     }}
                  >
                     <div>
                        <span>Clear all</span>
                     </div>
                  </Button>
               ) : null}
            </WrapperClearButton>
         </Container>
      </Box>
   )
}
export default AllFousingFilterCard

const WrapperMobileIcon = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
`
const MobileIcon = styled.div`
   display: none;

   @media screen and (max-width: 375px) {
      display: block;
      position: absolute;
      top: 140px;
      right: -100px;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #fff;
   }
`
const WrapperBtnClear = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   & > :nth-child(1) {
      height: 14px;
      margin-right: 10px;
      width: 12px;
   }
   & > :nth-child(2) {
      font-size: 16px;
   }
`
const WrapperClearButton = styled.div`
   display: flex;
   align-items: center;
   margin-top: 30px;
   margin-bottom: 20px;
   & > div > button {
      border: none;
      background: none;
   }
   & > div > button:hover {
      border: none;
      color: white;
      background: #c4c4c4;
      & > div > svg {
         fill: white;
      }
   }
   & > button {
      border: none;
      background: none;
      font-size: 16px;
      & > div > span {
         border-bottom: 2px solid grey;
      }
   }
   & > button:hover {
      border: none;
      color: white;
      background: #c4c4c4;
      & > div > span {
         border-bottom: 2px solid white;
      }
   }
   & > div > button {
      & > div > svg {
         fill: #747171;
      }
   }
`
const BlockTitle = styled.div`
   font-size: 20px;
`
const Container = styled.div`
   margin: 0 auto;
   width: 1240px;
`
const Box = styled.div`
   padding-bottom: 40px;
`
const Block = styled.div`
   width: 240px;
   height: 35px;
   @media screen and (max-width: 375px) {
      display: none;
   }
`
const WrapperSelect = styled.div`
   width: 1240px;
   display: flex;
   align-items: center;
   gap: 10px;
   flex-wrap: wrap;
   justify-content: flex-end;
   & > :nth-child(1) {
      align-self: center;
      width: 18%;
      display: flex;
      padding-top: 10px;
      align-items: center;
      justify-content: flex-start;
      & > :nth-child(4) {
         margin-left: 10px;
      }
   }
   @media screen and (max-width: 375px) {
      width: 375px;
      justify-content: flex-start;
   }
`
