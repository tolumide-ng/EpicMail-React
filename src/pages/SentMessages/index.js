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
      deleteMessageStatus === 'success' ||
      deleteMessageStatus === 'failure'
    ) {
      fetchSentMessages({ history });
    }
  }, [fetchSentStatus, composeStatus, deleteMessageStatus]);

  return (
    <>
      <div className="flex form_body m-10 mx-auto flex-col p-10 w-10/12 rounded h-full">
        <h1 className="text-center font-bold mb-4 text-xl">Sent Messages</h1>
        {sentMessages.length > 0 &&
          sentMessages.map(message => (
            <SentMessagesComponent
              key={message.id}
              props={message}
              history={history}
            />
          ))}
        {/* {sentMessages.length < 1 && <div className='font-bold text-center'>You do not have any messages at the moment<div/>} */}
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
  fetchSentMessages: ({ history }) => dispatch(sentMessagesAction({ history }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewSentMessages);
