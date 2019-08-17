import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(3, 'firstName is too short')
    .required('Required'),
  lastName: Yup.string()
    .trim()
    .min(3, 'lastName is too short!')
    .required('Required'),
  email: Yup.string()
    .trim()
    .email('Invalid email address')
    .required('Required'),
  username: Yup.string()
    .required('Required')
    .trim(),
  password: Yup.string()
    .trim()
    .min(6, 'minumum of 6 characters')
    .matches(
      /^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/,
      'Password must be 8 characters long with atleast one special character and uppercase letter'
    )
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords don't match!")
    .required('Required')
});

export default SignupSchema;
