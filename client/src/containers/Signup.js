import { connect } from 'react-redux';
import Signup from '../Components/Signup/signup';
import { RingLoader } from 'react-spinners';
import { login } from '../actions/user';

import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      signupRequest: false
    };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSignUp(e) {
    e.preventDefault();
    const { email, firstname, lastname, password } = this.state;
    if (email && firstname && lastname && password) {
      this.setState({ signupRequest: true });
      axios
        .post('/api/users', { email, firstname, lastname, password })
        .then(res => {
          setTimeout(() => {
            this.setState({ signupRequest: false });
            const token = res.data.token;
            localStorage.token = token;
            localStorage.username = firstname;
            axios.defaults.headers.common['Authorization'] = token;
            this.props.login();
          }, 2000);
        })
        .catch(err => {
          this.setState({ signupRequest: false });
          // alert('bad password');
          console.log(err);
        });
    }
  }

  handleInputChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <RingLoader loading={this.state.signupRequest} />
        </div>
        {!this.state.signupRequest && (
          <Signup
            handleSignUp={this.handleSignUp}
            handleInputChange={this.handleInputChange}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ user }, ownProps) => ({
  loggedIn: user.loggedIn
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
