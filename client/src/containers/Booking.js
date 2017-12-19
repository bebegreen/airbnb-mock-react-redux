import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as BOOKING_ACTIONS from '../actions/booking.js';
import BookingForm from '../Components/BookingForm/bookingForm.js';
import { toggleLoginForm } from '../actions/user.js';

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      guests: '1 Guest',
      nights: 1
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleGuestsChange = this.handleGuestsChange.bind(this);
    this.handleBookRequest = this.handleBookRequest.bind(this);
  }

  handleDateChange(input, date) {
    const { startDate, endDate } = this.state;

    this.setState({
      [input]: date,
      nights:
        input === 'endDate'
          ? Math.abs(date.diff(startDate, 'days'))
          : endDate ? Math.abs(date.diff(endDate, 'days')) : 1
    });
  }

  handleGuestsChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  handleBookRequest(e) {
    e.preventDefault();
    const { location, loggedIn, toggleLoginForm } = this.props;
    const { startDate, endDate } = this.state;

    if (startDate && endDate) {
      if (loggedIn) {
        const dates = {
          startDate: new Date(startDate),
          endDate: new Date(endDate)
        };

        this.props.requestBooking(location._id, dates);
      } else {
        toggleLoginForm();
      }
    } else {
      alert('all fields required');
    }
  }

  render() {
    const { nights, guests } = this.state;
    return (
      <BookingForm
        {...this.props}
        handleDateChange={this.handleDateChange}
        handleBookRequest={this.handleBookRequest}
        handleGuestsChange={this.handleGuestsChange}
      >
        {{ nights, guests }}
      </BookingForm>
    );
  }
}

const mapStateToProps = ({ booking, user, location }) => {
  const { fetchingLocation, locationSuccess, currentLocation } = location;
  const { pendingBookingRequest, bookingError, bookingSuccess } = booking;
  const { loggedIn } = user;
  return {
    loggedIn,
    pendingBookingRequest,
    bookingSuccess,
    bookingError,
    fetchingLocation,
    locationSuccess,
    location: currentLocation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleLoginForm: () => dispatch(toggleLoginForm()),
    requestBooking: (locationID, dates) =>
      dispatch(BOOKING_ACTIONS.requestBooking(locationID, dates))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
