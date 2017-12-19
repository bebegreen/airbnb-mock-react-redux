import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import styles from './Navbar.css';
import { toggleLoginForm, logout } from '../../actions/user.js';

import { Link } from 'react-router-dom';

const Navbar = props => {
  const { toggleLoginForm, logout, loggedIn } = props;

  return (
    <nav styleName="top-navbar">
      <ul styleName="ul">
        <li>
          <a> Become a Host </a>
        </li>
        <li>Help</li>

        {loggedIn ? (
          <li onClick={logout}> Logout</li>
        ) : (
          <li onClick={toggleLoginForm}>Login</li>
        )}

        {!loggedIn && (
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ user }) => {
  const { loggedIn } = user;

  return {
    loggedIn: loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleLoginForm: () => dispatch(toggleLoginForm()),
    logout: () => dispatch(logout())
  };
};

const classWithCss = CSSModules(Navbar, styles, true);
export default connect(mapStateToProps, mapDispatchToProps)(classWithCss);
