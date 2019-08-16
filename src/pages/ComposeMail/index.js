import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Toastr from 'toastr';

import { composeMailAction } from '../../store/actions/composeMail';
import { composeDraftAction } from '../../store/actions/composeDraft';
const regEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
import { checkLocalStorage } from '../../utils';

export class ComposeMail extends Component {
  state = {
    recipient: '',
    subject: '',
    message: '',
    errors: {
      recipient: '',
      subject: '',
      message: ''
    }
  };

  errorMessage = [];

  // componentDidMount() {
  //   checkLocalStorage({ history: this.props.history });
  // }

  validateForm = ({ errors, recipient }) => {
    let valid = true;
    Object.values(errors).forEach(
      val => val.length > 0 && this.errorMessage.push(val) && (valid = false)
    );

    recipient.length < 1 &&
      this.errorMessage.push('Recipient email cannot be empty') &&
      (valid = false);
    return valid;
  };
  /* istanbul ignore next */
  saveDraft = e => {
    e.preventDefault();
    this.props.composeDraft({
      recipient: this.state.recipient,
      message: this.state.message,
      subject: this.state.message
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.validateForm(this.state)) {
      Toastr.error(this.errorMessage[this.errorMessage.length - 1]);
      return;
    }
    /* istanbul ignore next */
    this.props.composeMail({
      history,
      wholeMessage: {
        recipient: this.state.recipient,
        message: this.state.message,
        subject: this.state.subject
      }
    });
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.errors;
    switch (name) {
      case 'recipient':
        formErrors.recipient =
          value.endsWith('@epicmail.com') && value.length > 0
            ? ''
            : 'Recipient email must end with @epicmail.com';
        break;
      default:
        /* istanbul ignore next */
        break;
    }
    this.setState({ formErrors, [name]: [value] });
  };

  render() {
    const { recipient: recipientError } = this.state.errors;
    return (
      <>
        <div className="flex form_body m-10 mx-auto flex-col p-10 w-10/12 rounded">
          <div className="w-full bg-blue-700 text-base tracking-wide p-2 text-white">
            Compose Message
          </div>
          <div className="mt-4">
            <form onSubmit={this.handleSubmit}>
              <strong>From: </strong>
              <span>{this.props.user.email}</span>
              <div>
                <label htmlFor="recipient">
                  <input
                    placeholder="recipient@epicmail.com"
                    name="recipient"
                    type="email"
                    onChange={this.handleChange}
                    value={this.state.recipient}
                    className="mt-4 w-full h-10 p-2 pl-4 border border-gray-400 text-sm outline-none rounded-lg"
                  />
                  <div
                    className="text-xs text-red-500 italic font-bold"
                    data-testid="recipientError"
                  >
                    {recipientError.length > 1 && recipientError}
                  </div>
                </label>
              </div>
              <div>
                <label htmlFor="subject">
                  <input
                    placeholder="subject"
                    name="subject"
                    type="text"
                    value={this.state.subject}
                    onChange={this.handleChange}
                    className="mt-4 w-full h-10 p-2 pl-4 border border-gray-400 text-sm outline-none rounded-lg"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="message">
                  <textarea
                    placeholder="Your email here"
                    name="message"
                    type="text"
                    value={this.state.message}
                    onChange={this.handleChange}
                    rows="10"
                    cols="50"
                    className="mt-4 w-full p-2 pl-4 border border-gray-400 text-sm outline-none rounded-lg"
                  />
                </label>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={this.saveDraft}
                  type="button"
                  name="draft"
                  className="bg-blue-500 text-white p-1 focus:bg-blue-700"
                >
                  Save as draft
                </button>
                <input
                  name="send"
                  type="submit"
                  value="Send"
                  className="bg-blue-500 text-white p-1 focus:bg-blue-700"
                />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.authReducer.user
});

/* istanbul ignore next */
export const mapDispatchToProps = dispatch => ({
  composeMail: ({ history, wholeMessage }) =>
    dispatch(composeMailAction({ history, wholeMessage })),
  composeDraft: wholeMessage => dispatch(composeDraftAction(wholeMessage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposeMail);
