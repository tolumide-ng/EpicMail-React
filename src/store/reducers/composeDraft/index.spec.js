import reducer from './index';
import * as types from '../../actiontypes/messages';
import { composeDraft } from '../../initialState/composeDraft';

describe('ComposeDraft Reducer', () => {
  test('should return the initial state', () => {
    const initialState = reducer(undefined, {});
    expect(initialState).toEqual({
      composedraftStatus: 'rest',
      composedraftSuccess: null,
      composedraftError: null
    });
  });

  test('should handle compose draft pending', () => {
    const reduced = reducer(composeDraft, {
      type: types.COMPOSEDRAFT_PENDING,
      payload: {
        composedraftStatus: 'pending'
      }
    });
    expect(reduced).toEqual({
      composedraftStatus: 'pending',
      composedraftSuccess: null,
      composedraftError: null
    });
  });

  test('should handle compose draft success', () => {
    const reduced = reducer(composeDraft, {
      type: types.COMPOSEDRAFT_SUCCESSFUL,
      payload: {
        composedraftStatus: 'success',
        composedraftSuccess: { message: 'this is the message' }
      }
    });
    expect(reduced).toEqual({
      composedraftStatus: 'success',
      composedraftSuccess: { message: 'this is the message' },
      composedraftError: null
    });
  });

  test('should handle compose draft failure', () => {
    const reduced = reducer(composeDraft, {
      type: types.COMPOSEDRAFT_FAILURE,
      payload: {
        composedraftStatus: 'fail',
        composedraftError: 'Not enough message'
      }
    });

    expect(reduced).toEqual({
      composedraftStatus: 'fail',
      composedraftSuccess: null,
      composedraftError: 'Not enough message'
    });
  });
});
