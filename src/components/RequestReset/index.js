import React from 'react';
import { Formik, Form, Field } from 'formik';

export const RequestResetFormComponent = ({
  requestReset,
  ResetRequestSchema
}) => (
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
);

export default RequestResetFormComponent;
