import { GET_ERRORS } from '../Types/authTypes';
import postServices from '../../Services/postServices';
// Register User
export const addPost = (data, history) => dispatch => {
   postServices
      .add(data)
      .then(res => {
         console.log('action', res);
         history.push(`/blog/${res.id}`);
      }) // re-direct to login on successful post add
      .catch(err =>
         dispatch({
            type: GET_ERRORS,
            payload: err,
         })
      );
};
