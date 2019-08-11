import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSpecificSentMessageAction } from '../../store/actions/specificSentMessage';
import { deleteMessageAction } from '../../store/actions/deleteMessage';
import { retractAction } from '../../store/actions/retractMessage';

const SpecificSentMessage = ({
  theSentMessage,
  fetchSpecificSentMessageAction,
  match,
  history,
  deleteSpecificMessage,
  retractSpecificMessage
}) => {
  const [loadPage, setLoadPage] = useState(true);

  const handleClick = ({ messageId, rerender }) => {
    deleteSpecificMessage({ messageId, history, rerender });
  };

  const retractMessage = ({ messageId, rerender }) => {
    retractSpecificMessage({ messageId, rerender, history });
  };

  useEffect(() => {
    if (loadPage) {
      fetchSpecificSentMessageAction({ messageId: match.params.id });
      setLoadPage(false);
    }
  }, [loadPage]);

  return (
    <div className="flex form_body m-10 mx-auto flex-col p-10 w-10/12 rounded h-full">
      <div className="mb-4">Sent Message: </div>

      {theSentMessage &&
        theSentMessage.map(message => (
          <div key={message.id}>
            <div className="flex justify-between sm:flex-col md:flex-col lg:flex-row xl:flex-row xl:justify-start text-lg mb-4">
              <div className="xl:mr-12 xl:mb-4 sm:mb-4 md:mb-4 lg:mb-0 xl:mb-0">
                <strong>To: </strong>
                <span>{message.receiveremail}</span>
              </div>
              <div className="xl:ml-10">
                <strong>Created on:</strong>
                <span>{message.createdon}</span>
              </div>
            </div>
            <div className="mb-4">
              <strong>Subject: </strong>
              <span>{message.subject}</span>
            </div>
            <div className="mb-4">
              <strong>Sender: </strong>
              <span className="italic">{message.senderemail}</span>
            </div>
            <div className="mb-4">
              <strong>Message:</strong>
              <div className="mt-2 border p-2">{message.message}</div>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-red-300 p-2 rounded focus:bg-red-400"
                onClick={() =>
                  retractMessage({ messageId: message.id, rerender: '/sent' })
                }
              >
                Retract Message
              </button>
              <button
                type="button"
                className="bg-red-300 p-2 rounded focus:bg-red-400"
                onClick={() =>
                  handleClick({ messageId: message.id, rerender: '/sent' })
                }
              >
                Delete Message
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
const mapStateToProps = state => ({
  theSentMessage: state.specificSentMessageReducer.specificSentMessage
});

const mapDispatchToProps = dispatch => ({
  fetchSpecificSentMessageAction: ({ messageId }) =>
    dispatch(fetchSpecificSentMessageAction({ messageId })),
  deleteSpecificMessage: ({ messageId, history, rerender }) =>
    dispatch(deleteMessageAction({ messageId, history, rerender })),
  retractSpecificMessage: ({ messageId, history, rerender }) =>
    dispatch(retractAction({ messageId, history, rerender }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecificSentMessage);
