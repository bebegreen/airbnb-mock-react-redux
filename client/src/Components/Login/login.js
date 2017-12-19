import React from 'react';
import CSSModules from 'react-css-modules';
import FacebookLogin from 'react-facebook-login';
import styles from './login.css';
import { Link } from 'react-router-dom';
import { RingLoader } from 'react-spinners';

const responseFacebook = response => {
  console.log(response);
};
const componentClicked = () => {
  console.log('clicked');
};
const Login = props => {
  const {
    toggleLoginForm,
    loginPending,
    loginError,
    handleInputChange,
    handleLogin,
    email,
    password
  } = props;

  return (
    <div styleName="background" onClick={toggleLoginForm}>
      <div
        styleName="signup"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <FacebookLogin
          appId="126591918068878"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
        />

        <h4 styleName="title">Login </h4>

        {!loginPending && (
          <form styleName="form">
            {loginError && (
              <h3 styleName="error">Wrong username or password</h3>
            )}

            <input
              name="email"
              type="text"
              placeholder="Email address"
              styleName="input"
              value={email}
              onChange={handleInputChange}
            />

            <input
              name="password"
              type="text"
              placeholder="Password"
              styleName="input"
              value={password}
              onChange={handleInputChange}
            />

            <label styleName="checkbox">
              <input type="checkbox" /> Remember me
            </label>

            <button onClick={handleLogin} styleName="button">
              <h3>Log in</h3>
            </button>
          </form>
        )}

        <div styleName="spinner">
          <RingLoader color={'#123abc'} loading={loginPending} />
        </div>

        <Link to="/signup" onClick={toggleLoginForm}>
          Don't have an account? Sign Up!
        </Link>
      </div>
    </div>
  );
};

export default CSSModules(Login, styles);
