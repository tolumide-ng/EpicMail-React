import reducer from './index';
import * as types from '../../actiontypes/auth';
import {auth} from '../../initialState/auth';

describe('Auth Reducer', () => {
  test('should return the initial state', () => {
    const initialState = reducer(undefined, {});
    expect(initialState).toEqual({
      status: 'rest',
      error: null,
      isAuthenticated: false,
      isStarting: true,
      user: {}
    });
  });

  test('should handle login pending', () => {
    expect(
      reducer([], {
        type: types.LOGIN_PENDING,
        payload: {
          status: 'AuthenticationLoading',
          user: {},
          error: null
        }
      })
    ).toEqual({
      status: 'AuthenticationLoading',
      user: {},
      error: null
    });
  });

  test('should handle login success', () => {
    expect(
      reducer(auth, {
        type: types.LOGIN_SUCCESS,
        payload: {
          status: 'AuthenticationSuccessful',
          user: { name: 'tolumide' },
          error: null,
          isAuthenticated: true
        }
      })
    ).toEqual({
      status: 'AuthenticationSuccessful',
      user: { name: 'tolumide' },
      error: null,
      isAuthenticated: true,
      isStarting: true
    });
  });

  test('should handle login failure', () => {
    expect(
      reducer(auth, {
        type: types.LOGIN_FAILURE,
        payload: {
          status: 'AuthenticationFailure',
          user: {},
          error: 'Authentication Error',
          isAuthenticated: false
        }
      })
    ).toEqual({
      status: 'AuthenticationFailure',
      user: {},
      error: 'Authentication Error',
      isAuthenticated: false,
      isStarting: true
    });
  });

  test('should handle signup pending', () => {
    expect(
      reducer([], {
        type: types.SIGNUP_PENDING,
        payload: {
          status: 'AuthenticationLoading',
          user: {},
          error: null
        }
      })
    ).toEqual({
      status: 'AuthenticationLoading',
      user: {},
      error: null
    });
  });

  test('should handle signup success', () => {
    expect(
      reducer(auth, {
        type: types.SIGNUP_SUCCESS,
        payload: {
          status: 'AuthenticationSuccessful',
          user: { name: 'tolumide' },
          error: null,
          isAuthenticated: true
        }
      })
    ).toEqual({
      status: 'AuthenticationSuccessful',
      user: { name: 'tolumide' },
      error: null,
      isAuthenticated: true,
      isStarting: true
    });
  });

  test('should handle signup failure', () => {
    expect(
      reducer(auth, {
        type: types.SIGNUP_FAILURE,
        payload: {
          status: 'AuthenticationFailure',
          user: {},
          error: 'Authentication Error',
          isAuthenticated: false
        }
      })
    ).toEqual({
      status: 'AuthenticationFailure',
      user: {},
      error: 'Authentication Error',
      isAuthenticated: false,
      isStarting: true
    });
  });

  test('should handle setting up a user', () => {
    expect(
      reducer([], {
        type: types.SET_USER,
        payload: {
          isStarting: false,
          status: 'AuthenticationSuccessful',
          user: { name: 'tolumide' },
          isAuthenticated: true
        }
      })
    ).toEqual({
      isStarting: false,
      status: 'AuthenticationSuccessful',
      user: { name: 'tolumide' },
      isAuthenticated: true
    });
  });
});
