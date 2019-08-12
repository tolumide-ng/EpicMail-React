import axios from 'axios';
import * as Toastr from 'toastr';
import config from '../../../config';
import { checkLocalStorage } from '../../../utils';

import {
  DELETEMESSAGE_PENDING,
  DELETEMESSAGE_FAILURE,
  DELETEMESSAGE_SUCCESSFUL,
  RESET_DELETEMESSAGE_STATUS
} from '../../actiontypes/messages';

export const deleteMessagePending = () => ({
  type: DELETEMESSAGE_PENDING,
  payload: { deleteMessageStatus: 'pending' }
});

export const deletMessageFailure = error => ({
  type: DELETEMESSAGE_FAILURE,
  payload: { error, deleteMessageStatus: 'failure' }
});

export const deleteMessageSuccessful = message => ({
  type: DELETEMESSAGE_SUCCESSFUL,
  payload: { message, deleteMessageStatus: 'success' }
});

export const deleteMessageReset = () => ({
  type: RESET_DELETEMESSAGE_STATUS,
  payload: { deleteMessageStatus: 'rest' }
});

export const deleteMessageAction = ({
  messageId,
  rerender,
  history
}) => async dispatch => {
  dispatch(deleteMessagePending());

  try {
    const token = checkLocalStorage();

    const response = await axios({
      method: 'DELETE',
      headers: {
        authorization: `bearer ${token}`
      },
      url: `${config.apiUrl}messages/${messageId}`
    });

    const { data } = response.data;

    dispatch(deleteMessageSuccessful(data));
    Toastr.success(data);

    if (rerender) {
      history.push(`${rerender}`);
    }

    dispatch(deleteMessageReset());
  } catch ({ response }) {
    const errorMessage = response.data.error;
    Toastr.error(errorMessage);
    dispatch(deletMessageFailure(errorMessage));
  }
};
