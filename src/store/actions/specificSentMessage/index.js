import axios from 'axios';

import config from '../../../config';

import {
  FETCH_SPECIFICSENTMESSAGE_PENDING,
  FETCH_SPECIFICSENTMESSAGE_SUCCESS,
  FETCH_SPECIFICSENTMESSAGE_FAILURE,
  RESET_FETCHSPECIFICSENTMESSAGE_STATUS
} from '../../actiontypes/messages';

export const fetchSpecificSentMessagePending = () => ({
  type: FETCH_SPECIFICSENTMESSAGE_PENDING,
  payload: {
    specificMessageStatus: 'pending'
  }
});

export const fetchSpecificSentMessageSuccess = message => ({
  type: FETCH_SPECIFICSENTMESSAGE_SUCCESS,
  payload: {
    specificMessageStatus: 'success',
    message
  }
});

export const fetchSpecificSentMessageFailure = error => ({
  type: FETCH_SPECIFICSENTMESSAGE_FAILURE,
  payload: {
    specificMessageStatus: 'failure',
    message: null,
    error
  }
});

export const resetfetchSentStatus = () => ({
  type: RESET_FETCHSPECIFICSENTMESSAGE_STATUS,
  payload: {
    specificSMessageStatus: 'rest'
  }
});

export const fetchSpecificSentMessageAction = ({
  messageId
}) => async dispatch => {
  dispatch(fetchSpecificSentMessageFailure());
  try {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    const { token } = user;

    const response = await axios({
      method: 'GET',
      headers: {
        authorization: `bearer ${token}`
      },
      url: `${config.apiUrl}messages/${messageId}`
    });

    const { data } = await response.data;
    console.log(
      'this is the repsonse for a specific message fetching >>>>>>>>>>',
      response
    );

    dispatch(fetchSpecificSentMessageSuccess(data));

    dispatch(resetfetchSentStatus());
  } catch ({ response }) {
    const errorMessage = response.data.error;
    dispatch(fetchSpecificSentMessageFailure(errorMessage));
    dispatch(resetfetchSentStatus());
  }
};
