import React from 'react';
import { connect } from 'react-redux';
import Routes from '../../routes';

const AuthWrapper = ({ isStarting }) => {
  return isStarting ? 'loader' : <Routes />;
};

const mapStateToProps = state => ({
  isStarting: state.authReducer.isStarting
});

export default connect(mapStateToProps)(AuthWrapper);
