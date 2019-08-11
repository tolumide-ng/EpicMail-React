import axios from 'axios';
import * as Toastr from 'toastr';
import config from '../../../config';

import {
  DELETEMESSAGE_PENDING,
  DELETEMESSAGE_FAILURE,
  DELETEMESSAGE_SUCCESSFUL,
  RESET_DELETEMESSAGE_STATUS
} from '../../actiontypes/messages';

export const deleteMessagePending = () => ({
  type: DELETEMESSAGE_PENDING,
  deleteMessageStatus: 'pending'
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

export const deleteMessageAction = ({ messageId }) => async dispatch => {
  dispatch(deleteMessagePending());

  try {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    const { token } = user;

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
    dispatch(deleteMessageReset());
  } catch ({ response }) {
    const errorMessage = response.data.error;
    Toastr.error(errorMessage);
    dispatch(deletMessageFailure(errorMessage));
  }
};
