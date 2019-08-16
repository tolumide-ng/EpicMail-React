import { setUser, logOutUser } from '../signup';

export const getUser = () => dispatch => {
  /* istanbul ignore next */
  if (localStorage.user) {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    return dispatch(setUser(user));
  }
  dispatch(logOutUser());
};

export default getUser;
