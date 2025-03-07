// reducers.js
import { LOGIN_USER, LOGOUT_USER, SEARCH_HOTELS, BOOK_HOTEL, GET_BOOKING_HISTORY } from './actions';

const initialState = {
  user: null,
  hotels: [],
  bookings: [],
  bookingHistory: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: null };
    case SEARCH_HOTELS:
      return { ...state, hotels: action.payload };
    case BOOK_HOTEL:
      return { ...state, bookings: [...state.bookings, action.payload] };
    case GET_BOOKING_HISTORY:
      return { ...state, bookingHistory: state.bookings };
    default:
      return state;
  }
};

export default rootReducer;
