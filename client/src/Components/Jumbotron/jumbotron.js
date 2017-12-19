import React from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from './jumbotron.css';
import { BeatLoader } from 'react-spinners';

const Jumbotron = props => {
  const img = props.img;
  const style = img ? { backgroundImage: `url(${img})` } : null;

  return (
    <div styleName="jumbotron" style={style}>
      <div styleName="spinner">
        <BeatLoader loading={props.fetchingLocation} color={'#ff5a5f'} />
      </div>

      <div styleName="jumbo-top-buttons">
        <div styleName="jumbo-btn">
          <i className="fa fa-share" aria-hidden="true" />
          Share
        </div>
        <div styleName="jumbo-btn">
          <i className="fa fa-heart-o" aria-hidden="true" />
          Save
        </div>
      </div>
      <div styleName="jumbo-bottom-btn">View Photos</div>
    </div>
  );
};
const withCss = CSSModules(Jumbotron, styles, true);

const mapStateToProps = ({
  location: { fetchingLocation, currentLocation }
}) => ({
  fetchingLocation,
  img: currentLocation ? currentLocation.imageUrl : null
});

export default connect(mapStateToProps)(withCss);
