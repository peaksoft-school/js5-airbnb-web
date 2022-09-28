import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   messages: [],
}
const sentMessageSlice = createSlice({
   name: 'message',
   initialState,
   reducers: {
      saveMessage: (state, action) => {
         const newMessage = {
            id: action.payload.id,
            message: action.payload.message,
         }
         state.messages.push(newMessage)
      },
   },
})
export const sentMessageActions = sentMessageSlice.actions
export default sentMessageSlice
