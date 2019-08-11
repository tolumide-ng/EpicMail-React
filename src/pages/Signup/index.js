import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { signupAction } from '../../store/actions/signup';

import SignupSchema from './schema';

const SignupForm = ({ isLoading, error, isCompleted, signUp }) => (
  <div>
    <h1>Signup</h1>
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
        signUp(values);
      }}
    >
      {({ errors, touched }) => (
        <div className="flex form_body m-16 mx-auto flex-col p-10 w-7/12 rounded">
          <div className="ml-10 mb-10 w-100">
            <div className="flex flex-row justify-between mr-4">
              <div className="tracking-widest text-3xl">
                <span className="text-indigo-800 ">E</span>
                <span className="text-orange-600">P</span>
                <span className="text-green-600">I</span>
                <span className="text-red-600">C</span>
                <span id="five">_Mail</span>{' '}
              </div>
              <img
                src="../../imgs/molecule.svg"
                alt="epicmail logo"
                className="h-12"
              />
            </div>
            <p className="text-sm">Create your EPIC_Mail account</p>
          </div>
          <Form className="flex flex-col justify-center w-100">
            <div className="flex ml-6 mb-10 w-100">
              <div className=" w-5/6">
                <Field
                  name="firstName"
                  placeholder="firstName"
                  type="string"
                  className={`${'w-11/12 h-8 p-2 border border-gray-400 text-sm outline-none rounded'} ${
                    errors.firstName ? 'border-red-700' : ''
                  }`}
                />
                {errors.firstName && touched.firstName ? (
                  <div className="text-red-400 text-xs">{errors.firstName}</div>
                ) : null}
              </div>

              <div className="w-5/6">
                <Field
                  name="lastName"
                  placeholder="lastName"
                  type="string"
                  className={`${'w-11/12 h-8 p-2 border border-gray-400 text-sm outline-none rounded'} ${
                    errors.lastName ? 'border-red-500' : ''
                  }`}
                />
                {errors.lastName && touched.lastName ? (
                  <div className="text-red-400 text-xs">{errors.lastName}</div>
                ) : null}
              </div>
            </div>

            <div className="w-100 ml-6 mb-10 w-100">
              <Field
                name="username"
                placeholder="username"
                type="string"
                className={`${'w-11/12 h-8 p-2 border border-gray-400 text-sm outline-none rounded'} ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.username && touched.username ? (
                <div className="text-red-400 text-xs">{errors.username}</div>
              ) : null}
            </div>

            <div className="w-100 ml-6 mb-10 w-100">
              <Field
                name="email"
                placeholder="email"
                type="email"
                className={`${'w-11/12 h-8 p-2 border border-gray-400 text-sm outline-none rounded'} ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && touched.enail ? (
                <div className="text-red-400 text-xs">{errors.email}</div>
              ) : null}
            </div>

            <div className="flex ml-6 mb-10 w-100">
              <div className=" w-5/6">
                <Field
                  name="password"
                  placeholder="password"
                  type="password"
                  className={`${'w-11/12 h-8 p-2 border border-gray-400 text-sm outline-none rounded'} ${
                    errors.password ? 'border-red-500' : ''
                  }`}
                />
                {errors.password && touched.password ? (
                  <div className="text-red-400 text-xs">{errors.password}</div>
                ) : null}
              </div>

              <div className="w-5/6">
                <Field
                  name="confirmPassword"
                  placeholder="confirmPassword"
                  type="password"
                  className={`${'w-11/12 h-8 p-2 border border-gray-400 text-sm outline-none rounded'} ${
                    errors.confirmPassword ? 'border-red-500' : ''
                  }`}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="text-red-400 text-xs">
                    {errors.confirmPassword}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex ml-6 w-100 flex-col justify-center">
              <button
                type="submit"
                className="mb-4 bg-blue-900 w-auto p-1 self-center text-white text-base rounded hover:bg-blue-700 button"
              >
                Sign up
              </button>
              <button
                type="submit"
                className="mb-4 w-auto p-2 self-center button hover:text-indigo-700"
              >
                Already have an account?
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  </div>
);

const mapStateToProps = state => ({
  error: state.authReducer.error
});

const mapDispatchToProps = dispatch => ({
  signUp: userData => dispatch(signupAction(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
