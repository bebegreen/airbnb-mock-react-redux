import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './bookingForm.css';

const Guests = props => {
  const { guests, handleGuestsChange } = props.children;
  return (
    <div styleName="booking-form-guests">
      <p>Guests</p>
      <select name="guests" value={guests} onChange={handleGuestsChange}>
        {[1, 2, 3, 4, 5].map(val => (
          <option key={val} value={`${val}`}>
            {val} {val > 1 ? 'Guests' : 'Guest'}{' '}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CSSModules(Guests, styles);
