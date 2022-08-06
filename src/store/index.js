import { configureStore } from '@reduxjs/toolkit'
import sentMessageSlice from './slices/sentMessageSlice'

const store = configureStore({
   reducer: {
      message: sentMessageSlice.reducer,
   },
})

export default store
