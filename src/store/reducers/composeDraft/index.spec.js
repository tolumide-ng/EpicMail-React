import reducer from './index';
import * as types from '../../actiontypes/messages';
import { composeDraft } from '../../initialState/composeDraft';

describe('ComposeDraft Reducer', () => {
  test('should return the initial state', () => {
    const initialState = reducer(undefined, {});
    expect(initialState).toEqual({
      composedraftStatus: 'rest',
      composedraftError: null,
      composeDraftSuccess: null
    });
  });

  test('should handle compose draft pending', () => {
    expect(
      reducer(composeDraft, {
        type: types.COMPOSEDRAFT_PENDING,
        payload: {
          composedraftStatus: 'pending'
        }
      })
    ).toEqual({
      composedraftStatus: 'pending',
      composedraftError: null,
      composeDraftSuccess: null
    });
  });

  test('should handle compose draft success', () => {
    expect(
      reducer(composeDraft, {
        type: types.COMPOSEDRAFT_SUCCESSFUL,
        payload: {
          composedraftStatus: 'success',
          composeDraftSuccess: { message: 'this is the message' }
        }
      })
    ).toEqual({
      composedraftStatus: 'success',
      composedraftError: null,
      composeDraftSuccess: { message: 'this is the message' }
    });
  });

  test('should handle compose draft failure', () => {
    expect(
      reducer(composeDraft, {
        type: types.COMPOSEDRAFT_FAILURE,
        payload: {
          composedraftStatus: 'fail',
          composedraftError: 'Not enough message'
        }
      })
    ).toEqual({
      composedraftStatus: 'fail',
      composedraftError: 'Not enough message',
      composeDraftSuccess: null
    });
  });
});
