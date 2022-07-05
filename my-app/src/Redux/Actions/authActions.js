import setAuthToken from '../../Utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from '../Types/authTypes';
import authServices from '../../Services/authServices';

// Register User
export const registerUser = (userData, history) => dispatch => {
   console.log(userData);
   authServices
      .register(userData)
      .then(res => {
         history.push('/login');
      }) // re-direct to login on successful register
      .catch(err =>
         dispatch({
            type: GET_ERRORS,
            payload: err.response,
         })
      );
};
// Login - get user token
export const loginUser = (userData, history) => dispatch => {
   authServices
      .login(userData)
      .then(res => {
         // Save to localStorage
         // Set token to localStorage
         const { token } = res.data;
         localStorage.setItem('jwtToken', token);
         // Set token to Auth header
         setAuthToken(token);
         // Decode token to get user data
         const decoded = jwt_decode(token);
         decoded.admin === true
            ? history.push('/dashboard')
            : history.push('/blog/acceuil');
         // Set current user
         dispatch(setCurrentUser(decoded));
      })
      .catch(err =>
         dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
         })
      );
};
// Set logged in user
export const setCurrentUser = decoded => {
   return {
      type: SET_CURRENT_USER,
      payload: decoded,
   };
};
// User loading
export const setUserLoading = () => {
   return {
      type: USER_LOADING,
   };
};
// Log user out
export const logoutUser = history => dispatch => {
   history.push('/welcom/login');
   // Remove token from local storage
   localStorage.removeItem('jwtToken');
   // Remove auth header for future requests
   setAuthToken(false);
   // Set current user to empty object {} which will set isAuthenticated to false
   dispatch(setCurrentUser({}));
};
