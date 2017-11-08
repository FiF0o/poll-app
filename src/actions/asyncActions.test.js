import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// const {MockFirebase} = require('firebase-mock');
import {fetchedPolls, getPollsAsync} from '../actions/asyncActions';
import {FETCHING_POLLS, FETCHED_POLLS} from '../ActionTypes';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  })

  it('should create a FETCHED_POLLS when fetching polls have been done', () => {
    fetchMock
        .get('/path/to/firebase/polls', {'123': 'pollName'})

    const expectedActions = [
        {type: FETCHING_POLLS},
        {type: FETCHED_POLLS, polls: {'123': 'pollName'}}
    ];

    const store = mockStore({polls: {}});

    return store.dispatch(getPollsAsync())
        .then(() => {
            // return of async actions in store
            expect(store.getActions()).toEqual(expectedActions);
        })
  });

});
