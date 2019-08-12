import { auth } from './auth';
import { composeMail } from './composeMail';
import { composeDraft } from './composeDraft';
import { sentMessages } from './sentMessages';
import { requestReset } from './requestReset';
import { deleteMessage } from './deleteMessage';
import { specificSentMessage } from './specificSentMessage';
import { retractMessage } from './retractMessage';

const initialState = {
  auth,
  requestReset,
  composeMail,
  composeDraft,
  sentMessages,
  deleteMessage,
  specificSentMessage,
  retractMessage
};

export default initialState;
