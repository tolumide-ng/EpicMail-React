import reducer from './index';
import * as types from '../../actiontypes/auth';
import { requestReset } from '../../initialState/requestReset';

describe('ComposeMail Reducer', () => {
  test('should return the initial state', () => {
    const initialState = reducer(undefined, {});
    expect(initialState).toEqual({
      requestResetStatus: 'rest',
      user: {},
      error: null
    });
  });

  test('should handle password reset pending', () => {
    expect(
      reducer(requestReset, {
        type: types.REQUEST_RESET_PENDING,
        payload: {
          requestResetStatus: 'pending',
          user: {},
          error: null
        }
      })
    ).toEqual({
      requestResetStatus: 'pending',
      user: {},
      error: null
    });
  });

  test('should handle password reset success', () => {
    expect(
      reducer(requestReset, {
        type: types.REQUEST_RESET_SUCCESS,
        payload: {
          requestResetStatus: 'success',
          user: { email: 'tolumide@email.com' },
          error: null
        }
      })
    ).toEqual({
      requestResetStatus: 'success',
      user: { email: 'tolumide@email.com' },
      error: null
    });
  });

  test('should handle password reset failure', () => {
    expect(
      reducer(requestReset, {
        type: types.REQUEST_RESET_FAILURE,
        payload: {
          requestResetStatus: 'fail',
          user: null,
          error: { message: 'Email not found' }
        }
      })
    ).toEqual({
      requestResetStatus: 'fail',
      user: null,
      error: { message: 'Email not found' }
    });
  });
});
