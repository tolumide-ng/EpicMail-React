import './index.css';
import React from 'react';
import * as Yup from 'yup';

import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../../store/actions/login';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('username is required'),
  password: Yup.string().required('password is required')
});

export const LoginForm = ({
  isLoading,
  isCompleted,
  login,
  history,
  status
}) => (
  <div className="flex mt-20 mx-auto flex-col p-10 w-100 rounded justify-center">
    <Formik
      className="flex flex-col justify-center"
      initialValues={{
        username: '',
        password: ''
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        login({ userData: values, history });
        if (status !== 'AuthenticationLoading') setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="flex flex-col justify-center items-center p-10 w-9/12 mx-auto">
          <h1 className="w-64 p-2 text-center text-2xl text-white mb-8">
            SIGN IN
          </h1>
          <div className="mb-10">
            <Field
              name="username"
              placeholder="username"
              data-testid="usernameId"
              className={`${'w-64 h-10 p-2 pl-4 border border-gray-400 text-sm outline-none rounded-lg text-center'} ${
                errors.username ? 'border-red-500' : ''
              }`}
            />
            {errors.username && touched.username ? (
              <div
                className="text-red-400 text-center pt-2"
                data-testid="usernameError"
              >
                {errors.username}
              </div>
            ) : null}
          </div>

          <div className="mb-10">
            <Field
              name="password"
              placeholder="password"
              type="password"
              className={`${'w-64 h-10 p-2 pl-4 border border-gray-400 text-sm outline-none rounded-lg text-center'} ${
                errors.password ? 'border-red-500' : ''
              }`}
            />
            {errors.password && touched.password ? (
              <div
                className="text-red-400 text-center pt-2"
                data-testid="passwordError"
              >
                {errors.password}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            data-testid="submitButton"
            className={`${'bg-blue-900 w-auto py-2 px-6 self-center text-white text-base rounded-full hover:bg-blue-700 button'} ${
              isSubmitting ? 'bg-blue-500' : 'bg-blue-900'
            }`}
          >
            {isSubmitting ? 'Signing in' : 'Sign in now'}
          </button>
        </Form>
      )}
    </Formik>
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
