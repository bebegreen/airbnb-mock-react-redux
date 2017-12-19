import {
  FETCHING_LOCATION,
  LOCATION_ERROR,
  LOCATION_SUCCESS,
  FETCHING_ALL_LOCATIONS,
  ALL_LOCATIONS_SUCCESS
} from '../actions/location';
import { ADD_BOOKING } from '../actions/booking.js';

const initialState = {
  fetchingLocation: false,
  locationSuccess: false,
  locationError: false,
  currentLocation: null,
  allLocations: null,
  fetchingAllLocations: false
};

export const location = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_LOCATION:
      return {
        ...state,
        fetchingLocation: true,
        currentLocation: null,
        locationSuccess: false
      };
    case LOCATION_SUCCESS:
      return {
        ...state,
        fetchingLocation: false,
        locationSuccess: true,
        currentLocation: action.location
      };
    case LOCATION_ERROR:
      return { ...state, fetchingLocation: false, locationError: true };
    case ALL_LOCATIONS_SUCCESS:
      return {
        ...state,
        fetchingAllLocations: false,
        allLocations: action.locations.data
      };
    case FETCHING_ALL_LOCATIONS:
      return { ...state, fetchingAllLocations: true };
    case ADD_BOOKING:
      return {
        ...state,
        currentLocation: {
          ...state.currentLocation,
          occupancy: [...state.currentLocation.occupancy, action.dates]
        }
      };
    default:
      return state;
  }
};
