import axios from 'axios';

import config from '../../../config';

import { checkLocalStorage } from '../../../utils';

import {
  FETCH_SPECIFICSENTMESSAGE_PENDING,
  FETCH_SPECIFICSENTMESSAGE_SUCCESS,
  FETCH_SPECIFICSENTMESSAGE_FAILURE,
  RESET_FETCHSPECIFICSENTMESSAGE_STATUS
} from '../../actiontypes/messages';

export const fetchSpecificSentMessagePending = () => ({
  type: FETCH_SPECIFICSENTMESSAGE_PENDING,
  payload: {
    specificSentMessageStatus: 'pending'
  }
});

export const fetchSpecificSentMessageSuccess = specificSentMessage => ({
  type: FETCH_SPECIFICSENTMESSAGE_SUCCESS,
  payload: {
    specificSentMessageStatus: 'success',
    specificSentMessage
  }
});

export const fetchSpecificSentMessageFailure = specificSentMessageError => ({
  type: FETCH_SPECIFICSENTMESSAGE_FAILURE,
  payload: {
    specificSentMessageStatus: 'failure',
    specificSentMessage: null,
    specificSentMessageError
  }
});

export const resetfetchSentStatus = () => ({
  type: RESET_FETCHSPECIFICSENTMESSAGE_STATUS,
  payload: {
    specificSentMessageStatus: 'rest'
  }
});

export const fetchSpecificSentMessageAction = ({
  messageId,
  history
}) => async dispatch => {
  dispatch(fetchSpecificSentMessagePending());

  try {
    const token = checkLocalStorage({ history });

    const response = await axios({
      method: 'GET',
      headers: {
        authorization: `bearer ${token}`
      },
      url: `${config.apiUrl}messages/${messageId}`
    });

    const { data } = await response.data;

    dispatch(fetchSpecificSentMessageSuccess(data));

    if (history) history.push(`/message/${messageId}`);

    dispatch(resetfetchSentStatus());
  } catch ({ response }) {
    const errorMessage = response.data.error;
    dispatch(fetchSpecificSentMessageFailure(errorMessage));
    dispatch(resetfetchSentStatus());
  }
};
