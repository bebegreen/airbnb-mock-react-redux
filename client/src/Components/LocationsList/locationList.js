import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './locationList.css';
import { PropagateLoader } from 'react-spinners';
import Rating from '../Rating';

class HouseList extends Component {
  renderHouses(locations) {
    return locations.map(loc => (
      <div styleName="house" key={loc._id}>
        <Link to={`/locations/${loc._id}`}>
          <img src={loc.imageUrl} styleName="image" alt="missing" />
          <div styleName="row-1">
            ${loc.price + ' - '}
            {loc.title}
          </div>
          <div>
            {loc.type}
            <i className="fa fa-circle" styleName="fa" aria-hidden="true" />
            {loc.theSpace.beds} beds
          </div>
          <div styleName="rating">
            <span>
              <Rating value={loc.rating} />{' '}
            </span>
            {loc.reviews.length} reviews
          </div>
        </Link>
      </div>
    ));
  }

  render() {
    const { listData } = this.props;

    return (
      <div>
        <div styleName="container">
          {listData ? (
            this.renderHouses(listData)
          ) : (
            <div styleName="spinner">
              {' '}
              <PropagateLoader color={'#ff5a5f'} />
            </div>
          )}
          {listData ? listData.length ? null : <h2>no matches</h2> : null}
        </div>
      </div>
    );
  }
}

export default CSSModules(HouseList, styles);
