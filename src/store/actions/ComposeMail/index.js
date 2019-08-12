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

// export const compos

export const composeMailAction = ({
  recipient: receiverEmail,
  subject,
  message
}) => async dispatch => {
  dispatch(composePending());

  try {
    const token = checkLocalStorage();

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

    // dispatch(setSentMessagesStatusToTrue())

    // const response = await fetch(`${config.apiUrl}messages/`, {
    //   method: 'post',
    //   headers: {
    //     'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //     authorization: `bearer ${token}`
    //   },
    //   body: { receiverEmail, subject, message },
    //   mode: 'cors'
    // });
  } catch ({ response }) {
    const errorMessage = response.data.error || response;
    Toastr.error(errorMessage);
    dispatch(composeFailure(errorMessage));
  }
};