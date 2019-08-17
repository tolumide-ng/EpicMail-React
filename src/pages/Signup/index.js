import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { signupAction } from '../../store/actions/signup';
import logo from '../../../imgs/molecule.svg';

import SignupSchema from './schema';

export const SignupForm = ({
  isLoading,
  error,
  isCompleted,
  signUp,
  history
}) => (
  <div>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        /* istanbul ignore next */
        signUp({ userData: values, history });
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <div className="flex form_body m-16 mx-auto flex-col p-10 lg:w-10/12 w-11/12 rounded">
          <div className=" mb-10 w-100">
            <div className="flex flex-row justify-between">
              <div className="tracking-widest text-3xl">
                <span className="text-indigo-800 ">E</span>
                <span className="text-orange-600">P</span>
                <span className="text-green-600">I</span>
                <span className="text-red-600">C</span>
                <span id="five">_Mail</span>{' '}
              </div>
              <img src={logo} alt="epicmail logo" className="h-12" />
            </div>
            <p className="text-sm">Create your EPIC_Mail account</p>
          </div>
          <Form className="flex flex-col justify-center w-full justify-between">
            <div className="flex flex-col text-center lg:flex-row lg:mb-10 w-full justify-between">
              <div className="w-full lg:w-3/6 lg:text-left mb-10 lg:mb-0">
                <Field
                  name="firstName"
                  placeholder="firstName"
                  type="input"
                  className={`${'w-11/12 h-8 p-2 border border-gray-400 text-sm outline-none rounded'} ${
                    errors.firstName && touched.firstName
                      ? 'border-red-700'
                      : ''
                  }`}
                />
                {errors.firstName && touched.firstName ? (
                  <div
                    className="text-red-400 text-xs"
                    data-testid="firstNameError"
                  >
                    {errors.firstName}
                  </div>
                ) : null}
              </div>

              <div className="w-full lg:w-3/6 lg:text-right mb-10 lg:mb-0">
                <Field
                  name="lastName"
                  placeholder="lastName"
                  type="input"
                  className={`${'w-11/12 h-8 p-2 border border-gray-400 text-sm outline-none rounded'} ${
                    errors.lastName && touched.lastName ? 'border-red-500' : ''
                  }`}
                />
                {errors.lastName && touched.lastName ? (
                  <div
                    className="text-red-400 text-xs"
                    data-testid="lastNameError"
                  >
                    {errors.lastName}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="w-full text-center mb-10 w-100 lg:text-left">
              <Field
                name="username"
                placeholder="username"
                type="input"
                className={`${'w-11/12 lg:w-full h-8 p-2 border border-gray-400 text-sm outline-none rounded'} ${
                  errors.username && touched.username ? 'border-red-500' : ''
                }`}
              />
              {errors.username && touched.username ? (
                <div
                  className="text-red-400 text-xs"
                  data-testid="usernameError"
                >
                  {errors.username}
                </div>
              ) : null}
            </div>

            <div className="w-full text-center mb-10 w-100 lg:text-left">
              <Field
                name="email"
                placeholder="email"
                type="email"
                className={`${'w-11/12 lg:w-full h-8 p-2 border border-gray-400 text-sm outline-none rounded'} ${
                  errors.email && touched.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && touched.email ? (
                <div
                  className="text-red-400 text-xs"
                  placeholder="emailError"
                  data-testid="emailError"
                >
                  {errors.email}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col text-center lg:flex-row lg:mb-10 w-full justify-between">
              <div className="w-full lg:w-3/6 lg:text-left mb-10 lg:mb-0">
                <Field
                  name="password"
                  placeholder="password"
                  type="password"
                  className={`${'w-11/12 h-8 p-2 border border-gray-400 text-sm outline-none rounded'} ${
                    errors.password && touched.password ? 'border-red-500' : ''
                  }`}
                />
                {errors.password && touched.password ? (
                  <div
                    className="text-red-400 text-xs"
                    data-testid="passwordError"
                  >
                    {errors.password}
                  </div>
                ) : null}
              </div>

              <div className="w-full lg:w-3/6 lg:text-right mb-10 lg:mb-0">
                <Field
                  name="confirmPassword"
                  placeholder="confirmPassword"
                  type="password"
                  className={`${'w-11/12 h-8 p-2 border border-gray-400 text-sm outline-none rounded'} ${
                    errors.confirmPassword && touched.confirmPassword
                      ? 'border-red-500'
                      : ''
                  }`}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div
                    className="text-red-400 text-xs"
                    data-testid="confirmPasswordError"
                  >
                    {errors.confirmPassword}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex ml-6 w-100 flex-col justify-center">
              <button
                data-testid="submitButton"
                type="submit"
                className="mb-4 bg-blue-900 w-auto p-1 self-center text-white text-base rounded hover:bg-blue-700 button px-8 py-1"
              >
                {!isSubmitting ? 'Sign up' : 'Signing up'}
              </button>
              <Link
                to="/login"
                className="mb-4 w-auto p-2 self-center button hover:text-indigo-700"
              >
                Already have an account?
              </Link>
            </div>
          </Form>
        </div>
      )}
    </Formik>
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
