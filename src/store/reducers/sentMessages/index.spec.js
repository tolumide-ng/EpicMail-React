import reducer from './index';
import * as types from '../../actiontypes/messages';
import { sentMessages } from '../../initialState/sentMessages';

describe('SentMessages Reducer', () => {
  test('should return the initial state', () => {
    const initialState = reducer(undefined, {});
    expect(initialState).toEqual({
      sentMessagesStatus: 'rest',
      sentMessagesError: null,
      sentMessages: {},
      fetchSentMessages: true
    });
  });

  test('should handle view sentMessage pending', () => {
    expect(
      reducer(sentMessages, {
        type: types.SENTMESSAGES_PENDING,
        payload: {
          sentMessagesStatus: 'pending',
          sentMessagesError: null,
          sentMessages: {},
          fetchSentMessages: true
        }
      })
    ).toEqual({
      sentMessagesStatus: 'pending',
      sentMessagesError: null,
      sentMessages: {},
      fetchSentMessages: true
    });
  });

  test('should handle view sent message success', () => {
    expect(
      reducer(sentMessages, {
        type: types.SENTMESSAGES_SUCCESSFUL,
        payload: {
          sentMessagesStatus: 'success',
          sentMessagesError: null,
          sentMessages: { message: 'all the messages' },
          fetchSentMessages: false
        }
      })
    ).toEqual({
      sentMessagesStatus: 'success',
      sentMessagesError: null,
      sentMessages: { message: 'all the messages' },
      fetchSentMessages: false
    });
  });

  test('should handle view sent message failure', () => {
    expect(
      reducer(sentMessages, {
        type: types.SENTMESSAGES_FAILURE,
        payload: {
          sentMessagesStatus: 'fail',
          sentMessagesError: {
            error: 'You do not have any messages at the moment'
          },
          sentMessages: null,
          fetchSentMessages: false
        }
      })
    ).toEqual({
      sentMessagesStatus: 'fail',
      sentMessagesError: {
        error: 'You do not have any messages at the moment'
      },
      sentMessages: null,
      fetchSentMessages: false
    });
  });
});
