/**
 * Created by jonlazarini on 20/05/17.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import polls from './polls';


const reducers = combineReducers({
    polls,
    routing: routerReducer
});

export default reducers;