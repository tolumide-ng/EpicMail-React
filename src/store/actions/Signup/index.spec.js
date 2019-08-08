import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';

import { axiosCall } from '../../../utils';
import * as actions from './index';
import * as types from '../../actiontypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const user = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  secondaryEmail: 'secondaryEmail@email.com',
  password: 'password'
};
const token = 'edfkdnfdfnkmdf.fnjngjrtnsnbcdhdbsqebsxmvfl';
jest.mock('../../../utils');

describe('Sign up Actions', () => {
  describe('Auth Action', () => {
    let store;
    beforeEach(() => {
      moxios.install(axios);
      store = mockStore({
        error: null,
        user: {},
        isAuthenticated: false,
        isCompleted: false,
        isLoading: false
      });
    });

    afterEach(() => {
      moxios.uninstall(axios);
      store.clearActions();
      localStorage.clear();
    });

    test('should sign up user and call sign up actions', done => {
      const expectedActions = [
        actions.cleanupAuth(),
        actions.signupPending(),
        actions.signupSuccess(user)
      ];
      axiosCall.mockResolvedValue({
        data: {
          data: {
            status: 201,
            0: {
              ...user,
              token:
                'eyJhbGciOiJIUzkpXVCJ9.eyJpc3MiOi1sImlhdCI6MIjoxNTY1MzUwMDYzNjUzfQ.QyT2M7NN7Vf1DTY',
              email: 'info.email@epicmail.com',
              id: 23
            }
          }
        }
      });
      store.dispatch(actions.signupAction(user)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });
  });
});
