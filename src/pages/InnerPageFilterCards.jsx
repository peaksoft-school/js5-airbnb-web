import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as ClearSvg } from '../assets/icons/clearsvg.svg'
import { ReactComponent as MobileFilterSvg } from '../assets/icons/mobilefilter.svg'
import FilterSideBar from '../components/FilterSideBar'
import Button from '../components/UI/Button'
import SelectFilter from '../components/UI/SelectFilter'

export const region = [
   {
      id: 0,
      regionName: 'All',
   },
   {
      id: 1,
      regionName: 'Bishkek',
   },
   {
      id: 2,
      regionName: 'Osh City',
   },
   {
      id: 3,
      regionName: 'Batken',
   },
   {
      id: 4,
      regionName: 'Jalalabad',
   },
   {
      id: 5,
      regionName: 'Naryn',
   },
   {
      id: 6,
      regionName: 'Osh Obl',
   },
   {
      id: 7,
      regionName: 'Talas',
   },
   {
      id: 8,
      regionName: 'Chui',
   },
   {
      id: 9,
      regionName: 'Issyk-Kul',
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
const InnerPageFilterCards = (props) => {
   const size = useSelector((store) => store.selectfilterData)

   const [search, setsearch] = useSearchParams()

   const [text, settext] = useState({
      regionId: '',
      region: '',
      city: '',
      kind: '',
      type: '',
      price: '',
      fetchKind: '',
      fetchPrice: '',
      fetchType: '',
   })
   const openfiltermobile = () => {
      setsearch({
         openmobilefilter: true,
      })
   }
   const closefiltermobile = () => {
      setsearch({ openmobilefilter: false })
   }
   const regionname = region.filter((i) => i.id === +search.get('regionId'))
   console.log(regionname)
   const openmodilefilter = search.get('openmobilefilter') === true

   useEffect(() => {
      if (search.get('regionId')) {
         const similarregion = region.filter(
            (i) => i.id === +search.get('regionId')
         )
         const similarsearch = region.filter((i) => {
            if (i.regionName.includes(search?.get('regionId'))) {
               return i
            }
            return null
         })

         if (similarregion[0].id) {
            settext({
               ...text,
               region: similarregion[0].regionName,
               regionId: search.get('regionId'),
               city: '',
            })
         } else {
            settext({
               ...text,
               region: similarsearch[0].regionName,
               regionId: similarsearch[0].id,
               city: '',
            })
         }
      }
      if (search.get('city')) {
         if (search.get('city') && text.regionId) {
            settext({
               ...text,
               city: '',
            })
         } else {
            settext({
               ...text,
               city: search.get('city'),
            })
         }
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
      search.get('regionId'),
      search.get('kind'),
      search.get('type'),
      search.get('price'),
      search.get('city'),
   ])
   useEffect(() => {
      props.getvalue(text)
   }, [
      text.regionId,
      text.city,
      text.kind,
      text.price,
      text.region,
      text.type,
      text.fetchKind,
      text.fetchType,
      text.fetchPrice,
   ])
   return (
      <Box>
         <Container>
            <WrapperSelect size="true">
               <BlockTitle>
                  <p>
                     {text.region ||
                        (text.city && `Search for: ${text.city}`) ||
                        'All'}
                  </p>
                  <p>({size.data?.countOfResult})</p>
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
                           regionId: e.id,
                           region: e.text,
                        })
                     }}
                     getvalueKind={(e) => {
                        settext({
                           ...text,
                           fetchKind: e.fetchtext,
                           kind: e.text,
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
                           fetchType: e.fetchtext,
                           type: e.text,
                        })
                     }}
                  />
               ) : null}
               <Block>
                  <SelectFilter
                     data={region}
                     getvalue={(e) => {
                        settext({
                           ...text,
                           regionId: e.id,
                           region: e.regionName,
                        })
                     }}
                     value={text.region}
                     placeholder="Sort by region:"
                  />
               </Block>
               <Block>
                  <SelectFilter
                     data={popular}
                     getvalue={(e) => {
                        settext({
                           ...text,
                           kind: e.text,
                           fetchKind: e.fetchText,
                        })
                     }}
                     value={text.kind}
                     placeholder="Sort by:"
                  />
               </Block>
               <Block>
                  <SelectFilter
                     data={apartment}
                     getvalue={(e) => {
                        settext({
                           ...text,
                           type: e.text,
                           fetchType: e.fetchText,
                        })
                     }}
                     value={text.type}
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
                           fetchPrice: e.fetchText,
                        })
                     }}
                     value={text.price}
                     placeholder="Filter by price:"
                  />
               </Block>
            </WrapperSelect>
            <WrapperClearButton>
               {text.region || text.kind || text.type || text.price ? (
                  <div>
                     {text.region && (
                        <Button
                           variant="outlined"
                           height="35px"
                           width="auto"
                           onClick={() => {
                              settext({ ...text, region: '', regionId: '' })
                           }}
                        >
                           <WrapperBtnClear>
                              <ClearSvg />
                              <span>{text.region}</span>
                           </WrapperBtnClear>
                        </Button>
                     )}
                     {text.kind && (
                        <Button
                           variant="outlined"
                           width="auto"
                           height="35px"
                           onClick={() => {
                              settext({ ...text, kind: '' })
                           }}
                        >
                           <WrapperBtnClear>
                              <ClearSvg />
                              <span>{text.kind}</span>
                           </WrapperBtnClear>
                        </Button>
                     )}
                     {text.type && (
                        <Button
                           variant="outlined"
                           width="auto"
                           height="35px"
                           onClick={() => {
                              settext({ ...text, type: '' })
                           }}
                        >
                           <WrapperBtnClear>
                              <ClearSvg />
                              <span>{text.type}</span>
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
               {text.region || text.kind || text.type || text.price ? (
                  <Button
                     variant="outlined"
                     width="auto"
                     height="35px"
                     onClick={() => {
                        settext({
                           region: '',
                           kind: '',
                           type: '',
                           price: '',
                           regionId: '',
                           city: '',
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
export default InnerPageFilterCards

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
   & > p {
      text-transform: uppercase;
   }
`
const Container = styled.div`
   margin: 0 auto;
   width: 1240px;
`
const Box = styled.div`
   padding-top: 40px;
   padding-bottom: 40px;
`
const Block = styled.div`
   width: 271px;
   height: 42px;
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
      width: ${({ size }) => (size ? '32%' : '9%')};
      display: flex;
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
