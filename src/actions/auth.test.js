import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {signIn, signedIn, signOut, signedOut} from './auth';
// import {withGoogle} from './__mocks__/withGoogle';
import {signinWithGoogle} from '../utils/signinWithGoogle';

describe('auth action creator', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore();

  it('should handle signedOut action', () => {
    const expectedActions = {
      type: 'LOGGED_OUT'
    }

    expect(signedOut()).toEqual(expectedActions);
  });

  it('should handle signOut action', () => {
    const expectedActions = {
      type: 'LOGGED_OUT'
    }

    store.dispatch(signOut());
    expect(store.getActions()).toEqual([expectedActions]);
  });

  /*
  it('should handle signIn action', () => {
    const expectedActions = {
      type: 'CLEAR_ERROR',
      type: 'ATTEMPT_LOGIN',
      type: 'LOG_IN'
    }

    // const action = signIn(withGoogle);
    // store.dispatch(action())
    // expect(store.getActions()).toEqual(expectedActions);
    // expect(withGoogle.mock.call.length).toBe(1);

    return store.dispatch(signIn(signinWithGoogle)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);

    });

  });
  */

  it('should handle signedIn action', () => {
    const expectedActions = {
      type: 'LOG_IN',
      email: 'mail@mail.com',
      displayName: 'displayName',
      photoURL: 'photoURL',
      uid: 'uid'
    }

    expect(signedIn({
      email: 'mail@mail.com',
      displayName: 'displayName',
      photoURL: 'photoURL',
      uid: 'uid'
    }))
    .toEqual(expectedActions);
  });

});