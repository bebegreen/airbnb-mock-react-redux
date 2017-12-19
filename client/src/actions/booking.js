import axios from 'axios';

export const PENDING_BOOKING_REQUEST = 'PENDING_BOOKING_REQUEST';
export const BOOKING_SUCCESS = 'BOOKING_SUCCESS';
export const BOOKING_ERROR = 'BOOKING_ERROR';
export const ADD_BOOKING = 'ADD_BOOKING';

export const addBooking = dates => ({ type: ADD_BOOKING, dates });
export const bookingError = () => ({ type: BOOKING_ERROR });
export const bookingSuccess = () => ({ type: BOOKING_SUCCESS });
export const pendingBookingRequest = () => ({ type: PENDING_BOOKING_REQUEST });

export const requestBooking = (locationID, dates) => {
  return async dispatch => {
    dispatch(pendingBookingRequest());
    try {
      await axios.post(`/api/locations/book/${locationID}`, dates);
      setTimeout(function() {
        dispatch(addBooking(dates));
        dispatch(bookingSuccess());
      }, 3000);
    } catch (err) {
      dispatch(bookingError());
    }
  };
};
