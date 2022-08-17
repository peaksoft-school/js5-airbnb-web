import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk('add/getPosts', async (props) => {
   try {
      const requestOptions = {
         method: props.method || 'GET',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${props.jwt}`,
         },
      }
      if (props.method && props.body) {
         requestOptions.body = JSON.stringify(props.body)
      }

      const response = await fetch(`${props.url}`, requestOptions)
      const date = await response.json()
      console.log(date)
   } catch (error) {
      console.log(error)
   }
})

const addAnnouncementPosts = createSlice({
   name: 'posts',
   initialState: {
      status: null,
      list: [],
   },
   extraReducers: {
      [getPosts.pending]: (state) => {
         state.status = 'loading'
      },
      [getPosts.fulfilled]: (state, action) => {
         state.status = 'succes'
         state.list = action.payload
      },
   },
})

export const uiAddAnnouncementActions = addAnnouncementPosts.actions

export default addAnnouncementPosts
