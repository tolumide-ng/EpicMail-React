import axios from 'axios';
import * as Toastr from 'toastr';

import config from '../../../config';
import {
  COMPOSEDRAFT_PENDING,
  COMPOSEDRAFT_SUCCESSFUL,
  COMPOSEDRAFT_FAILURE
} from '../../actiontypes/messages';

export const composeDraftPending = () => ({
  type: COMPOSEDRAFT_PENDING,
  payload: {
    composedraftStatus: 'pending',
    composedraftError: null,
    composeDraftSuccess: null
  }
});

export const composeDraftFailure = composedraftError => ({
  type: COMPOSEDRAFT_FAILURE,
  payload: {
    composedraftStatus: 'fail',
    composedraftError,
    composedraftSuccess: null
  }
});

export const composeDraftSuccess = composedraftSuccess => ({
  type: COMPOSEDRAFT_SUCCESSFUL,
  payload: {
    composedraftStatus: 'success',
    composedraftSuccess,
    composedraftError: null
  }
});

export const composeDraftAction = ({
  recipient: receiverEmail,
  subject,
  message
}) => async dispatch => {
  dispatch(composeDraftPending());
  let user = localStorage.getItem('user');
  user = JSON.parse(user);
  const { token } = user;
  try {
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
      url: `${config.apiUrl}messages/draft`
    });

    const { message: data } = response.data;
    Toastr.success(message);
    dispatch(composeDraftSuccess(data));
  } catch ({ response }) {
    const errorMessage = response.data.error || response;
    Toastr.error(errorMessage);
    dispatch(composeDraftFailure(errorMessage));
  }
};
