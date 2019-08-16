import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ConnectedSignupForm, {
  SignupForm,
  mapStateToProps,
  mapDispatchToProps
} from './index';
import store from '../../store';

describe('LoginForm Validation Fails', () => {
  afterEach(cleanup);
  test('should have validation error when firstName field is touched and not complete', async () => {
    const placeholderName = 'firstName';
    const { asFragment, getByPlaceholderText, findByTestId } = render(
      <MemoryRouter>
        <SignupForm store={store} />
      </MemoryRouter>
    );
    const input = getByPlaceholderText(placeholderName);
    expect(asFragment).toMatchSnapshot();
    fireEvent.blur(input);
    const validationErrors = await findByTestId('firstNameError');
    expect(validationErrors.innerHTML).toBe('Required');
  });

  test('should have validation error when lastName field is touched and not complete', async () => {
    const placeholderName = 'lastName';
    const { asFragment, getByPlaceholderText, findByTestId } = render(
      <MemoryRouter>
        <SignupForm store={store} />
      </MemoryRouter>
    );
    const input = getByPlaceholderText(placeholderName);
    expect(asFragment).toMatchSnapshot();
    fireEvent.blur(input);
    const validationErrors = await findByTestId('lastNameError');
    expect(validationErrors.innerHTML).toBe('Required');
  });

  test('should have validation error when username field is touched and not complete', async () => {
    const placeholderName = 'username';
    const { asFragment, getByPlaceholderText, findByTestId } = render(
      <MemoryRouter>
        <SignupForm store={store} />
      </MemoryRouter>
    );
    const input = getByPlaceholderText(placeholderName);
    expect(asFragment).toMatchSnapshot();
    fireEvent.blur(input);
    const validationErrors = await findByTestId('usernameError');
    expect(validationErrors.innerHTML).toBe('Required');
  });

  test('should have validation error when username field is touched and not complete', async () => {
    const placeholderName = 'email';
    const { asFragment, getByPlaceholderText, findByTestId } = render(
      <MemoryRouter>
        <SignupForm store={store} />
      </MemoryRouter>
    );
    const input = getByPlaceholderText(placeholderName);
    expect(asFragment).toMatchSnapshot();
    fireEvent.blur(input);
    const validationErrors = await findByTestId('emailError');
    expect(validationErrors.innerHTML).toBe('Required');
  });

  test('should have validation error when password field is touched and not complete', async () => {
    const placeholderName = 'password';
    const { asFragment, getByPlaceholderText, findByTestId } = render(
      <MemoryRouter>
        <SignupForm store={store} />
      </MemoryRouter>
    );
    const input = getByPlaceholderText(placeholderName);
    expect(asFragment).toMatchSnapshot();
    fireEvent.blur(input);
    const validationErrors = await findByTestId('passwordError');
    expect(validationErrors.innerHTML).toBe('Required');
  });

  test('should have validation error when confirmpassword field does not match password', async () => {
    const placeholderName = 'confirmPassword';
    const { asFragment, getByPlaceholderText, findByTestId } = render(
      <MemoryRouter>
        <SignupForm store={store} />
      </MemoryRouter>
    );
    const input = getByPlaceholderText(placeholderName);
    expect(asFragment).toMatchSnapshot();
    fireEvent.blur(input);
    const validationErrors = await findByTestId('confirmPasswordError');
    expect(validationErrors.innerHTML).toBe('Required');
  });
});

describe('SignupForm Validation Success', () => {
  afterEach(cleanup);
  test('simulate input and click the form submit button', async () => {
    const signUp = jest.fn();

    const { asFragment, getByPlaceholderText, getByTestId, getByText } = render(
      <MemoryRouter>
        <SignupForm store={store} signUp={signUp} />
      </MemoryRouter>
    );
    const firstNameInput = getByPlaceholderText('firstName');
    const lastNameInput = getByPlaceholderText('lastName');
    const usernameInput = getByPlaceholderText('username');
    const emailInput = getByPlaceholderText('email');
    const passwordInput = getByPlaceholderText('password');
    const confirmPasswordInput = getByPlaceholderText('confirmPassword');

    const submitButton = getByTestId('submitButton');
    const firstname = 'tmyFirstName';
    const username = 'username';
    const lastname = 'mylastName';
    const email = 'tolumideusername@epicmail.com';
    const password = 'Password2019#';
    const confirmPassword = 'Password2019#';

    fireEvent.change(firstNameInput, {
      persist: () => {},
      target: { value: firstname }
    });
    // debug(firstNameInput);
    expect(firstNameInput.value).toBe(firstname);

    fireEvent.change(lastNameInput, { target: { value: lastname } });
    expect(lastNameInput.value).toBe(lastname);

    fireEvent.change(usernameInput, { target: { value: username } });
    expect(usernameInput.value).toBe(username);

    fireEvent.change(emailInput, { target: { value: email } });
    expect(emailInput.value).toBe(email);

    fireEvent.change(passwordInput, { target: { value: password } });
    expect(passwordInput.value).toBe(password);

    fireEvent.change(confirmPasswordInput, {
      target: { value: confirmPassword }
    });

    expect(confirmPasswordInput.value).toBe(confirmPassword);

    expect(getByText('Sign up')).toBeTruthy();

    // fireEvent.submit(submitButton);

    // expect(getByText('Signing in')).toBeTruthy();
    // expect(asFragment).toMatchSnapshot();
    // await wait(() => {
    //   expect(signUp).toHaveBeenCalled();
    // });
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
    mapDispatchToProps(dispatch).signUp({});
  });
});
