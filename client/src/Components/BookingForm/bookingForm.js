import React from 'react';
import { CircleLoader, HashLoader } from 'react-spinners';

import CSSModules from 'react-css-modules';
import styles from './bookingForm.css';
import Calender from '../Calender/board/calender.js';
import Guests from './Guests.js';
import Summary from './Summary';

const BookingForm = props => {
  const {
    location,
    handleDateChange,
    handleGuestsChange,
    handleBookRequest,
    pendingBookingRequest,
    bookingSuccess,
    bookingError,
    locationSuccess,
    fetchingLocation
  } = props;
  const { nights, guests } = props.children;

  return (
    <div styleName="booking-form-container">
      <div styleName="price-container">
        {locationSuccess && <span>${location.price}</span>}
        <span>per night</span>
      </div>
      <div>
        {
          <div styleName="loading-spinner">
            <HashLoader loading={fetchingLocation} />
          </div>
        }
        {locationSuccess && (
          <form>
            <Calender
              occupancy={location.occupancy}
              onDatePick={handleDateChange}
            />
            <Guests>{{ guests, handleGuestsChange }}</Guests>
            <Summary>{{ price: location.price, nights: nights }}</Summary>
            {!pendingBookingRequest &&
              !bookingSuccess && (
                <button onClick={handleBookRequest}>
                  <h3>Request to Book</h3>
                </button>
              )}
            <div styleName="spinner">
              <CircleLoader color={'#ff5a5f'} loading={pendingBookingRequest} />
            </div>
            {bookingSuccess && (
              <h2 style={{ textAlign: 'center' }}>
                Thanks for booking with us! Enjoy your stay!
              </h2>
            )}
            {bookingError && (
              <h2 style={{ textAlign: 'center' }}>
                Problem occured, try again
              </h2>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default CSSModules(BookingForm, styles);
