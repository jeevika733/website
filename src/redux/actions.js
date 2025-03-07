
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USERs = 'LOGOUT_USER';
export const SEARCH_HOTELS = 'SEARCH_HOTELS';
export const BOOK_HOTEL = 'BOOK_HOTEL';
export const GET_BOOKING_HISTORY = 'GET_BOOKING_HISTORY';

export const loginUser = (user) => ({
  type: LOGIN_USER, 
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const searchHotels = (searchQuery) => ({
  type: SEARCH_HOTELS,
  payload: searchQuery,
});

export const bookHotel = (bookingDetails) => ({
  type: BOOK_HOTEL,
  payload: bookingDetails,
});

export const getBookingHistory = () => ({
  type: GET_BOOKING_HISTORY,
});
