import reducer from './index';
import * as types from '../../actiontypes/messages';
import { specificSentMessage } from '../../initialState/specificSentMessage';

describe('SpecificSent Messages Reducer', () => {
  test('should return the initial state', () => {
    const initialState = reducer(undefined, {});
    expect(initialState).toEqual({
      specificSentMessageStatus: 'rest',
      specificSentMessage: null,
      specificSentMessageError: null
    });
  });

  test('should handle view specific sent Message pending', () => {
    expect(
      reducer(specificSentMessage, {
        type: types.FETCH_SPECIFICSENTMESSAGE_PENDING,
        payload: {
          specificSentMessageStatus: 'pending',
          specificSentMessage: null,
          specificSentMessageError: null
        }
      })
    ).toEqual({
      specificSentMessageStatus: 'pending',
      specificSentMessage: null,
      specificSentMessageError: null
    });
  });

  test('should handle view speicific sent message success', () => {
    expect(
      reducer(specificSentMessage, {
        type: types.FETCH_SPECIFICSENTMESSAGE_SUCCESS,
        payload: {
          specificSentMessageStatus: 'success',
          specificSentMessage: { message: 'details of the fetched message' },
          specificSentMessageError: null
        }
      })
    ).toEqual({
      specificSentMessageStatus: 'success',
      specificSentMessage: { message: 'details of the fetched message' },
      specificSentMessageError: null
    });
  });

  test('should handle view specific sent message failure', () => {
    expect(
      reducer(specificSentMessage, {
        type: types.FETCH_SPECIFICSENTMESSAGE_FAILURE,
        payload: {
          specificSentMessageStatus: 'success',
          specificSentMessage: null,
          specificSentMessageError: { error: 'This message does not exist' }
        }
      })
    ).toEqual({
      specificSentMessageStatus: 'success',
      specificSentMessage: null,
      specificSentMessageError: { error: 'This message does not exist' }
    });
  });

  test('should handle reset view specific sent message failure', () => {
    expect(
      reducer(specificSentMessage, {
        type: types.RESET_FETCHSPECIFICSENTMESSAGE_STATUS,
        payload: {
          specificSentMessageStatus: 'reset',
          specificSentMessage: null,
          specificSentMessageError: null
        }
      })
    ).toEqual({
      specificSentMessageStatus: 'reset',
      specificSentMessage: null,
      specificSentMessageError: null
    });
  });
});
