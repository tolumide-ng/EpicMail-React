import axios from 'axios';
import * as Toastr from 'toastr';
import config from '../../../config';
import { checkLocalStorage } from '../../../utils';

import {
  RETRACT_PENDING,
  RETRACT_SUCCESSFUL,
  RETRACT_FAILURE,
  RETRACT_RESET
} from '../../actiontypes/messages';

export const retractPending = () => ({
  type: RETRACT_PENDING,
  payload: { retractStatus: 'pending' }
});

export const retractSuccessful = message => ({
  type: RETRACT_SUCCESSFUL,
  payload: {
    message,
    retractStatus: 'success'
  }
});

export const retractFailure = retractError => ({
  type: RETRACT_FAILURE,
  payload: {
    message: null,
    retractStatus: 'failure',
    retractError
  }
});

export const retractReset = () => ({
  type: RETRACT_RESET,
  payload: {
    retractStatus: 'rest'
  }
});

export const retractAction = ({
  messageId,
  rerender,
  history
}) => async dispatch => {
  dispatch(retractPending());

  try {
    const token = checkLocalStorage();

    const response = await axios({
      method: 'DELETE',
      headers: {
        authorization: `bearer ${token}`
      },
      url: `${config.apiUrl}messages/retract/${messageId}`
    });

    const { data } = response.data;

    dispatch(retractSuccessful(data));
    Toastr.success(data);

    if (rerender) {
      history.push(`${rerender}`);
    }

    dispatch(retractReset());
  } catch ({ response }) {
    const errorMessage = response.data.error;
    Toastr.error(errorMessage);
    dispatch(retractFailure(errorMessage));
    dispatch(retractReset());
  }
};
