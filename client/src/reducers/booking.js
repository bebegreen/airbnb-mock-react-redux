import * as BOOK_ACTIONS from '../actions/booking.js';

const initialState = {
  pendingBookingRequest: false,
  bookingError: false,
  bookingSuccess: false
};

export function booking(state = initialState, action) {
  switch (action.type) {
    case BOOK_ACTIONS.PENDING_BOOKING_REQUEST:
      return { ...state, pendingBookingRequest: true };
    case BOOK_ACTIONS.BOOKING_SUCCESS:
      return { ...state, bookingSuccess: true, pendingBookingRequest: false };
    case BOOK_ACTIONS.BOOKING_ERROR:
      return { ...state, bookingError: true, pendingBookingRequest: false };

    default:
      return state;
  }
}
