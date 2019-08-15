import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import * as actions from './index';
import * as types from '../../actiontypes/auth';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  test('should create an action for login pending', () => {
    const expectedAction = {
      type: types.LOGIN_PENDING,
      payload: {
        status: 'AuthenticationLoading',
        user: {},
        error: null
      }
    };
    expect(actions.loginPending()).toEqual(expectedAction);
  });

  test('should create an action for login success', () => {
    const user = { username: 'tolumide', password: 'password' };
    const expectedAction = {
      type: types.LOGIN_SUCCESS,
      payload: {
        status: 'AuthenticationSuccessful',
        user: {
          username: 'tolumide',
          password: 'password'
        },
        error: null,
        isAuthenticated: true
      }
    };
    expect(actions.loginSuccess(user)).toEqual(expectedAction);
  });

  test('should create an action for login failure', () => {
    const error = 'Authentication error, username or password is incorrect';

    const expectedAction = {
      type: types.LOGIN_FAILURE,
      payload: {
        status: 'AuthenticationFailure',
        user: {},
        isAuthenticated: false,
        error
      }
    };

    expect(actions.loginFailure(error)).toEqual(expectedAction);
  });
});

describe('Asynchronous action', () => {
  test('login user based on provided credentials', () => {
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
    const expectedActions = [
      actions.loginPending(),
      actions.loginSuccess({ userDetails })
    ];

    // return store.dispatch(actions.fetchTodos()).then(() => {
    //   // return of async actions
    //   expect(store.getActions()).toEqual(expectedActions)
    // })
    store.dispatch(
      actions.loginAction({
        userData: { username: 'tolumide', password: 'password' },
        history
      })
    );

    expect(mockAxios).toHaveBeenCalled();
    expect(mockAxios).toHaveBeenCalledWith({
      data: { email: 'tolumide@epicmail.com', password: 'password' },
      method: 'post',
      url: 'https://epicmail-ng.herokuapp.com/api/v2/auth/login'
    });
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
      actions.loginAction({
        userData: { username: 'tolumide', password: 'password' },
        history
      })
    );

    expect(mockAxios).toHaveBeenCalled();
    expect(mockAxios).toHaveBeenCalledWith({
      data: { email: 'tolumide@epicmail.com', password: 'password' },
      method: 'post',
      url: 'https://epicmail-ng.herokuapp.com/api/v2/auth/login'
    });
  });
});
