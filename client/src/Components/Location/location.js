import React from 'react';
import Jumbotron from '../Jumbotron/jumbotron.js';
import Summary from '../Summary/summary.js';
import ContentNav from '../ContentNav/contentNav.js';
import Booking from '../../containers/Booking.js';
import Reviews from '../Review/review.js';
import Map from '../Map/map.js';
import Amenties from '../Amenties/amenties.js';

import CSSModules from 'react-css-modules';
import styles from './location.css';

const Location = ({ location, isFetching, locationSuccess }) => {
  return (
    <div>
      <Jumbotron />

      <div styleName="content-container">
        <div styleName="content">
          <ContentNav />
          <Summary />
          <Booking />
          {locationSuccess && (
            <div>
              <Amenties amenties={location.amenities} />
              <Reviews location={location} />
            </div>
          )}
        </div>
        {locationSuccess && <Map location={location.address} />}
      </div>

      <footer />
    </div>
  );
};

export default CSSModules(Location, styles);
