import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './summary.css';
import Rating from '../Rating/index';

const SubTitle = ({ location }) => {
  const { type, address, rating, reviews } = location;
  return (
    <div styleName="summary-sub-title">
      {type}
      <i className="fa fa-circle" styleName="seperator" aria-hidden="true" />
      {address.city}
      <i className="fa fa-circle" styleName="seperator" aria-hidden="true" />
      <div styleName="blue">
        <Rating value={rating} />
      </div>
      <span>{reviews.length} reviews</span>
    </div>
  );
};
export default CSSModules(SubTitle, styles);
