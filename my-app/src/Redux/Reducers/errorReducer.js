import { GET_ERRORS } from '../Types/authTypes';

const initialState = {};

const errorReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_ERRORS:
         return action.payload;
      default:
         return state;
   }
};
export default errorReducer;
