import * as Toastr from 'toastr';
import axios from 'axios';
import { checkLocalStorage } from '../../../utils';

import config from '../../../config';
import {
  COMPOSE_PENDING,
  COMPOSE_SUCCESSFUL,
  COMPOSE_FAILURE
} from '../../actiontypes/messages';

import { sentMessagesAction } from '../sentMessages';

export const composePending = () => ({
  type: COMPOSE_PENDING,
  payload: {
    composeStatus: 'pending',
    composeError: null,
    composeSuccess: null
  }
});

export const composeFailure = composeError => ({
  type: COMPOSE_FAILURE,
  payload: {
    composeStatus: 'fail',
    composeError,
    composeSuccess: null
  }
});

export const composeSuccessful = composeSuccess => ({
  type: COMPOSE_SUCCESSFUL,
  payload: {
    composeStatus: 'success',
    composeError: null,
    composeSuccess
  }
});

export const composeMailAction = ({
  history,
  wholeMessage
}) => async dispatch => {
  const { recipient: receiverEmail, subject, message } = wholeMessage;
  dispatch(composePending());

  try {
    const token = checkLocalStorage({ history });

    const response = await axios({
      method: 'POST',
      data: {
        receiverEmail: receiverEmail[0],
        subject: subject[0] || '',
        message: message[0] || ''
      },
      headers: {
        authorization: `bearer ${token}`
      },
      url: `${config.apiUrl}messages/`
    });

    const { message: data } = response.data;
    Toastr.success(data);

    dispatch(composeSuccessful(data));

    dispatch(sentMessagesAction());
    return;
  } catch ({ response }) {
    // let errorMessage;
    const errorMessage = response.data.error || response;
    Toastr.error(errorMessage);
    dispatch(composeFailure(errorMessage));
  }
};
