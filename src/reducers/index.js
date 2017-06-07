/**
 * Created by jonlazarini on 20/05/17.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import polls from './polls';
import users from './users';
import auth from './auth';
import votes from './votes';
import errors from './errors'


const reducers = combineReducers({
    polls,
    users,
    auth,
    votes,
    errors,
    routing: routerReducer
});

export default reducers;