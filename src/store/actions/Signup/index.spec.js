import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import * as actions from './index';
import * as types from '../../actiontypes/auth';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  test('should create an action for signup pending', () => {
    const expectedAction = {
      type: types.SIGNUP_PENDING,
      payload: {
        status: 'AuthenticationLoading',
        user: {},
        error: null
      }
    };
    expect(actions.signupPending()).toEqual(expectedAction);
  });

  test('should create an action for signup success', () => {
    const user = {
      username: 'tolumide',
      password: 'password',
      firstName: 'firstName',
      lastName: 'laStName',
      secondaryEmail: 'email@we.com'
    };
    const expectedAction = {
      type: types.SIGNUP_SUCCESS,
      payload: {
        status: 'AuthenticationSuccessful',
        user: {
          ...user
        },
        error: null,
        isAuthenticated: true
      }
    };
    expect(actions.signupSuccess(user)).toEqual(expectedAction);
  });

  test('should create an action for signup failure', () => {
    const error = 'Authentication error, username or password already exists';

    const expectedAction = {
      type: types.SIGNUP_FAILURE,
      payload: {
        status: 'AuthenticationFailure',
        user: {},
        isAuthenticated: false,
        error
      }
    };

    expect(actions.signupFailure(error)).toEqual(expectedAction);
  });
});

describe('Asynchronous action', () => {
  test('signup user based on provided credentials', () => {
    const userDetails = { username: 'tolumide', token: 'a.very.so.long.token' };
    const store = mockStore({ data: [] });
    mockAxios.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          data: [userDetails]
        }
      })
    );
    const history = {
      push: f => f
    };
    // const expectedActions = [
    //   actions.signupPending(),
    //   actions.signupSuccess({ userDetails })
    // ];

    const userData = {
      username: 'tolumide',
      password: 'password',
      firstName: 'firstName',
      lastName: 'lastName',
      secondaryEmail: 'secondary@email.com'
    };

    store.dispatch(
      actions.signupAction({
        userData,
        history
      })
    );

    expect(mockAxios).toHaveBeenCalled();
  });

  test('fail user login if username already exist', () => {
    class CustomError extends Error {
      constructor(message, option = 'string') {
        super(message);
        this.response =
          option === 'object'
            ? { data: { message: this.message } }
            : { data: { message: false } };
      }
    }
    mockAxios.mockRejectedValue(
      new CustomError('Authentication Error:Email already exists', 'object')
    );
    const store = mockStore({ data: [] });
    const history = {
      push: f => f
    };

    store.dispatch(
      actions.signupAction({
        userData: { username: 'tolumide', password: 'password' },
        history
      })
    );

    expect(mockAxios).toHaveBeenCalled();
    expect(mockAxios).toHaveBeenCalledWith({
      data: { email: 'tolumide@epicmail.com', password: 'password' },
      method: 'post',
      url: 'https://epicmail-ng.herokuapp.com/api/v2/auth/signup'
    });
  });
});
