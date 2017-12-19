import { connect } from 'react-redux';
import * as LOCATION_ACTIONS from '../actions/location';
import React, { Component } from 'react';
import Location from '../Components/Location/location';

class LocationPage extends Component {
  constructor(props) {
    super(props);
    const { match, fetchLocation } = props;
    const locationID = match.params.locationID;
    fetchLocation(locationID);
  }

  render() {
    return (
      <div>
        <Location {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = ({ location }) => {
  const {
    isFetching,
    locationSuccess,
    locationError,
    currentLocation
  } = location;
  return {
    isFetching,
    locationSuccess,
    locationError,
    location: currentLocation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLocation: locationID =>
      dispatch(LOCATION_ACTIONS.fetchLocation(locationID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationPage);
