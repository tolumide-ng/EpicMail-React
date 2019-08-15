import reducer from './index';
import * as types from '../../actiontypes/messages';
import { retractMessage } from '../../initialState/retractMessage';

describe('ComposeMail Reducer', () => {
  test('should return the initial state', () => {
    const initialState = reducer(undefined, {});
    expect(initialState).toEqual({
      message: null,
      retractError: null,
      retractStatus: 'rest'
    });
  });

  test('should handle retract message pending', () => {
    expect(
      reducer(retractMessage, {
        type: types.RETRACT_PENDING,
        payload: {
          message: null,
          retractError: null,
          retractStatus: 'pending'
        }
      })
    ).toEqual({
      message: null,
      retractError: null,
      retractStatus: 'pending'
    });
  });

  test('should handle retract message success', () => {
    expect(
      reducer(retractMessage, {
        type: types.RETRACT_SUCCESSFUL,
        payload: {
          message: { message: 'Message retracted successfully' },
          retractError: null,
          retractStatus: 'success'
        }
      })
    ).toEqual({
      message: { message: 'Message retracted successfully' },
      retractError: null,
      retractStatus: 'success'
    });
  });

  test('should handle retract message failure', () => {
    expect(
      reducer(retractMessage, {
        type: types.RETRACT_FAILURE,
        payload: {
          message: null,
          retractError: { message: 'Message does not exist' },
          retractStatus: 'success'
        }
      })
    ).toEqual({
      message: null,
      retractError: { message: 'Message does not exist' },
      retractStatus: 'success'
    });
  });

  test('should handle retract reset', () => {
    expect(
      reducer(retractMessage, {
        type: types.RETRACT_RESET,
        payload: {
          message: null,
          retractError: null,
          retractStatus: 'pending'
        }
      })
    ).toEqual({
      message: null,
      retractError: null,
      retractStatus: 'pending'
    });
  });
});
