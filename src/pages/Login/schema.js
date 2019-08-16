import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('username is required'),
  password: Yup.string().required('password is required')
});

export default LoginSchema;
