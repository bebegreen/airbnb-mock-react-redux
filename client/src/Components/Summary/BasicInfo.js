import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './summary.css';

const BasicInfo = ({ location }) => {
  const { guests, beds, baths } = location;
  return (
    <div styleName="summary-basic-info">
      <ul styleName="ul">
        <li>
          <i className="fa fa-users" styleName="icon" aria-hidden="true" />
          {guests} guests
        </li>
        <li>
          <i className="fa fa-bed" styleName="icon" aria-hidden="true" />
          {beds} beds
        </li>
        <li>
          <i className="fa fa-bath" styleName="icon" aria-hidden="true" />
          {baths} baths
        </li>
      </ul>
    </div>
  );
};

export default CSSModules(BasicInfo, styles, true);
