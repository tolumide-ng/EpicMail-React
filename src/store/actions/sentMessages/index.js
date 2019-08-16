import axios from 'axios';

import config from '../../../config';
import {
  SENTMESSAGES_PENDING,
  SENTMESSAGES_FAILURE,
  SENTMESSAGES_SUCCESSFUL
} from '../../actiontypes/messages';

import { checkLocalStorage } from '../../../utils';

export const sentMessagesPending = () => ({
  type: SENTMESSAGES_PENDING,
  payload: {
    sentMessagesStatus: 'pending',
    fetchSentMessages: false
    // sentMessagesError: null
  }
});

export const sentMessagesSuccessful = sentMessages => ({
  type: SENTMESSAGES_SUCCESSFUL,
  payload: {
    sentMessagesStatus: 'success',
    // sentMessagesError: null,
    sentMessages,
    fetchSentMessages: false
  }
});

export const sentMessagesFailure = sentMessagesError => ({
  type: SENTMESSAGES_FAILURE,
  payload: {
    sentMessagesStatus: 'failure',
    sentMessagesError,
    fetchSentMessages: false
    // sentMessages: null
  }
});

/* istanbul ignore next */
export const sentMessagesAction = ({ history = {} }) => async dispatch => {
  dispatch(sentMessagesPending());

  const token = checkLocalStorage({ history });

  try {
    if (!token) {
      return history.push('/login');
    }
    /* istanbul ignore next */
    const response = await axios({
      method: 'GET',
      headers: {
        authorization: `bearer ${token}`
      },
      url: `${config.apiUrl}messages/sent`
    });

    const { data } = await response.data;

    dispatch(sentMessagesSuccessful(data));
  } catch ({ response }) {
    const errorMessage = response.data.error || response;
    dispatch(sentMessagesFailure(errorMessage));
  }
};
