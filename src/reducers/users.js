/**
 * Created by jonlazarini on 20/05/17.
 */
import { combineReducers } from 'redux';

import {ADD_USER} from '../actionTypes';
import {initialState} from '../initialState';


const user = (state=initialState.users.byId[0], action) => {

    const { type, displayName, email, photoURL, uid } = action;

    switch(type) {
        case ADD_USER:
            return {
                displayName,
                email,
                photoURL,
                uid
            };

        default:
            return state;
    }
};

const byId = (state=initialState.users.byId, action) => {
  const {type, uid} = action;
  switch (type) {
      case ADD_USER:
          return {
              ...state,
              [uid]: user(state[uid], action)
          };
      default:
          return state;
  }
};

const allIds = (state=initialState.users.allIds, action) => {
    const {type, uid} = action;
    switch (type) {
        case ADD_USER:
            return [...state, uid];
        default:
            return state;
    }
};

const users = combineReducers({byId, allIds});

export default users
