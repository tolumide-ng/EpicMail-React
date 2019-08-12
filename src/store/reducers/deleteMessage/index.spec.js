import reducer from './index';
import * as types from '../../actiontypes/messages';
import { deleteMessage } from '../../initialState/deleteMessage';

describe('ComposeMail Reducer', () => {
  test('should return the initial state', () => {
    const initialState = reducer(undefined, {});
    expect(initialState).toEqual({
      deleteMessageStatus: 'rest',
      error: null,
      message: null
    });
  });

  test('should handle delete message pending', () => {
    expect(
      reducer(deleteMessage, {
        type: types.DELETEMESSAGE_PENDING,
        payload: {
          deleteMessageStatus: 'pending',
          error: null,
          message: null
        }
      })
    ).toEqual({
      deleteMessageStatus: 'pending',
      error: null,
      message: null
    });
  });

  test('should handle delete message success', () => {
    expect(
      reducer(deleteMessage, {
        type: types.DELETEMESSAGE_SUCCESSFUL,
        payload: {
          deleteMessageStatus: 'success',
          error: null,
          message: { message: 'message deleted successfully' }
        }
      })
    ).toEqual({
      deleteMessageStatus: 'success',
      error: null,
      message: { message: 'message deleted successfully' }
    });
  });

  test('should handle delete message failure', () => {
    expect(
      reducer(deleteMessage, {
        type: types.DELETEMESSAGE_FAILURE,
        payload: {
          deleteMessageStatus: 'fail',
          error: { message: 'Message not found' },
          message: null
        }
      })
    ).toEqual({
      deleteMessageStatus: 'fail',
      error: { message: 'Message not found' },
      message: null
    });
  });

  test('should handle delete reset status', () => {
    expect(
      reducer(deleteMessage, {
        type: types.RESET_DELETEMESSAGE_STATUS,
        payload: {
          deleteMessageStatus: 'rest'
        }
      })
    ).toEqual({
      deleteMessageStatus: 'rest',
      error: null,
      message: null
    });
  });
});
