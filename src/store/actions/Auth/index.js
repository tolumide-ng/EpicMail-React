import { setUser } from '../signup';

export const getUser = () => dispatch => {
  /* istanbul ignore next */
  if (localStorage.user) {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    dispatch(setUser(user));
  }
};

export default getUser;
