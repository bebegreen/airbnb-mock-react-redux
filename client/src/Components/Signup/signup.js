import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './signup.css';

class Signup extends Component {
  render() {
    return (
      <div styleName="signup">
        <h4 styleName="title">Sign up - please fill up the form </h4>
        <form styleName="form">
          <input
            name="email"
            type="text"
            placeholder="Email address"
            styleName="input"
            onChange={this.props.handleInputChange}
          />
          <input
            name="firstname"
            type="text"
            placeholder="First name"
            styleName="input"
            onChange={this.props.handleInputChange}
          />
          <input
            name="lastname"
            type="text"
            placeholder="Last name"
            styleName="input"
            onChange={this.props.handleInputChange}
          />
          <input
            name="password"
            type="text"
            placeholder="Password"
            styleName="input"
            onChange={this.props.handleInputChange}
          />

          <label styleName="checkbox">
            <input type="checkbox" />
            I’d like to receive marketing and policy communications from Airbnb
            and its partners.
          </label>
          <p style={{ fontWeight: 600 }}>
            {' '}
            By clicking Sign up or Continue with, I agree to Airbnb’s Terms of
            Service, Payments Terms of Service, Privacy Policy, and
            Nondiscrimination Policy.
          </p>
          <button styleName="button" onClick={this.props.handleSignUp}>
            <h3>Sign up</h3>
          </button>
        </form>
      </div>
    );
  }
}

export default CSSModules(Signup, styles);
