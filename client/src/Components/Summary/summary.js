import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from './summary.css';
import SubTitle from './SubTitle.js';
import BasicInfo from './BasicInfo.js';

class Summary extends Component {
  render() {
    const { location, locationSuccess } = this.props;

    return (
      <div styleName="summary">
        {locationSuccess && (
          <div>
            <div styleName="summary-head">
              <div>
                <h1>{location.title}</h1>
                <SubTitle location={location} />
                <BasicInfo location={location} />
              </div>
              <div styleName="owner-img">
                <img
                  styleName="owner"
                  src={location.owner.imageUrl}
                  alt="host"
                />
                {location.owner.firstname}
              </div>
            </div>
            <h4>The Space</h4>
            <p styleName="property-description">
              {location.theSpace.description}
            </p>
          </div>
        )}
      </div>
    );
  }
}

const SummaryWithCss = CSSModules(Summary, styles, true);

const mapStateToProps = ({ location }) => {
  const { fetchingLocation, locationSuccess, currentLocation } = location;
  return {
    location: currentLocation,
    fetchingLocation,
    locationSuccess
  };
};

export default connect(mapStateToProps)(SummaryWithCss);
