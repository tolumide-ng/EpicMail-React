import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/authActions';

class Login {
  state = {
    name: ''
  };

  render() {
    return (
      <React.Fragment>
        <label>
          {' '}
          Email:
          <input name="email" type="email" />
        </label>
        <label>
          {' '}
          Password:
          <input name="password" type="password" />
        </label>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loginInfo: state.props.loginInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginInformation: (email, password) => {
      dispatch(loginAction(email, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
