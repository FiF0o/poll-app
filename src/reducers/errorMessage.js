import {HAS_ERRORED, CLEAR_ERROR} from '../constants';
import {initialState} from '../initialState';

const errorMessage = (state=initialState.errorMessage, action) => {
  const {type, errorMessage} = action;
  switch(type) {
    case HAS_ERRORED:
      return {
        errorMessage
      }
    case CLEAR_ERROR:
      return null
    default:
      return state;
  }   
};

export default errorMessage;