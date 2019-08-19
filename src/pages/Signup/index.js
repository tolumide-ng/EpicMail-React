import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { signupAction } from '../../store/actions/signup';
import logo from '../../../imgs/molecule.svg';
import { SignupFormComponent } from '../../components/SignupForm';
import SignupSchema from './schema';

export const SignupForm = ({ signUp, history }) => (
  <div>
    <SignupFormComponent
      signUp={signUp}
      history={history}
      SignupSchema={SignupSchema}
    />
  </div>
);

export const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export const mapDispatchToProps = dispatch => ({
  signUp: ({ userData, history }) =>
    dispatch(signupAction({ userData, history }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
