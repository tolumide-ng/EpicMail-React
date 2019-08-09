import { signupSuccess } from '../Signup';

export const getUser = () => dispatch => {
  /* istanbul ignore next */
  if (localStorage.user) {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    dispatch(signupSuccess(user));
  }
};

export default getUser;
