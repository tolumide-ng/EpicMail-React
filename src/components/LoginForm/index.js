import React from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('username is required'),
  password: Yup.string().required('password is required')
});

export const LoginFormComponent = ({ login, status, history }) => (
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
);

export default LoginFormComponent;
