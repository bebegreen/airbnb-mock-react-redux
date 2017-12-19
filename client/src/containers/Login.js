import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginRequest, toggleLoginForm } from '../actions/user.js';
import LoginForm from '../Components/Login/login.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    if (email && password) {
      this.props.loginRequest(email, password);
    } else alert('all fields are required');
  }

  handleInputChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <LoginForm
        handleLogin={this.handleLogin}
        handleInputChange={this.handleInputChange}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = ({ user }) => {
  const { loginPending, loggedIn, loginError } = user;

  return {
    loginPending: loginPending,
    loggedIn: loggedIn,
    loginError: loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleLoginForm: () => dispatch(toggleLoginForm()),
    loginRequest: (email, password) => dispatch(loginRequest(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
