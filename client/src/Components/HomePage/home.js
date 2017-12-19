import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAllLocations } from '../../actions/location';

import CSSModules from 'react-css-modules';
import styles from './home.css';
import LocationList from '../LocationsList/locationList.js';
import Filter from '../Filter/filter.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalList: null,
      displayedList: null
    };
    this.updateList = this.updateList.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchAllLocations());
  }

  componentWillReceiveProps({ allLocations }) {
    this.setState({
      originalList: allLocations,
      displayedList: allLocations
    });
  }

  updateList(displayedList = this.state.originalList) {
    this.setState({ displayedList });
  }

  render() {
    const { displayedList, originalList } = this.state;
    return (
      <div>
        <div styleName="filters">
          <Filter listData={originalList} onFilter={this.updateList} />
        </div>

        <div styleName="content">
          <LocationList listData={displayedList} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ location }, ownProps) => {
  const { allLocations, fetchingAllLocations } = location;
  return {
    allLocations,
    fetchingAllLocations
  };
};

const classWithCss = CSSModules(Home, styles);

export default connect(mapStateToProps)(classWithCss);
