import { auth } from './auth';
import { composeMail } from './composeMail';
import { composeDraft } from './composeDraft';
import { sentMessages } from './sentMessages';
import { requestReset } from './requestReset';
import { deleteMessage } from './deleteMessage';

const initialState = {
  auth,
  requestReset,
  composeMail,
  composeDraft,
  sentMessages,
  deleteMessage
};

export default initialState;
