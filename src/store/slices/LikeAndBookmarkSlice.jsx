import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ApiFetch, { appFile } from '../../api/ApiFetch'
import { addAnnountFileUrl } from '../../utils/constants/fetchConstants'
import { showSuccessMessage } from '../../utils/helpers/ToastyfyFunction'
import { getUserAnnouncementCard } from './getUserAnnouncement'

export const getCardById = createAsyncThunk(
   'likeandbookmark/getCardsById',
   async (id) => {
      const card = await ApiFetch({
         url: `api/announcements/find/${id}`,
      })
      return card
   }
)

export const postLikeorDislike = createAsyncThunk(
   'likeandbookmark/likeorDislike',
   async (id) => {
      const like = await ApiFetch({
         url: `api/announcements/like/${id.id}`,
         method: 'POST',
      })
      return { like, bool: id.bool }
   }
)

export const postBookmark = createAsyncThunk(
   'likeandbookmark/postBookmark',
   async (id) => {
      const bookmark = await ApiFetch({
         url: `api/announcements/bookmark/${id.id}`,
         method: 'POST',
      })
      return { bookmark, bool: id.bool }
   }
)

export const leaveFeedback = createAsyncThunk(
   'likeandbookmark/leaveFeedback',
   async ({ data, photos }, { dispatch }) => {
      try {
         const dataWith = {
            ...data,
            images: [],
         }
         // eslint-disable-next-line no-plusplus
         for (let index = 0; index < photos.length; index++) {
            const image = photos[index]
            const formData = new FormData()
            formData.append('file', image.file)
            // eslint-disable-next-line no-await-in-loop
            const response = await appFile({
               url: addAnnountFileUrl,
               body: formData,
            })
            dataWith.images.push(response?.link)
         }
         const response = await ApiFetch({
            url: `api/feedbacks/leave/feedback/${dataWith.id}`,
            method: 'POST',
            body: dataWith,
         })
         dispatch(showSuccessMessage('Successfully posted your comment'))
         return response
      } catch (error) {
         // dispatch(showErrorMessage('Something wrong'))
         return new Error('error')
      }
   }
)
export const leaveLikeFeedback = createAsyncThunk(
   'likeandbookmark/leaveLikeFeedback',
   async (id) => {
      const data = await ApiFetch({
         url: `api/feedbacks/like/${id.id}`,
         method: 'POST',
      })
      return { data, bool: id.bool }
   }
)

export const leavedisLikeFeedback = createAsyncThunk(
   'likeandbookmark/leavedisLikeFeedback',
   async (id) => {
      const data = await ApiFetch({
         url: `api/feedbacks/dislike/${id.id}`,
         method: 'POST',
      })
      return data
   }
)

export const getPercentegCard = createAsyncThunk(
   'likeandbookmark/getPercentegCard',
   async (id) => {
      const data = await ApiFetch({
         url: `api/feedbacks/feedback/rating/with/percentages?announcementId=${id}`,
      })
      return data
   }
)

export const getAllFeedback = createAsyncThunk(
   'likeandbookmark/getAllFeedback',
   async (id) => {
      const data = await ApiFetch({
         url: `api/feedbacks/${id.id}?page=${1}&size=${id.size}`,
      })
      return data
   }
)

export const getallFavoriteCards = createAsyncThunk(
   'likeandbookmark/getallFavoriteCards',
   async () => {
      const data = await ApiFetch({
         url: 'user/profile/favorite',
      })
      return data
   }
)

export const postBooking = createAsyncThunk(
   'likeandbookmark/postBooking',
   async (obj, { dispatch }) => {
      const data = await ApiFetch({
         url: 'api/announcements/bookings/create',
         method: 'POST',
         body: obj,
      })
      dispatch(getUserAnnouncementCard())
      dispatch(showSuccessMessage('Successfully send booking request'))
      return data
   }
)

const initialState = {
   likestatus: null,
   likeordislike: false,
   postBookmarkstatus: null,
   postBookmarkvalue: false,
   id: '',
   getcard: {
      card: [],
      status: null,
   },
   percentegcard: {},
   getallFeedbacksbyidcard: [],
   getfeedbackstatus: null,
   getallFavoriteCards: {
      cards: [],
      size: null,
      status: null,
   },
   leavelikestatus: false,
   leavedislikestatus: false,
   leavefeedbackstatus: false,
   bookingstatus: null,
   bookingCard: null,
   likeleave: null,
}
const LikeAndBookmarkSlice = createSlice({
   name: 'likeandbookmark',
   initialState,
   extraReducers: {
      [postBooking.fulfilled]: (state) => {
         state.bookingstatus = 'success'
      },
      [postBooking.rejected]: (state) => {
         state.bookingstatus = 'error'
      },
      [leaveFeedback.fulfilled]: (state) => {
         state.leavefeedbackstatus = !state.leavefeedbackstatus
      },
      [leaveFeedback.rejected]: (state) => {
         state.leavefeedbackstatus = !state.leavefeedbackstatus
      },
      [leavedisLikeFeedback.fulfilled]: (state) => {
         state.leavedislikestatus = !state.leavedislikestatus
      },
      [leaveLikeFeedback.fulfilled]: (state, action) => {
         state.leavelikestatus = !state.leavelikestatus
         state.likeleave = action.payload
      },
      [postBookmark.pending]: (state) => {
         state.postBookmarkstatus = 'pending'
      },
      [postBookmark.fulfilled]: (state, action) => {
         state.postBookmarkvalue = action.payload?.bool
         state.id = action.payload.bookmark?.id
         state.postBookmarkstatus = 'success'
      },
      [postBookmark.rejected]: (state) => {
         state.postBookmarkstatus = 'error'
      },
      [getallFavoriteCards.fulfilled]: (state, action) => {
         const data = action.payload?.favoriteAnnouncementResponseList.map(
            (i) => {
               const d = i
               d.bool = true
               return d
            }
         )
         state.getallFavoriteCards.cards = data
         state.getallFavoriteCards.size = action.payload?.countAnnouncements
         state.getallFavoriteCards.status = 'success'
      },
      [getallFavoriteCards.pending]: (state) => {
         state.getallFavoriteCards.status = 'pending'
      },
      [getallFavoriteCards.rejected]: (state) => {
         state.getallFavoriteCards.status = 'error'
      },
      [getAllFeedback.fulfilled]: (state, action) => {
         state.getfeedbackstatus = 'success'
         console.log(action.payload, 'feedback pagination')
         state.getallFeedbacksbyidcard = action.payload
      },
      [getPercentegCard.fulfilled]: (state, action) => {
         state.percentegcard = action.payload
      },
      [postLikeorDislike.pending]: (state) => {
         state.likestatus = 'pending'
      },
      [postLikeorDislike.fulfilled]: (state, action) => {
         state.likestatus = 'success'
         state.likeordislike = action.payload.bool
      },
      [postLikeorDislike.rejected]: (state) => {
         state.likestatus = 'error'
      },
      [getCardById.fulfilled]: (state, action) => {
         state.getcard.card = [action.payload]
         state.getcard.status = 'success'
      },
   },
})
export default LikeAndBookmarkSlice
