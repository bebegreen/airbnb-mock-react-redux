import axios from 'axios';

export const FETCHING_LOCATION = 'FETCHING_LOCATION';
export const LOCATION_SUCCESS = 'LOCATION_SUCCESS';
export const LOCATION_ERROR = 'LOCATION_ERROR';
export const ALL_LOCATIONS_SUCCESS = 'ALL_LOCATIONS_SUCCESS';
export const FETCHING_ALL_LOCATIONS = 'FETCHING_ALL_LOCATIONS';

export const fetchingLocation = locationID => ({ type: FETCHING_LOCATION });
export const locationSuccess = location => ({
  type: LOCATION_SUCCESS,
  location
});
export const locationError = () => ({ type: LOCATION_ERROR });
export const allLocationsSuccess = locations => ({
  type: ALL_LOCATIONS_SUCCESS,
  locations
});
export const fetchingAllLocations = locationID => ({
  type: FETCHING_ALL_LOCATIONS
});

export const fetchLocation = locationID => {
  return async dispatch => {
    dispatch(fetchingLocation());

    try {
      const location = await axios.get(`/api/locations/${locationID}`);
      setTimeout(function() {
        dispatch(locationSuccess(location.data));
      }, 2000);
    } catch (err) {
      dispatch(locationError);
    }
  };
};

export const fetchAllLocations = () => {
  return async dispatch => {
    dispatch(fetchingAllLocations());

    try {
      const locations = await axios.get('/api/locations');
      setTimeout(function() {
        dispatch(allLocationsSuccess(locations));
      }, 2000);
    } catch (err) {
      dispatch(locationError());
    }
  };
};
