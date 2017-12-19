import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from './App.css';
import Header from '../Header/Header.js';
import HomePage from '../HomePage/home.js';
import SignupPage from '../../containers/Signup';
import Login from '../../containers/Login.js';
import LocationPage from '../../containers/location';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {this.props.showLoginForm && <Login />}

          <Route exact path="/" component={HomePage} />
          <Route path="/locations/:locationID" component={LocationPage} />
          {/* <Route path="/signup" component={Signup} /> */}
          <Route path="/signup" component={SignupPage} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ user }) => {
  const { showLoginForm } = user;

  return {
    showLoginForm
  };
};

const classWithCss = CSSModules(App, styles);
export default connect(mapStateToProps)(classWithCss);
