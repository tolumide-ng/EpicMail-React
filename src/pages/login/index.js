import './index.css';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginSchema from './schema';
import { loginAction } from '../../store/actions/Login';

const LoginForm = ({ isLoading, error, isCompleted, login }) => (
  <div className="flex mt-20 mx-auto flex-col p-10 w-100 rounded justify-center">
    <Formik
      className="flex flex-col justify-center"
      initialValues={{
        username: '',
        password: ''
      }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        login(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col justify-center items-center p-10 w-9/12 mx-auto">
          <h1 className="w-64 p-2 text-center text-2xl text-white mb-8">
            SIGN IN
          </h1>
          <div className="mb-10">
            <Field
              name="username"
              placeholder="username"
              className={`${'w-64 h-10 p-2 pl-4 border border-gray-400 text-sm outline-none rounded-lg'} ${
                errors.username ? 'border-red-500' : ''
              }`}
            />
            {errors.username && touched.username ? (
              <div className="text-red-400 text-center pt-2">
                {errors.username}
              </div>
            ) : null}
          </div>

          <div className="mb-10">
            <Field
              name="password"
              placeholder="password"
              type="password"
              className={`${'w-64 h-10 p-2 pl-4 border border-gray-400 text-sm outline-none rounded-lg'} ${
                errors.password ? 'border-red-500' : ''
              }`}
            />
            {errors.password && touched.password ? (
              <div className="text-red-400 text-center pt-2">
                {errors.password}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-blue-900 w-auto py-2 px-6 self-center text-white text-base rounded-full hover:bg-blue-700 button"
          >
            Sign in now
          </button>
        </Form>
      )}
    </Formik>
    <button
      type="submit"
      className="mb-4 w-auto self-center button hover:text-yellow-200 text-white text-sm"
    >
      Forgot password ?
    </button>
  </div>
);

const mapStateToProps = state => ({
  isLoading: state.loginReducer.isLoading,
  isCompleted: state.loginReducer.isCompleted,
  error: state.loginReducer.error
});

const mapDispatchToProps = dispatch => ({
  login: userData => dispatch(loginAction(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
