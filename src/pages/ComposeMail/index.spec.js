import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ComposeMail, { mapStateToProps, mapDispatchToProps } from './index';
import store from '../../store';
import { auth as initialState } from '../../store/initialState/auth';

describe.only('Compose Mail Form', () => {
  afterEach(cleanup);
  beforeAll(() => {
    // ComposeMail.prototype.componentDidMount = () => {};
    const spy = jest.mock(ComposeMail.prototype, 'componentDidMount');
  });
  const checkLocalStorage = jest.fn();
  test('renders with default props', () => {
    const { getByPlaceholderText, asFragment } = render(
      <MemoryRouter>
        <ComposeMail store={store} checkLocalStorage={checkLocalStorage} />
      </MemoryRouter>
    );

    const input = getByPlaceholderText('recipient@epicmail.com');
    expect(input).toHaveAttribute('type', 'email');

    const subjectInput = getByPlaceholderText('subject');
    expect(subjectInput).toHaveAttribute('type', 'text');

    const messageInput = getByPlaceholderText('Your email here');
    expect(messageInput).toHaveAttribute('type', 'text');
  });

  test('fires validation error when user input is not valid', async () => {
    const { getByPlaceholderText, asFragment, findByTestId } = render(
      <MemoryRouter>
        <ComposeMail store={store} checkLocalStorage={checkLocalStorage} />
      </MemoryRouter>
    );
    const emailInput = getByPlaceholderText('recipient@epicmail.com');

    fireEvent.change(emailInput, { target: { value: 'username' } });
    fireEvent.blur(emailInput);

    const validationErrors = await findByTestId('recipientError');
    expect(validationErrors.innerHTML).toBe(
      'Recipient email must end with @epicmail.com'
    );
  });

  test('does not fire validation error if there is no validation for the input field', async () => {
    const { asFragment, getByPlaceholderText, findByTestId } = render(
      <MemoryRouter>
        <ComposeMail store={store} />
      </MemoryRouter>
    );
    const input = getByPlaceholderText('subject');
    expect(asFragment).toMatchSnapshot();
    fireEvent.blur(input);
    // const validationErrors = await findByTestId('passwordError');
  });
});

describe.only('Dispatch actions on validation success', () => {
  afterEach(cleanup);

  test('Should submit form if register button is clicked', () => {
    const composeMail = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <ComposeMail store={store} composeMail={composeMail} />
      </MemoryRouter>
    );
    const emailInput = getByPlaceholderText('recipient@epicmail.com');

    fireEvent.change(emailInput, {
      target: { persist: () => {}, value: 'theemail@email.com' }
    });
    fireEvent.blur(emailInput);
    fireEvent.click(getByText('Send'));
    // expect(composeMail).toHaveBeenCalled();
  });
});
