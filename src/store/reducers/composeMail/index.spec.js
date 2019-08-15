import reducer from './index';
import * as types from '../../actiontypes/messages';
import { composeMail } from '../../initialState/composeMail';

describe('ComposeMail Reducer', () => {
  test('should return the initial state', () => {
    const initialState = reducer(undefined, {});
    expect(initialState).toEqual({
      composeStatus: 'rest',
      composeError: null,
      composeSuccess: null
    });
  });

  test('should handle compose message pending', () => {
    expect(
      reducer(composeMail, {
        type: types.COMPOSE_PENDING,
        payload: {
          composeStatus: 'pending',
          composeError: null,
          composeSuccess: { message: 'the message' }
        }
      })
    ).toEqual({
      composeStatus: 'pending',
      composeError: null,
      composeSuccess: { message: 'the message' }
    });
  });

  test('should handle compose message success', () => {
    expect(
      reducer(composeMail, {
        type: types.COMPOSE_SUCCESSFUL,
        payload: {
          composeStatus: 'success',
          composeError: null,
          composeSuccess: 'Message created'
        }
      })
    ).toEqual({
      composeStatus: 'success',
      composeError: null,
      composeSuccess: 'Message created'
    });
  });

  test('should handle compose draft failure', () => {
    expect(
      reducer(composeMail, {
        type: types.COMPOSE_FAILURE,
        payload: {
          composeStatus: 'fail',
          composeError: null,
          composeSuccess: null
        }
      })
    ).toEqual({
      composeStatus: 'fail',
      composeError: null,
      composeSuccess: null
    });
  });
});
