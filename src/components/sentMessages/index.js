import React from 'react';
import { connect } from 'react-redux';
import { deleteMessageAction } from '../../store/actions/deleteMessage';
import { limitReceiverLenght, convertDate, displaySubject } from '../../utils';

export const SentMessages = ({ props, deleteSpecificMessage }) => {
  const { createdon, id, receiveremail, subject, message } = props;

  const handleDelete = ({ id }) => {
    deleteSpecificMessage({ messageId: id });
  };

  return (
    <div className="w-11/12 flex justify-between bg-gray-300 mb-1 p-2 mx-auto px-4">
      <div className="w-2/12">{convertDate(createdon)}</div>
      <div className="w-1/4">{limitReceiverLenght(receiveremail)}</div>
      <div className="w-2/4">{displaySubject({ subject, message })}</div>
      {/* <div className="invisible">{id}</div> */}
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  deleteSpecificMessage: messageId => dispatch(deleteMessageAction(messageId))
});

// export default sentMessages;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SentMessages);
