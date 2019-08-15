import './index.css';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ResetRequestSchema from './schema';
import { requestResetAction } from '../../store/actions/requestReset';

const RequestResetForm = ({ isLoading, error, isCompleted, requestReset }) => (
  <div className="flex mt-20 mx-auto flex-col p-10 w-100 rounded justify-center">
    <Formik
      className="flex flex-col justify-center"
      initialValues={{
        username: '',
        password: ''
      }}
      validationSchema={ResetRequestSchema}
      onSubmit={values => {
        requestReset(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col justify-center items-center p-10 w-9/12 mx-auto">
          <h1 className="w-64 p-2 text-center text-2xl text-white mb-8">
            REQUEST RESET
          </h1>
          <div className="mb-10">
            <Field
              name="username"
              placeholder="username"
              className={`${'w-64 h-10 p-2 pl-4 border border-gray-400 text-sm outline-none rounded-lg text-center'} ${
                errors.username ? 'border-red-500' : ''
              }`}
            />
            {errors.username && touched.username ? (
              <div className="text-red-400 text-center pt-2">
                {errors.username}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-blue-900 w-auto py-2 px-6 self-center text-white text-base rounded-full hover:bg-blue-700 button"
          >
            Reset password
          </button>
        </Form>
      )}
    </Formik>
    <Link
      to="/login"
      className="mb-4 w-auto self-center button hover:text-yellow-200 text-white text-sm"
    >
      Login{' '}
    </Link>
  </div>
);

const mapStateToProps = state => ({
  requestResetStatus: state.requestResetReducer.requestResetStatus,
  user: state.requestResetReducer.user,
  error: state.requestResetReducer.error
});

const mapDispatchToProps = dispatch => ({
  requestReset: userData => dispatch(requestResetAction(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestResetForm);
