import React from 'react';

const SpecificSentMessage = () => {
  return (
    <div>
      <div>This is a specific sent message</div>
    </div>
  );
};

export default SpecificSentMessage;

// const mapStateToProps = state => ({
//   specificMessage: state.specificSentMessageReducer.message
// });

// const mapDispatchToProps = dispatch => ({});

// const mapStateToProps = state => ({
//   sentMessages: state.sentMessagesReducer.sentMessages,
//   user: state.authReducer.user,
//   composeStatus: state.composeMailReducer.composeStatus,
//   sentMessagesStatus: state.sentMessagesReducer.sentMessagesStatus,
//   fetchSentStatus: state.sentMessagesReducer.fetchSentMessages,
//   deleteMessageStatus: state.deleteMessageReducer.deleteMessageStatus
// });

// const mapDispatchToProps = dispatch => ({
//   fetchSentMessages: () => dispatch(sentMessagesAction())
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ViewSentMessages);
