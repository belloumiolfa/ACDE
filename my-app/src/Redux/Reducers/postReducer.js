import { ADD_POST } from '../Types/postTypes';
import isEmpty from 'is-empty';

const initialState = {
   posts: {},
};
const postReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            posts: !isEmpty(action.payload),
         };

      default:
         return state;
   }
};
export default postReducer;
