export const loginAction = (email, password) => ({
    type: 'LOG_IN',
    email,
    password
});

export const signupAction = ({ firstName, lastName, password, username }) => ({
    type: 'SIGN_UP',
    email,
    password
});
