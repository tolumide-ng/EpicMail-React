import axios from 'axios';

export const loginAction = (email, password) => ({
    type: 'LOG_IN',
    email,
    password
});

export const signupPending = () => ({
    type: 'SIGNUP_PENDING',
    payload: {
        isLoading: true
    }
});

export const signupSuccess = (user) => ({
    type: 'SIGNUP_SUCCESS',
    payload: {
        isLoading: false,
        isCompleted: true,
        user
    }
});


export const signupFailure = (error) => ({
    type: 'SIGNUP_FAILURE',
    payload: {
        isLoading: false,
        isCompleted: true,
        error
    }
});


export const signupAction = (userData) => async (dispatch) =>{
    console.log('here');
 dispatch(signupPending());

 try {
    const response = await axios.post('', userData);
    const user = res.data.data.user;
    dispatch(signupSuccess(user))
 } catch ({response}) {
    const message = response.data.message || response
    dispatch(signupFailure(message))
 }
}