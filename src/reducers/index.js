/**
 * Created by jonlazarini on 20/05/17.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import polls, * as fromPolls from './polls';
import users from './users';
import auth from './auth';
import votes from './votes';


const reducers = combineReducers({
    polls,
    users,
    auth,
    votes,
    routing: routerReducer
});

export default reducers;


/**
 *
 * * State selectors for our containers
 *
 */
export const getPolls = (state) =>
    // gets getPolls from the module to retrieves all our polls byId
    fromPolls.getPolls(state.polls);
