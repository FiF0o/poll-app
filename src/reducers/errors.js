import {HAS_ERRORED} from '../constants';
import {initialState} from '../initialState';

const errors = (state=initialState.errorMessage, action) => {
  const {type, errorMessage} = action;
  switch(type) {
    case HAS_ERRORED:
      return {
        errorMessage
      }
    default:
      // clears error
      return null;
  }   
};

export default errors;