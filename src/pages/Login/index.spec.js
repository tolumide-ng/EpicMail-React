import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import configureMockStore from 'redux-mock-store';

import { LoginForm, mapStateToProps, mapDispatchToProps } from './index';
import store from '../../store';

// import jest from 'jest';

describe('LoginForm Validation Fails', () => {
  afterEach(cleanup);
  test('should have validation error when username field is touched and not complete', async () => {
    const placeholderName = 'username';
    const { asFragment, getByPlaceholderText, findByTestId } = render(
      <MemoryRouter>
        <LoginForm store={store} />
      </MemoryRouter>
    );
    const input = getByPlaceholderText(placeholderName);
    expect(asFragment).toMatchSnapshot();
    fireEvent.blur(input);
    const validationErrors = await findByTestId('usernameError');
    expect(validationErrors.innerHTML).toBe('username is required');
  });

  test('should have validation error when password field is touched and not complete', async () => {
    const { asFragment, getByPlaceholderText, findByTestId } = render(
      <MemoryRouter>
        <LoginForm store={store} />
      </MemoryRouter>
    );
    const input = getByPlaceholderText('password');
    expect(asFragment).toMatchSnapshot();
    fireEvent.blur(input);
    const validationErrors = await findByTestId('passwordError');
    expect(validationErrors.innerHTML).toBe('password is required');
  });
});

describe('LoginForm Validation Success', () => {
  afterEach(cleanup);
  test('simulate input and click the form submit button', async () => {
    const login = jest.fn();

    const { asFragment, getByPlaceholderText, getByTestId, getByText } = render(
      <MemoryRouter>
        <LoginForm store={store} login={login} />
      </MemoryRouter>
    );
    const usernameInput = getByPlaceholderText('username');
    const passwordInput = getByPlaceholderText('password');
    const submitButton = getByTestId('submitButton');
    const username = 'tolumideusername@epicmail.com';
    const password = 'Password2019#';

    fireEvent.change(usernameInput, { target: { value: username } });
    expect(usernameInput.value).toBe(username);

    fireEvent.change(passwordInput, { target: { value: password } });
    expect(passwordInput.value).toBe(password);

    expect(getByText('Sign in now')).toBeTruthy();
    fireEvent.submit(submitButton);
    expect(getByText('Signing in')).toBeTruthy();
    expect(asFragment).toMatchSnapshot();
    await wait(() => {
      expect(login).toHaveBeenCalled();
    });
  });
});

describe('Dispatch actions on validation success', () => {
  afterEach(cleanup);

  test('should show initial state', () => {
    const initialState = {
      error: 'Authentication error'
    };
    expect(mapStateToProps(initialState).error).toEqual('Authentication error');
  });

  test('should dispatch login request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).login({});
  });
});
