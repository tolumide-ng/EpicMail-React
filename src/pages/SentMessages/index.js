import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { sentMessagesAction } from '../../store/actions/sentMessages';
import SentMessagesComponent from '../../components/sentMessages';

const ViewSentMessages = ({
  user,
  sentMessages,
  composeStatus,
  sentMessagesStatus,
  fetchSentMessages,
  fetchSentStatus,
  deleteMessageStatus,
  history
}) => {
  useEffect(() => {
    if (
      fetchSentStatus ||
      composeStatus === 'success' ||
      deleteMessageStatus === 'success'
    ) {
      fetchSentMessages();
    }
  }, [fetchSentStatus, composeStatus, deleteMessageStatus]);

  return (
    <>
      <div className="flex form_body m-10 mx-auto flex-col p-10 w-10/12 rounded h-full">
        These are supposed to be your sent messages
        {sentMessages.length > 0 &&
          sentMessages.map(message => (
            <SentMessagesComponent
              key={message.id}
              props={message}
              history={history}
            />
          ))}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  sentMessages: state.sentMessagesReducer.sentMessages,
  user: state.authReducer.user,
  person: state,
  composeStatus: state.composeMailReducer.composeStatus,
  sentMessagesStatus: state.sentMessagesReducer.sentMessagesStatus,
  fetchSentStatus: state.sentMessagesReducer.fetchSentMessages,
  deleteMessageStatus: state.deleteMessageReducer.deleteMessageStatus
});

const mapDispatchToProps = dispatch => ({
  fetchSentMessages: () => dispatch(sentMessagesAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewSentMessages);
