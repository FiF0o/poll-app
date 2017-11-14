const auth = (state={}, action) => {
  const {type} = action;
  switch(type) {
    case 'ATTEMPT_LOGIN':
      return {
        type: 'SIGNING_IN',
        status: 'NOT_LOGGED'
      };
    default:
      return state;
  }   
};

export default auth;