import React from 'react';
import moxios from 'moxios';

import * as actions from './index';
import * as types from '../../actiontypes';
import { makeMockStore } from '../../../helpers';

const store = makeMockStore({
  user: {},
  isLoading: false,
  isAuthenticated: false,
  isCompleted: true
});

const userData = {
  firstName: 'firstName',
  lastName: 'lastName',
  secondaryEmail: 'secondaryEmail',
  email: 'email',
  password: 'password',
  history: {}
};

describe('signup actions', () => {
  it('should create a signup pending action', () => {
    const payload = {
      isLoading: true,
      isAuthenticated: false,
      isCompleted: false,
      error: null,
      user: {}
    };
    const expectedSignupAction = {
      type: types.SIGNUP_PENDING,
      payload
    };
    expect(actions.signupPending()).toEqual(expectedSignupAction);
  });

  it('should create an action on user signup failure', () => {
    const error = 'Username already exists, please use a valid username';
    const expectedSignupFailure = {
      type: types.SIGNUP_FAILURE,
      payload: {
        isLoading: false,
        isCompleted: true,
        error,
        isAuthenticated: false,
        user: {}
      }
    };
    expect(actions.signupFailure(error)).toEqual(expectedSignupFailure);
  });

  it('should clean the redux store', () => {
    const expectedCleanupAuth = {
      type: types.CLEAN_UP
    };
    expect(actions.cleanupAuth()).toEqual(expectedCleanupAuth);
  });

  it('should dispatch an action for succesful signup', () => {
    const user = {
      token: 'thisshouldbeaverylongtoken.from.theserverside',
      username: 'theusersname'
    };
    const expectedSignupSuccess = {
      type: types.SIGNUP_SUCCESS,
      payload: {
        isLoading: false,
        isCompleted: true,
        isAuthenticated: true,
        user
      }
    };
    expect(actions.signupSuccess(user)).toEqual(expectedSignupSuccess);
  });

  it('should dispatch an action to setup the user', () => {
    const user = {
      token: 'thisshouldbeaverylongtoken.from.theserverside',
      username: 'theusersname'
    };
    const expectedSignupSuccess = {
      type: types.SIGNUP_SUCCESS,
      payload: {
        isLoading: false,
        isCompleted: true,
        isAuthenticated: true,
        user
      }
    };

    expect(actions.signupSuccess(user)).toEqual(expectedSignupSuccess);
  });

  it('should successfully setup a user on the redux store', () => {
    const user = {
      token:
        'thisshouldbeaverylongtoken.from.localStorage.incaseofapagerefreshbytheuser',
      username: 'usersusername'
    };
    const expectedSetupUser = {
      type: types.SETUP_USER,
      payload: {
        isLoading: false,
        isCompleted: true,
        isAuthenticated: true,
        user
      }
    };
    expect(actions.setupUser(user)).toEqual(expectedSetupUser);
  });
});

describe('user signup action', () => {
  const mockSuccess = info => ({
    data: {
      data: {
        status: 201,
        0: {
          ...info,
          token:
            'eyJhbGciOiJIUzkpXVCJ9.eyJpc3MiOi1sImlhdCI6MIjoxNTY1MzUwMDYzNjUzfQ.QyT2M7NN7Vf1DTY',
          email: 'info.email@epicmail.com',
          id: 23
        }
      }
    }
  });

  const mockError = error => ({ data: { status: 400, error } });

  beforeEach(() => moxios.install());
  afterEach(() => {
    moxios.uninstall();
    store.clearActions();
  });

  it('succesfull api request setup a user', done => {
    const expectedResponse = {
      email: 'username@epicmail.com',
      firstname: 'firstName',
      id: 24,
      lastname: 'lastName',
      secondaryEmail: 'secondaryEmail@email.com'
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(expectedResponse));
    });

    // Expetected Array of called actions
    const expectedActions = [
      actions.signupPending(),
      actions.signupSuccess(expectedResponse),
      actions.cleanupAuth()
    ];
    store.dispatch(actions.signupAction(userData)).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled).toEqual(expectedActions);
    });
    done();
  });

  it('dispatches signupFailure action on failed api request', done => {
    const errorUserData = { ...userData };
    errorUserData.email = 'wronguser$e##';
    const error = 'Please ensure email is a valid email';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockError(error));
    });

    const expectedActions = [actions.signupFailure(error)];

    store.dispatch(actions.signupAction(errorUserData)).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled).toEqual(expectedActions);
    });
    done();
  });
});

describe('succesful getUser action', () => {
  beforeEach(() => {
    store.clearActions();
    localStorage.clear();
  });

  it('should set user if token exist and app is reloaded', () => {
    const token =
      'eyJhbGciOiJIUzkpXVCJ9.eyJpc3MiOi1sImlhdCI6MIjoxNTY1MzUwMDYzNjUzfQ.QyT2M7NN7Vf1DTY';
    const user = { ...userData, token };
    const expectedActions = [actions.setupUser(user)];

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    store.dispatch(actions.getUser());

    const actionsCalled = store.getActions();

    expect(actionsCalled).toEqual(expectedActions);
  });
});
