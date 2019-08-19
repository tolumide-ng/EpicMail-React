import React from 'react';
import { connect } from 'react-redux';
import { BrowserHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { deleteMessageAction } from '../../store/actions/deleteMessage';
import { fetchSpecificSentMessageAction } from '../../store/actions/specificSentMessage';
import { limitReceiverLenght, convertDate, displaySubject } from '../../utils';

export const SentMessages = ({
  props,
  deleteSpecificMessage,
  viewSentMessage,
  history,
  user
}) => {
  const { createdon, id, receiveremail, subject, message } = props;

  const handleDelete = ({ id }) => {
    deleteSpecificMessage({ messageId: id });
  };

  const handleClick = ({ id }) => {
    viewSentMessage({ messageId: id, history });
  };

  return (
    <div className="w-11/12 flex justify-between bg-gray-300 mb-1 p-2 mx-auto px-4">
      <div
        onClick={() => handleClick({ id })}
        className="w-full flex justify-between"
        role="presentation"
      >
        {/* <Link className="w-full flex justify-between" to={`/message/${id}`}> */}
        <div className="w-2/12">{convertDate(createdon)}</div>
        <div className="w-1/4">{limitReceiverLenght(receiveremail)}</div>
        <div className="w-2/4">{displaySubject({ subject, message })}</div>
        {/* </Link> */}
      </div>

      <button
        className="px-1"
        type="button"
        onClick={e => handleDelete({ id })}
      >
        <strong>X</strong>
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  deleteSpecificMessage: messageId => dispatch(deleteMessageAction(messageId)),
  viewSentMessage: ({ messageId, history }) =>
    dispatch(fetchSpecificSentMessageAction({ messageId, history }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SentMessages);
