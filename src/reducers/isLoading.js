import {ATTEMPT_LOGIN, LOG_IN} from "../constants";
import {initialState} from '../initialState';

const isLoading = (state=initialState.isLoading, action) => {
  const {type} = action;
  switch(type) {
    case ATTEMPT_LOGIN:
      return true;
    case LOG_IN:
      return false;
    default:
      return state;
  }   
};

export default isLoading;