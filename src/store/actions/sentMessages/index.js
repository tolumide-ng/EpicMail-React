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

export const sentMessagesAction = () => async dispatch => {
  dispatch(sentMessagesPending());
  console.log('just dispatched this action');

  const token = checkLocalStorage();

  try {
    const response = await axios({
      method: 'GET',
      headers: {
        authorization: `bearer ${token}`
      },
      url: `${config.apiUrl}messages/sent`
    });

    console.log('this is the resopiosne>>>>>>>>>> ', response);

    const { data } = await response.data;

    dispatch(sentMessagesSuccessful(data));
  } catch ({ response }) {
    const errorMessage = response.data.error || response;
    dispatch(sentMessagesFailure(errorMessage));
  }
};
