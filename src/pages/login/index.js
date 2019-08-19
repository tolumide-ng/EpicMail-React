import './index.css';
import React from 'react';
import * as Yup from 'yup';

import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../../store/actions/login';
import { LoginFormComponent } from '../../components/LoginForm';

export const LoginForm = ({ login, history, status }) => (
  <div className="flex mt-20 mx-auto flex-col p-10 w-100 rounded justify-center">
    <LoginFormComponent login={login} history={history} status={status} />

    <div className="flex justify-between w-1/4 mx-auto">
      <Link
        to="/reset"
        className="mr-4 w-auto self-center button hover:text-yellow-200 text-white text-sm text-center"
      >
        Forgot password ?
      </Link>
      <Link
        to="/signup"
        className="ml-2 w-auto self-center button hover:text-yellow-200 text-white text-sm text-center"
      >
        Return to signup
      </Link>
    </div>
  </div>
);

export const mapStateToProps = state => {
  return { error: state.error, status: state.status };
};

export const mapDispatchToProps = dispatch => ({
  login: ({ userData, history }) => dispatch(loginAction({ userData, history }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
