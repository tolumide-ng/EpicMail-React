import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('username is required')
});

export default LoginSchema;
