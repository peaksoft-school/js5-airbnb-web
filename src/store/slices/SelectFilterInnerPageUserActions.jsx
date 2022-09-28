import { createAsyncThunk } from '@reduxjs/toolkit'
import ApiFetch from '../../api/ApiFetch'
import {
   getPopularApartmentUrl,
   getPopularHouseUrl,
   getTheLastestUrl,
} from '../../utils/constants/fetchConstants'

export const getPopularApartment = createAsyncThunk(
   'selectfilter/getPopularApartment',
   async () => {
      const data = await ApiFetch({
         url: getPopularApartmentUrl,
      })
      return data
   }
)
export const getPopularHouse = createAsyncThunk(
   'selectfilter/getPopularHouse',
   async () => {
      const data = await ApiFetch({
         url: getPopularHouseUrl,
      })
      return data
   }
)
export const getTheLastest = createAsyncThunk(
   'selectfilter/getTheLastest',
   async () => {
      const data = await ApiFetch({
         url: getTheLastestUrl,
      })
      return data
   }
)
export const getSelectFilterData = createAsyncThunk(
   'selectfilter/getSelectFilterData',
   async (filterurl) => {
      const data = await ApiFetch({
         url: filterurl,
      })
      return data
   }
)
export const getGlobalSearch = createAsyncThunk(
   'selectfilter/globalsearch',
   async (searchurl) => {
      const searchValue = await ApiFetch({
         url: searchurl,
      })
      return searchValue
   }
)
