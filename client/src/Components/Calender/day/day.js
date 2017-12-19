import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './day.css';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = { styleName: this.props.style };
    this.handlePick = this.handlePick.bind(this);
  }

  handlePick(e) {
    const { onPick, booked, onBadPick } = this.props;
    if (!booked) onPick(e, this.props.children);
    else onBadPick('badDates');
  }
  render() {
    const { style, children } = this.props;
    return (
      <div styleName={style} onClick={this.handlePick}>
        {children}
      </div>
    );
  }
}

export default CSSModules(Day, styles);
