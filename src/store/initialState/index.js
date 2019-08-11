import { auth } from './auth';
import { composeMail } from './composeMail';
import { composeDraft } from './composeDraft';
import { sentMessages } from './sentMessages';
import { requestReset } from './requestReset';
import { deleteMessage } from './deleteMessage';
import { specificSentMessage } from './specificSentMessage';

const initialState = {
  auth,
  requestReset,
  composeMail,
  composeDraft,
  sentMessages,
  deleteMessage,
  specificSentMessage
};

export default initialState;
