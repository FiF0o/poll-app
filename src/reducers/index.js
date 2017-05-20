/**
 * Created by jonlazarini on 20/05/17.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import polls from './polls';
import users from './users';
import auth from './auth';


const reducers = combineReducers({
    polls,
    users,
    auth,
    routing: routerReducer
});

export default reducers;